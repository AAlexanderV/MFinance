// to place header "fixed"
const header = document.querySelector(".header");
let mainImgH = document.getElementById("main_image").clientHeight;

window.addEventListener("scroll", function () {
  let scrollPos = window.scrollY;
  if (scrollPos > mainImgH * 0.5) {
    header.classList.add("fixed");
    header_logo.classList.add("white");
  }
  if (scrollPos < mainImgH * 0.5) {
    header.classList.remove("fixed");
    header_logo.classList.remove("white");
  }
});

// Для открывания бургер-меню (три полоски или Х)
const menu_btn = document.querySelector(".nav_toggle");
const menu_nav = document.querySelector(".nav");
const header_slogan = document.querySelector(".header_slogan");
const header_logo = document.querySelector(".header_logo");

menu_btn.addEventListener("click", function () {
  if (!menu_btn.classList.contains("active")) {
    // чтобы сделать актив = крестик
    menu_btn.classList.add("active");
    // присвоить актив для нав_2
    menu_nav.classList.add("active");
    header_slogan.classList.add("hide");
    header.classList.add("red");
    header_logo.classList.add("white");
  } else {
    // чтобы убрать актив = три полоски
    menu_btn.classList.remove("active");
    // убрать актив для нав_2
    menu_nav.classList.remove("active");
    header_slogan.classList.remove("hide");
    header.classList.remove("red");
  }
});

// Для элементов навигации, когда кликаешь по ним, чтобы свернуло бургер-меню обратно
const nav_links = document.querySelectorAll(".nav_link");

nav_links.forEach(function (item) {
  item.addEventListener("click", function () {
    menu_btn.classList.remove("active");
    menu_nav.classList.remove("active");
    header.classList.remove("red");
    header_slogan.classList.remove("hide");
  });
});

// КАЛЬКУЛЯТОР

// Ползунок UAH
let rangeUah = document.querySelector(".range_uah_input");

rangeUah.addEventListener(
  "change",
  function () {
    /* После отжатия кнопки мышки с ползунка */
    console.log(this.value);
  },
  false
);

// range.addEventListener("input", function () {
//     /* Во время движения ползунка */
//     console.log(this.value);
//   },
//   false
// );

// Ползунок months
