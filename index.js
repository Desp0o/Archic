//საწყისი სამი ნიუსი
window.addEventListener('scroll', () =>{

let newsWindow = document.querySelector('.news');
let windowHeght = window.innerHeight;
let revealTop = newsWindow.getBoundingClientRect().top;
let revealPoint = 100;

if(revealTop < windowHeght - revealPoint){
    document.getElementById('news1').style.marginTop = "0";
    document.getElementById('news1').style.opacity = "1";

    document.getElementById('news2').style.marginTop = "0";
    document.getElementById('news2').style.opacity = "1";

    document.getElementById('news3').style.marginTop = "0";
    document.getElementById('news3').style.opacity = "1";

    window.onload = () =>{
        document.getElementById('news1').style.marginTop = "0";
        document.getElementById('news1').style.opacity = "1";

        document.getElementById('news2').style.marginTop = "0";
        document.getElementById('news2').style.opacity = "1";

        document.getElementById('news3').style.marginTop = "0";
        document.getElementById('news3').style.opacity = "1";

        seeMore.style.opacity = "1";
    }
}

})

// see more ღილაკი
window.addEventListener('scroll', () =>{
    let newsWindow = document.querySelector('.news');
    let windowHeght = window.innerHeight;
    let revealTop = newsWindow.getBoundingClientRect().top;
    let seeMoreRevealPoint = 250;
    let seeMore = document.getElementById('see_more');

if(revealTop < windowHeght - seeMoreRevealPoint){
    
    seeMore.style.opacity = "1";

    window.onload = () =>{
        seeMore.style.opacity = "1";
    }
}
})