const burger=document.querySelector('.burger')
const nav_menu=document.querySelector('.nav-menu')
const body = document.querySelector('body')

    burger.onclick=()=>{
        burger.classList.toggle('active-burger');
        nav_menu.classList.toggle('nav-menu-active')
        body.classList.toggle('lock')
    }

    nav_menu.onclick=()=>{
        nav_menu.classList.remove('nav-menu-active')
        burger.classList.remove('active-burger');
        body.classList.remove('lock')
    }
