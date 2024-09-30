// INITIALIZATION  SWIPER HEADER
const swiper = new Swiper(".swiper-header", {
    loop: true,

    pagination: {
        el: ".swiper-pagination",
    },
    effect: "fade",
    fadeEffect: {
        crossFade: true,
    },
    speed: 500,

    /*autoplay: {
        delay: 3000, 
    },*/

    navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
    },

    scrollbar: {
        el: ".swiper-scrollbar",
    },
});

let header = document.querySelector('header')
let logoImg = document.querySelector('.header-main .logo img')
//HEADER ADD ACTIVE CLASS (during scrolling)
window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 0) {
        header.classList.add("active")
        if(logoImg) logoImg.src = '/img/logo.png'
    } else {
        header.classList.remove("active")
        if(logoImg) logoImg.src = '/img/logo2.png'
    };
});