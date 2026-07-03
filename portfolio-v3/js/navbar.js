// ===============================
// Navbar
// ===============================

function initNavbar(){

const navbar=document.querySelector(".navbar");

const menu=document.getElementById("menu-btn");

const links=document.getElementById("navLinks");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

navbar.classList.add("scrolled");

}else{

navbar.classList.remove("scrolled");

}

});

menu.addEventListener("click",()=>{

links.classList.toggle("active");

});

document.querySelectorAll(".nav-links a")

.forEach(link=>{

link.addEventListener("click",()=>{

links.classList.remove("active");

});

});

}