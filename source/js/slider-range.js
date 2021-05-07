    let sliderBefore = document.querySelector(".slider__before");
    let range = document.querySelector(".slider__range");
    range.oninput = function() {
    sliderBefore.style.width = this.value + "%";
    }

