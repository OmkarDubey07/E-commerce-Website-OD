const menuContainer = document.querySelector('.menu-container');
const openMenuBtn = document.querySelector('.hamburger-menu-icon');
const closeMenuBtn = document.querySelector('.close-menu-btn');

// menu open close btn
openMenuBtn.addEventListener('click' , ()=>{
    menuContainer.classList.toggle('active');
});
closeMenuBtn.addEventListener('click' , ()=>{
    menuContainer.classList.toggle('active');
});
