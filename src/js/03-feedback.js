import throttle from 'lodash.throttle'

const feedbackForm = document.querySelector(".feedback-form");
const input = document.querySelector("input");
const textarea = document.querySelector("textarea");
const button = document.querySelector("button");

const STOREG_KEY = "feedback-form-state";

const getFormInfo = () => {
    const userInfo = {
        email: input.value,
        message: textarea.value
}
    localStorage.setItem(STOREG_KEY, JSON.stringify(userInfo));  
}

const localInfo = localStorage.getItem(STOREG_KEY);
let userInfo = {}
     if (localInfo) {
  userInfo = JSON.parse(localInfo);
input.value = userInfo.email;
  textarea.value = userInfo.message;
     }
const feedbackFormSubmit = (event) => {
    event.preventDefault()
    if (input.value === "" || textarea.value === "") {
        return
    }else{ console.log({
        email: input.value,
    message:textarea.value})}
   
    
    if (input.value === '' || textarea.value === '') {
        return
    }
   
    feedbackForm.reset();
    localStorage.removeItem(STOREG_KEY);
}
feedbackForm.addEventListener("input", throttle(getFormInfo, 500));
feedbackForm.addEventListener("submit", feedbackFormSubmit);