var skillSwiper = new Swiper(".skill-swiper",{
    grabCursor: true,
    initialSlide: 3,
    speed: 3000,
    loop: true,
    rotate: true,
    slidesPerView: 5,
    autoplay: {
        delay: 10,
        pauseOnMouseEnter: true,
    },
    spaceBetween:1,
});

var projSwiper = new Swiper(".proj-swiper",{
    grabCursor: true,
    speed: 1000,
    loop: true,
    rotate: true,
    slidesPerView:3,
    autoplay: {
        delay: 4000,
        pauseOnMouseEnter: true,
    },
    spaceBetween:10,
});