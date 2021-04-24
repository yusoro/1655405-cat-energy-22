if (document.documentElement.clientWidth > 767) {
  document.querySelector(".slider__catlook-after").classList.remove("hidden");
  document.querySelectorAll(".slider").forEach(function(slider) {
    // Создаем дополнительный блок div и
    // оборачиваем его вокруг первого изображения
    let div = document.createElement("div");
    let img = slider.querySelector("img");
    slider.insertBefore(div, img);
    div.append(img);
    // Создаем ползунок
    let range = document.createElement("input");
    range.type = "range";
    range.classList.add("slider__range");
    range.oninput = function() {
    div.style.width = this.value + "%";
    };
    let sliderControls = document.querySelector(".slider__controls");
    sliderControls.append(range);

    let before = document.querySelector(".slider__after");
    sliderControls.insertBefore(range, before);
    });
  }
