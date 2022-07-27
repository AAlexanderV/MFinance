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
let uahRange = document.querySelector(".range_uah_input");
let uahInput = document.querySelector(".uah_input");

window.onload = function () {
  recalc();
};

uahRange.addEventListener(
  "input",
  function () {
    /* После отжатия кнопки мышки с ползунка */
    uahInput.value = this.value;
    recalc();
  },
  false
);

uahInput.addEventListener(
  "input",
  function () {
    /* После отжатия кнопки мышки с ползунка */
    uahRange.value = this.value;
    recalc();
  },
  false
);

// Ползунок months
let mnthRange = document.querySelector(".range_month_input");
let mnthInput = document.querySelector(".month_input");

mnthRange.addEventListener(
  "input",
  function () {
    /* После отжатия кнопки мышки с ползунка */
    mnthInput.value = this.value;
    recalc();
  },
  false
);

mnthInput.addEventListener(
  "input",
  function () {
    /* После отжатия кнопки мышки с ползунка */
    mnthRange.value = this.value;
    recalc();
  },
  false
);

//OUTPUT
let monthlyFee = document.getElementById("monthlyFee");
let prcntRate = document.getElementById("prcntRate");
let creditExpenses = document.getElementById("expenses");
let one_timeComissions = document.getElementById("comissions");
let totalCredit = document.getElementById("totalCredit");

function recalc() {
  let loanBody;
  // Ограничение для вводимого размера кредита
  if (Number(uahInput.value) > 1500000) {
    loanBody = 1500000;
  } else if (Number(uahInput.value) < 27000) {
    loanBody = 27000;
  } else {
    loanBody = Number(uahInput.value);
  }
  uahInput.value = loanBody;

  // Ограничение для месяцев
  if (mnthInput.value > 60) {
    mnthInput.value = 60;
  } else if (mnthInput.value < 1) {
    mnthInput.value = 1;
  }

  let percent = 3; //monthly
  let expenses = (loanBody * percent * mnthInput.value) / 100;
  let total = expenses + loanBody;
  let perMonth = total / mnthInput.value;

  monthlyFee.innerHTML = `${Math.round(perMonth)} грн`; //Щомісячний платіж з урахуванням комісії
  prcntRate.innerHTML = `${percent * 12} %`; //Реальна % ставка
  creditExpenses.innerHTML = `${expenses} грн`; //Загальні витрати на споживчий кредит
  one_timeComissions.innerHTML = `${(loanBody * 2.5) / 100} грн`; //Одноразові комісії та платежі
  totalCredit.innerHTML = `${total} грн`; //Загальна сума кредиту
}
