if (document.documentElement.clientWidth > 767) {
  document.querySelector(".slider__catlook-after").classList.remove("hidden");
  document.querySelectorAll(".slider__photos").forEach(function(slider) {
    // Создаем дополнительный блок div и
    // оборачиваем его вокруг первого изображения
    let div = document.createElement("div");
    let img = slider.querySelector("picture");
    slider.insertBefore(div, img);
    div.append(img);
    // Создаем ползунок
    let range = document.querySelector(".slider__range");
    range.oninput = function() {
    div.style.width = this.value + "%";
    }
  })};

