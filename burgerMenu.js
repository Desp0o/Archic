localStorage.scrollY = window.scrollY;
var navbar = document.getElementById('navbar');
let burger = document.getElementById('burger-logo');
let darkMenu = document.getElementById('menu_black');
let xMark = document.getElementById('x_mark');
let gray = document.getElementById('gray');
let body = document.querySelector('html');


window.addEventListener('scroll', ()=>{
    let scroll = window.scrollY;

    if(scroll){
    navbar.style.backgroundColor = "white";
    }else{
        navbar.style.backgroundColor = "";
        navbar.style.top = "0px";
    }
});

burger.addEventListener('click', (e)=>{
    e.preventDefault();
    darkMenu.style.right = "0";
    navbar.style.backgroundColor = "";
    gray.style.display = "block";
    body.style.overflow = "hidden";
})

xMark.addEventListener('click', ()=>{
    darkMenu.style.right = "-70%";
    gray.style.display = "none";
    body.style.overflow = "auto";
})

gray.addEventListener('click', () =>{
    darkMenu.style.right = "-70%";
    gray.style.display = "none";
    body.style.overflowY = "auto";
})


///////////////////////////////////

document.getElementById('menu-imgs1').addEventListener('mouseenter', ()=>{
    document.getElementById('bheader-1').style.opacity= "1";
})
document.getElementById('menu-imgs1').addEventListener('mouseleave', ()=>{
    document.getElementById('bheader-1').style.opacity= "0";
})

document.getElementById('menu-imgs2').addEventListener('mouseenter', ()=>{
    document.getElementById('bheader-2').style.opacity= "1";
})
document.getElementById('menu-imgs2').addEventListener('mouseleave', ()=>{
    document.getElementById('bheader-2').style.opacity= "0";
})

document.getElementById('menu-imgs3').addEventListener('mouseenter', ()=>{
    document.getElementById('bheader-3').style.opacity= "1";
})
document.getElementById('menu-imgs3').addEventListener('mouseleave', ()=>{
    document.getElementById('bheader-3').style.opacity= "0";
})

document.getElementById('menu-imgs4').addEventListener('mouseenter', ()=>{
    document.getElementById('bheader-4').style.opacity= "1";
})
document.getElementById('menu-imgs4').addEventListener('mouseleave', ()=>{
    document.getElementById('bheader-4').style.opacity= "0";
})

