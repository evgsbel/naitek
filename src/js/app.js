// // $(() => {
// //     $(window).on('load', function () {
// //         $('.preloader__wrp').fadeOut();
// //     });
// // });


$(document).ready(function () {


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


$(() => {
    $(".js-select").select2({
        language: "ru",
        minimumResultsForSearch: -1
    });
});

function formatState(state) {
    if (!state.id) {
        return state.text;
    }

    var baseUrl = "./assets/img/";
    var $state = $(
        '<span class="d-flex align-items-center"><div class="header__currency-img"><img class="" /></div> <span class="header__currency-title"></span></span>'
    );

    // Use .text() instead of HTML string concatenation to avoid script injection issues
    $state.find("span").text(state.text);
    $state.find("img").attr("src", baseUrl + "/" + state.element.value.toLowerCase() + ".svg");

    return $state;
};

$(".js-select-state").select2({
    templateSelection: formatState,
    templateResult: formatState,
    language: "ru",
    minimumResultsForSearch: -1,
    id: "id"
});

// fix header
$(function () {
    $fixBlock = $('.fixed');
    $fixBlock.css('width', $fixBlock.outerWidth());
    $window = $(window);
    // $h = $fixBlock.offset().top;
    $window.scroll(function () {
        if ($window.scrollTop() > 180) {
            $fixBlock.addClass('is-active');
            $fixBlock.fadeIn()
        } else {
            $fixBlock.removeClass('is-active');
            $fixBlock.fadeOut()
        }
    });
});

$('.js-open-fix-header').click(function openFixHeader() {
    $(this).toggleClass('is-active');
    $(this).closest('.fixed').find('.header').slideToggle();
})

$('[data-fancybox]').fancybox({
    btnTpl: {
        smallBtn:
            '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small modal-form__close" title="{{CLOSE}}">' +
            '<svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg>' +
            "</button>"
    }
});

// input count
$(function () {

    (function quantityProducts() {
        let $quantityArrowMinus = $(".input-count__btn_minus");
        let $quantityArrowPlus = $(".input-count__btn_plus");
        let $quantityNum = $(".input-count__input");

        $quantityArrowMinus.click(quantityMinus);
        $quantityArrowPlus.click(quantityPlus);

        function quantityMinus() {
            if ($quantityNum.val() > 1) {
                $quantityNum.val(+$quantityNum.val() - 1);
            }
        }

        function quantityPlus() {
            $quantityNum.val(+$quantityNum.val() + 1);
        }
    })();

});


//scroll bar
(function ($) {
    $(window).on('load', function () {
        $('el').mCustomScrollbar({
            axis: 'y',              // вертикальный скролл
            theme: 'rounded-dark',  // тема
            scrollInertia: '330',   // продолжительность прокрутки, значение в миллисекундах
            setHeight: 800,         // высота блока (переписывает CSS)
            mouseWheel: {
                deltaFactor: 300    // кол-во пикселей на одну прокрутку колёсика мыши
            }
        });
    });
})(jQuery);

// результаты поиска (всплывающее окно)

$('.js-input-search').keyup(function () {
    if (this.value.length > 2) {
        $(document).click(function (event) { // скрываем
            if ($(event.target).closest(".js-search-results").length) return;
            $(".js-search-results").slideUp("fast");
            //event.stopPropagation();
        });
        $(".js-search-results").slideDown("fast");
        $(this).addClass('is-active');
    } else {
        // Если набрано меньше 2 символов, скрыть контейнер (CSS display:none;)
        $(".js-search-results").slideUp("fast");
        $(this).removeClass('is-active');
    }
})

// tabs
// const tabs = document.querySelector(".tabs");
// const tabsBtn = tabs.querySelectorAll(".tabs__btn");
// const tabsContents = tabs.querySelectorAll(".tabs__content");
//
// function displayCurrentTab(current) {
//   for (let i = 0; i < tabsContents.length; i++) {
//     tabsContents[i].style.display = (current === i) ? "block" : "none";
//   }
// }
// displayCurrentTab(0);
//
//
// tabs.addEventListener("click", event => {
//     for (let i = 0; i < tabsBtn.length; i++) {
//         tabsBtn[i].classList.remove("is-active");
//     }
//   if (event.target.className === "tabs__btn") {
//     for (let i = 0; i < tabsBtn.length; i++) {
//       if (event.target === tabsBtn[i]) {
//
//         displayCurrentTab(i);
//         event.target.classList.add('is-active');
//         break;
//       }
//     }
//   }
// });


