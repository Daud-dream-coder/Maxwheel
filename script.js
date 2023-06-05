// login open-close button

document.querySelector('.login-btn').onclick = () => {
    document.querySelector('.login-form-container').classList.toggle('active');
}

document.querySelector('#close-login-form').onclick = () => {
    document.querySelector('.login-form-container').classList.remove('active');
}


// swiper scripts 
var swiper = new Swiper(".vehicles-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            // spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            // spaceBetween: 40,
        },
        991: {
            slidesPerView: 3,
            // spaceBetween: 50,
        },
    },
});




