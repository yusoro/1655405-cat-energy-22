let inputName = document.querySelector(".form__input--petname");
let inputWeight = document.querySelector(".form__input--weight");
let inputMail = document.querySelector(".form__input--email");
let inputTel = document.querySelector(".form__input--tel");

let form = document.querySelector(".form");

form.addEventListener("submit", function(evt) {
  if(!inputName.value || !inputWeight.value || !inputMail.value || !inputTel.value) {
    evt.preventDefault();
    inputName.classList.add("required");
    inputWeight.classList.add("required");
    inputMail.classList.add("required");
    inputTel.classList.add("required");
  }
});
