import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');
const LOCALSTORAGE_KEY = 'feedback-form-state';
form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onSubmitForm);

const formData = {};

function onFormData(evt) { 
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function onSubmitForm(evt) {
  evt.preventDefault();
  formData.email = email.value;
  formData.message = message.value;
  console.log(formData); 
  evt.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

(function dataFromLocalStorage() {  
  const data = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));   
   if (data) {
    formData.email = data.email;
    email.value = data.email;
    formData.message = data.message;
    message.value = data.message;
  } 
})();