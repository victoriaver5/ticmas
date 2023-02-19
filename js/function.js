const  Menu = document.querySelector(".menu");
const openmenuBtn = document.querySelector(".open-menu");
const closemenuBtn = document.querySelector(".close-menu");

function toggleMenu (){
    Menu.classList.toggle("menu_opened")
}

openmenuBtn.addEventListener("click", toggleMenu);
closemenuBtn.addEventListener("click",toggleMenu);