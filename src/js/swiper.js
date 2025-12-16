const gallerySwiper = new Swiper('.gallery-swiper', {
    slidesPerView: 3,
    centeredSlides: true,
    loop: true,
    spaceBetween: 30,
    speed: 600,

    breakpoints: {
        0: {
            slidesPerView: 1.3,
        },
        1439: {
            slidesPerView: 3,
        }
    }
});
