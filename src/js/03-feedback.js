import throttle from 'lodash.throttle';
const LOCALSTORAGE_KEY_FORM = 'feedback-form-state';
// const formData = {};
const form = document.querySelector('.feedback-form');
const message = document.querySelector('textarea');
const email = document.querySelector('input');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(evt) {
  // formData[evt.target.name] = evt.target.value;
  const formData = { email: email.value, message: message.value };
  // console.log(formData);
  localStorage.setItem(LOCALSTORAGE_KEY_FORM, JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY_FORM)));
  evt.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY_FORM);
}

function cheksStorage() {
  const parseSavedData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY_FORM));
  // console.log(localStorage.getItem(LOCALSTORAGE_KEY_FORM));
  // console.log(parseSavedData);
  if (parseSavedData) {
    email.value = parseSavedData.email;
    message.value = parseSavedData.message;
  } else {
    email.value = '';
    message.value = '';
  }
}
cheksStorage();
