window.addEventListener("scroll", function(){
    var header= document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});
// let menu = document.querySelector('#menu-bar');
// let navbar = document.querySelector('.navbar');

// menu.onclick = () =>{
//     menu.classList.toggle('uil-times');
//     navbar.classList.toggle('active');

// }
// window.onscroll = () =>{

//     menu.classList.remove('uil-times');
//     navbar.classList.remove('active');

// }