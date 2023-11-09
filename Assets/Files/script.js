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

// size Select button click event
const sizeSelectBtn = document.querySelectorAll(".sizeBoxes button");
sizeSelectBtn.forEach((sizeBtn) => {
  sizeBtn.addEventListener("click", () => {
    sizeBtn.classList.toggle("btnClicked");
  });
});

// Price Range calculators
const rangeInput = document.querySelectorAll(".range-input input");
const priceInput = document.querySelectorAll(".price-inputs input");
const range = document.querySelector(".priceSlider .progress");

let priceGap = 1000;
priceInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minPrice = parseInt(priceInput[0].value),
      maxPrice = parseInt(priceInput[1].value);

    if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
      if (e.target.className === "input-min") {
        rangeInput[0].value = minPrice;
        range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
      } else {
        rangeInput[1].value = maxPrice;
        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
      }
    }
  });
});

rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(rangeInput[0].value),
      maxVal = parseInt(rangeInput[1].value);

    if (maxVal - minVal < priceGap) {
      if (e.target.className === "range-min") {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
    }
  });
});
