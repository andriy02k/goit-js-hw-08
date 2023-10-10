import throttle from 'lodash/throttle';

const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";

const obj = JSON.parse(localStorage.getItem(localStorageKey));

form.elements.email.value = obj?.email || "";
form.elements.message.value = obj?.message || "";

form.addEventListener("input", throttle(saveFormState, 500));

form.addEventListener("submit", handlerSubmit);

function saveFormState() {
    const formState = {
        email: form.elements.email.value,
        message: form.elements.message.value,
    };
    localStorage.setItem(localStorageKey, JSON.stringify(formState));
}

function handlerSubmit(evt) {
  evt.preventDefault();

  console.log(localStorage.getItem(localStorageKey));

  localStorage.removeItem(localStorageKey);
  form.reset(); 
};