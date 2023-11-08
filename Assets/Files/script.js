const menuContainer = document.querySelector(".menu-container");
const openMenuBtn = document.querySelector(".hamburger-menu-icon");
const closeMenuBtn = document.querySelector(".close-menu-btn");

// menu open, close btn
openMenuBtn.addEventListener("click", () => {
  menuContainer.classList.toggle("active");
});
closeMenuBtn.addEventListener("click", () => {
  menuContainer.classList.toggle("active");
});

// Category section open , close btn
const categorySection = document.querySelector(".side-category-section");
const openCategoryBtn = document.querySelector(".categories-btn");
const closeCategoryBtn = document.querySelector(".category-closeBtn");

openCategoryBtn.addEventListener("click", () => {
  categorySection.classList.toggle("enable");
});
closeCategoryBtn.addEventListener("click", () => {
  categorySection.classList.toggle("enable");
});

// Category colors selector
const colorBoxes = document.querySelectorAll(".colors-box");
const checkMarkIcon = document.querySelectorAll(".colors-box .checkmark");

colorBoxes.forEach((Colors, i) => {
  const selectedColor = Colors.getAttribute("data-color");
  setBgColor(Colors, selectedColor); // callbackFunction

  // select color on click
  Colors.addEventListener("click", () => {
    checkMarkIcon[i].classList.toggle("clicked");
  });
});
function setBgColor(element, color) {
  element.style.backgroundColor = color;
}
