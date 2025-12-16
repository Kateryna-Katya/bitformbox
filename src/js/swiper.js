const swiper = new Swiper('.gallery-swiper', {
    loop: true,
    centeredSlides: true,
    spaceBetween: 40,
    speed: 700,

    autoplay: {
        delay: 2500,     
        disableOnInteraction: false, 
        pauseOnMouseEnter: true 
    },

    breakpoints: {
        0: {
            slidesPerView: 1.3,
        },
        1439: {
            slidesPerView: 3,
        }
    }
});
