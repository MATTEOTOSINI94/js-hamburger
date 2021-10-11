const btnMenu = document.querySelector(".header-right:nth-child(2)");
const hbMenu = document.querySelector(".hamburger-menu");

console.log(hbMenu.classList);



btnMenu.addEventListener("click", function(){
    hbMenu.style.display = "block";
})

const closeMenu = document.querySelector(".close")

closeMenu.addEventListener("click", function(){
    hbMenu.style.display = "none";
})

