  //mobile-menu
  var navMain = document.querySelector('.page-nav');
  var navToggle = document.querySelector('.page-nav__toggle');

  navMain.classList.remove('page-nav--nojs');

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('page-nav--closed')) {
      navMain.classList.remove('page-nav--closed');
      navMain.classList.add('page-nav--opened');
    } else {
      navMain.classList.add('page-nav--closed');
      navMain.classList.remove('page-nav--opened');
    }
  });

//slider-mobile
let before = document.querySelector(".slider__catlook-before");
let after = document.querySelector(".slider__catlook-after");
let toggler = document.querySelector(".slider__input");

toggler.onchange = function() {
  before.classList.toggle("hidden");
  after.classList.toggle("hidden");
}

//slider-range
let sliderBefore = document.querySelector(".slider__before");
let range = document.querySelector(".slider__range");
range.oninput = function() {
sliderBefore.style.width = this.value + "%";
}
