const elImgLink = document.querySelector(".img-link");
const elImg = document.querySelector(".header__img");
const elSecondImg = document.querySelector(".img");
elImg.addEventListener("click", function (evt) {
  evt.preventDefault();
  elSecondImg.classList.remove();
  elSecondImg.classList.add("image");
});
// let header = document.getElementsByClassName("img-link");
// let elImg = document.querySelector(".header__img");
// let elNewImg = document.querySelector(".image");
// let elBtn = document.querySelector(".button");
// let elHeading = document.querySelector(".header__head");
// header.addEventListener("click", function (evt) {
//   evt.preventDefault();
//   elNewImg.classList.remove();
//   elNewImg.classList.add("image");
// });
// elImg.addEventListener("click", function (e) {
//   e.preventDefault();
//   window.location.replace("imag.html");
// });
// elBtn.addEventListener("submit", function (evt) {
//   evt.preventDefault();
//   console.log("bosildi");
// });
