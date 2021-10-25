let hamburger = document.querySelector(".hamburger");
let navbar = document.querySelector(".navbar");
let main = document.querySelector(".main")
let grid = document.querySelector(".grid3")
let mob = document.querySelector(".mob")
let menu = document.querySelector(".mobile-menu")
let hamicon = document.querySelector(".ham-icon") 


hamburger.addEventListener("click", function(){
    menu.classList.toggle("open")
    mob.classList.toggle("block")
    navbar.classList.toggle("close")
    main.classList.toggle("close")
    grid.classList.toggle("close")
})

hamicon.addEventListener("click", function(){
    menu.classList.remove("open")
    mob.classList.remove("block")
    navbar.classList.remove("close")
    main.classList.remove("close")
    grid.classList.remove("close")
})








