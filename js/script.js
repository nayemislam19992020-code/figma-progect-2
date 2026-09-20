const menu = document.querySelector(".nav-menu");
const openMenu = document.querySelector("#open-menu-btn");
const closeMenu = document.querySelector("#close-menu-btn");


// Open menu
openMenu.addEventListener("click", () => {

    menu.classList.add("active");

    openMenu.style.display = "none";
    closeMenu.style.display = "block";

});


// Close menu
closeMenu.addEventListener("click", () => {

    menu.classList.remove("active");

    openMenu.style.display = "block";
    closeMenu.style.display = "none";

});