$(document).ready(function(){

    // Анимация "аккордеона"
    $('.accordeon__element').attr('open', true).each(function() {
        const $summary = $(this).find('summary'); 
        $summary.nextAll().wrapAll('<div class="con"></div>').parent().hide(); 

        $summary.on('click', function(e) {
            e.preventDefault(); 
            $(this).next('.con').slideToggle(); 
            $(this).find('.arrow').toggleClass('up');

            $(this).parent().parent().siblings().children().each(function() {
                $(this).find('.con').slideUp(); 
                $(this).find('.arrow').removeClass('up');
            })

        });
    });

    // Валидация полей с классом phone-input
    $('.phone-input').each(function() {
        const $input = $(this);
        const $textField = $input.closest('.text-field');
        
        $input.inputmask('+7 (999) 999 - 99 - 99', {
            'placeholder': ' ',
            'clearMaskOnLostFocus': true,
            'clearIncomplete': false,
            'showMaskOnHover': false,
            'showMaskOnFocus': true,
            'removeMaskOnSubmit': true
        });
        
        $input.on('blur', function() {
            const unmasked = $input.inputmask('unmaskedvalue');
            
            if (unmasked.length === 10) {
                $textField.removeClass('invalid');
            } else if (unmasked.length > 1) {
                $textField.addClass('invalid');
            } else {
                $textField.removeClass('invalid');
            }
        });

        $input.on('focus', function() {
            $textField.removeClass('invalid');
        })
    });

    const swiper1 = new Swiper('#projects-swiper', {
        loop: true,
        speed: 600,
        slidesPerView: 1,
        spaceBetween: 0,

        navigation: {
            nextEl: '.next-1',
            prevEl: '.prev-1',
        },

        on: {
            init: function () { createPagination1(this); },
            slideChange: function () { updatePagination1(this); },
        }
    });


    function createPagination1(swiperInstance) {
        const $pagination = $('#pagination-1');
        const totalSlides = $(swiperInstance.el)
            .find('.swiper-slide:not(.swiper-slide-duplicate)')
            .length;

        $pagination.empty();

        for (let i = 0; i < totalSlides; i++) {
            $('<div>')
                .addClass('pagination-bullet')
                .toggleClass('active', i === 0)
                .on('click', function () {
                    swiperInstance.slideToLoop(i);
                })
                .appendTo($pagination);
        }
    }

    function updatePagination1(swiperInstance) {
        $('#pagination-1 .pagination-bullet')
            .removeClass('active')
            .eq(swiperInstance.realIndex)
            .addClass('active');
    }


    // =====================
    // Слайдер 2 — 3 слайда
    // =====================

    const swiper2 = new Swiper('#reviews-swiper', {
        loop: false,
        speed: 600,
        slidesPerView: 3,
        slidesPerGroup: 1,  // перематываем тройками
        spaceBetween: 20,

        watchOverflow: true,  // отключает навигацию если слайдов не хватает
        rewind: false,        // отключает перемотку к началу с конца
        normalizeSlideIndex: false, // отключает подтягивание слайдов
        resistanceRatio: 0,

        watchSlidesProgress: true,

        breakpoints: {
            0:    { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 10 },
            768:  { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 15 },
            1024: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 20 },
        },

        navigation: {
            nextEl: '.next-2',
            prevEl: '.prev-2',
        },

        on: {
            slideChange: function () { updatePagination2(this); },
            breakpoint: function () { createPagination2(this); },
        }
    });

    function createPagination2(swiperInstance) {
        const $pagination = $('#pagination-2');
        const totalSlides = $(swiperInstance.el).find('.swiper-slide').length;

        const slidesPerGroup = swiperInstance.params.slidesPerGroup;
        const groupsCount = Math.ceil(totalSlides / slidesPerGroup);

        $pagination.empty();

        for (let i = 0; i < groupsCount; i++) {
            $('<div>')
                .addClass('pagination-bullet')
                .toggleClass('active', i === 0)
                .on('click', function () {
                    swiperInstance.slideTo(i * slidesPerGroup);
                })
                .appendTo($pagination);
        }
    }

    function updatePagination2(swiperInstance) {
        const slidesPerGroup = swiperInstance.params.slidesPerGroup;

        // Определяем номер тройки
        const activeGroup = Math.floor(swiperInstance.activeIndex / slidesPerGroup);

        $('#pagination-2 .pagination-bullet')
            .removeClass('active')
            .eq(activeGroup)
            .addClass('active');
    }
})