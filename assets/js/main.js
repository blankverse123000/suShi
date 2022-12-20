/*=============== SHOW MENU ===============*/

/*=============== REMOVE MENU MOBILE ===============*/

/*=============== CHANGE BACKGROUND HEADER ===============*/

/*=============== SHOW SCROLL UP ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== DARK LIGHT THEME ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
let navChange = document.querySelector(".navChange");
let body = document.querySelector("body");
let themeBtn = document.querySelector(".themeBtn");
let theme_icon = document.querySelector(".theme_icon");
function darkTheme() {
  body.classList.toggle("darkMode");
  navChange.classList.toggle("navbar-dark");
  navChange.classList.toggle("bg-dark");
  navChange.classList.toggle("bg-body");
  themeBtn.classList.toggle("text-white");
  theme_icon.classList.toggle("ri-moon-line");
  theme_icon.classList.toggle("ri-sun-line");
}

themeBtn.addEventListener("click", darkTheme);
