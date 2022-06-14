const burger=document.querySelector(".burger")
const nav_menu=document.querySelector(".nav-menu")
    burger.onclick=()=>{
        burger.classList.toggle("active-burger");
        nav_menu.classList.toggle("nav-menu-active")
    }