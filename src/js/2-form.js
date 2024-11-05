const form = document.querySelector('.feedback-form');

const localKey = "feedback-form-state";
const localData = JSON.parse(localStorage.getItem(localKey));

const formData = {
    email: "",
    message: "",
};

if (localData) {
    for (const key of Object.keys(localData)) {
        document.querySelector(`[name = "${key}"]`).value = localData[key];
        formData[key] = localData[key];
    };
};

form.addEventListener('input', savetoLocalStorage);
form.addEventListener('submit', checkFormInputs);

function savetoLocalStorage(e) {
    formData[e.target.name] = e.target.value;

    localStorage.setItem(localKey, JSON.stringify(formData));
};

function checkFormInputs(e) {
    e.preventDefault();

    let inputEmail = e.target.elements.email.value;
    let inputMessage = e.target.elements.message.value;

    if (inputEmail.trim() === '' || inputMessage.trim() === '') {
        alert('Fill please all fields');
    } else {
        console.log(formData);
        
        localStorage.clear();
        form.reset();
        Object.keys(formData).forEach(key => formData[key] = '');
    };
};