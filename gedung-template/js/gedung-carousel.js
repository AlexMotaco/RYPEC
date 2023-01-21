(function($) {
    'use strict';
    $(document).ready(function() {
        var swiper = new Swiper('.testimonial-block .swiper-container, .testimonial-block.about-page .swiper-container', {
            spaceBetween: 30,
            loop: true,
            speed: 2000,
            pagination: {
                clickable: true,
                el: '.testimonial-block .swiper-pagination',
            },
            navigation: {
                nextEl: '.testimonial-block  .swiper-button-next',
                prevEl: '.testimonial-block  .swiper-button-prev',
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                },
                640: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                },
                768: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                },
            },
        });
    });
})(jQuery);
