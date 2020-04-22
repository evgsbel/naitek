// // $(() => {
// //     $(window).on('load', function () {
// //         $('.preloader__wrp').fadeOut();
// //     });
// // });


$(document).ready(function () {

    $('.js-hover-hide-phone').click(function visibleHidePhoneClick() {
        $(this).find('.top-contacts__hide').toggleClass('is-visible')
    });
    $('.js-hover-hide-phone').hover(function visibleHidePhone() {
        $(this).find('.top-contacts__hide').toggleClass('is-visible')
    });


    let arrow_prev = "<svg width='24' height='43' viewBox='0 0 24 43' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M22.5 2L3 21.5L22.5 41' ' stroke-width='3'/></svg>",
        arrow_next = "<svg width='24' height='43' viewBox='0 0 24 43' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M2 2L21.5 21.5L2 41'  stroke-width='3'/></svg>"

    // js-banner-slider
    $('.js-slider-banner').owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        nav: true,
        navText: [arrow_prev, arrow_next],
        navClass: ["slider-arrow slider-arrow_prev", "slider-arrow slider-arrow_next"],
        navContainerClass: 'slider-arrow__wrp',
        dotsClass: 'dots',
        dotClass: 'dots__item'
    });

    // main product slider
    $('.js-slider-product').owlCarousel({
        loop: true,
        margin: 20,
        dots: false,
        nav: true,
        navText: [arrow_prev, arrow_next],
        navClass: ["slider-arrow slider-arrow_prev slider-arrow_blue", "slider-arrow slider-arrow_next slider-arrow_blue"],
        navContainerClass: 'slider-arrow__wrp',
        responsive: {
            0: {
                items: 1,
                margin: 0
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });

        // js-banner-slider
    $('.js-mobile-news-slider').owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        nav: true,
        navText: [arrow_prev, arrow_next],
        navClass: ["slider-arrow slider-arrow_prev slider-arrow_blue", "slider-arrow slider-arrow_next slider-arrow_blue"],
        navContainerClass: 'mobile-news__arrow-wrp slider-arrow__wrp',
    });

});

$(() => {
    $('.hamburger').on('click', function headerHambClick() {
        $(this).toggleClass('is-active')
        $('.mobile-hide')
            .toggleClass('is-open')
            .slideToggle();
        //     .removeClass('feed-open');
    });
});