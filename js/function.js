const menu = document.querySelector(".menu");
const openmenuBtn = document.querySelector(".openmenu");
const closemenuBtn = document.querySelector(".closemenu");

function toggleMenu(){
    menu.classList.toggle("menu_opened")
}

openmenuBtn.addEventListener("click", toggleMenu);
closemenuBtn.addEventListener("click",toggleMenu);