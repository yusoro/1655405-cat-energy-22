let before = document.querySelector(".slider__catlook-before");
let after = document.querySelector(".slider__catlook-after");
let toggler = document.querySelector(".slider__input");

toggler.onchange = function() {
  before.classList.toggle("hidden");
  after.classList.toggle("hidden");
}
