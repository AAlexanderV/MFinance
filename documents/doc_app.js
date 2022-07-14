// Для открывания бургер-меню (три полоски или Х)
const menu_btn = document.querySelector(".nav_toggle");
const menu_nav = document.querySelectorAll(".nav");
const header_slogan = document.querySelector(".header_slogan");
const header_logo = document.querySelector(".header_logo");

menu_btn.addEventListener("click", function () {
  if (!menu_btn.classList.contains("active")) {
    // чтобы сделать актив = крестик
    menu_btn.classList.add("active");
    // присвоить актив для нав_2
    menu_nav.forEach((element) => {
      element.classList.add("active");
    });
    header_slogan.classList.add("hide");
    header.classList.add("red");
    header_logo.classList.add("white");
  } else {
    // чтобы убрать актив = три полоски
    menu_btn.classList.remove("active");
    // убрать актив для нав_2
    menu_nav.forEach((element) => {
      element.classList.remove("active");
    });
    // menu_nav.classList.remove("active");
    header_slogan.classList.remove("hide");
    header.classList.remove("red");
  }
});

// Для элементов навигации, когда кликаешь по ним, чтобы свернуло бургер-меню обратно
const nav_links = document.querySelectorAll(".nav_link");

nav_links.forEach(function (item) {
  item.addEventListener("click", function () {
    menu_btn.classList.remove("active");
    menu_nav.forEach((element) => {
      element.classList.remove("active");
    });
    // menu_nav.classList.remove("active");
    header.classList.remove("red");
    header_slogan.classList.remove("hide");
  });
});

// Открывание Iframe
let iframeBtn = document.querySelectorAll(".doc_iframe");
let iframeDiv = document.querySelector(".iframe_window");
let iframeInner = document.querySelector("iframe");
console.log(iframeInner);
console.log(iframeBtn);

iframeBtn.forEach(function (item) {
  console.log(`item: ${item}`);
  item.addEventListener("click", function () {
    let link = item.getAttribute("data-link");
    console.log(link);
    iframeDiv.classList.remove("none");
    console.log("removed");
    iframeInner.src = link;
    console.log(iframeInner.src);
  });
});
