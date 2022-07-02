var navbar = document.getElementById('navbar');
let burger = document.getElementById('burger-logo');
let darkMenu = document.getElementById('menu_black');
let xMark = document.getElementById('x_mark');
let gray = document.getElementById('gray');


window.addEventListener('scroll', ()=>{
    let scroll = window.scrollY;
    if(scroll){
    navbar.style.backgroundColor = "white";
    navbar.style.top = "2px"
    }else{
        navbar.style.backgroundColor = "";
        navbar.style.top = "0px"
    }
});

burger.addEventListener('click', (e)=>{
    e.preventDefault();
    darkMenu.style.right = "0";
    navbar.style.backgroundColor = "";
    gray.style.display = "block"
})

xMark.addEventListener('click', ()=>{
    darkMenu.style.right = "-70%";
    gray.style.display = "none"
})

gray.addEventListener('click', () =>{
    darkMenu.style.right = "-70%";
    gray.style.display = "none"
    
})
