$(document).ready(function(){
    $('.header').addClass('animated');
})
$(document).ready(function(){
    let heroAnimated = false;

    function checkHero() {
        const section = $('.hero--main');
        if (!section.length || heroAnimated) return;

        const windowBottom = $(window).scrollTop() + $(window).height();
        const sectionTop = section.offset().top;

        if (windowBottom > sectionTop + 100) {
            heroAnimated = true;

            $('.hero--main__basis').addClass('animated');

            setTimeout(function () {
                $('.hero--main__describe__el__text .line').addClass('animated');
            }, 1000);

            setTimeout(function () {
                $('.hero--main__describe__el .number').addClass('animated');
            }, 1400);

            setTimeout(function () {
                $('.hero--main__describe__el__text p').addClass('animated');
            }, 1400);
        }
    }

    $(window).on('scroll', checkHero);
    checkHero();
})
$(document).ready(function(){
    let aboutAnimated = false;

    function checkAbout() {
        const section = $('#about-us');
        if (!section.length || aboutAnimated) return;

        const windowBottom = $(window).scrollTop() + $(window).height();
        const sectionTop = section.offset().top;

        if (windowBottom > sectionTop + 100) {
            aboutAnimated = true;

            $('.about-us .title').addClass('animated');

            setTimeout(function () {
                $('.about-us__image').addClass('animated');
            }, 700);

            setTimeout(function () {
                $('.about-us__layer > div').addClass('animated');
            }, 900);
        }
    }

    $(window).on('scroll', checkAbout);
    checkAbout();
})
$(document).ready(function(){
    let servicesSAnimated = false;

    function checkServicesS() {
        const section = $('#servicesS');
        if (!section.length || servicesSAnimated) return;

        const windowBottom = $(window).scrollTop() + $(window).height();
        const sectionTop = section.offset().top;

        if (windowBottom > sectionTop + 100) {
            servicesSAnimated = true;

            $('.servicesS .title').addClass('animated');

            $('.servicesS .card-small').each(function (index) {
                const delay = 700 + index * 400;
                const $card = $(this);
                setTimeout(function () {
                    $card.addClass('animated');
                }, delay);
            });
        }
    }

    $(window).on('scroll', checkServicesS);
    checkServicesS();
})
$(document).ready(function(){
    let smallFormAnimated = false;

    function checkSmallForm() {
        const section = $('#small-form');
        if (!section.length || smallFormAnimated) return;

        const windowBottom = $(window).scrollTop() + $(window).height();
        const sectionTop = section.offset().top;

        if (windowBottom > sectionTop + 700) {
            smallFormAnimated = true;

            $('.small-form__layer__logo').addClass('animated');

            setTimeout(function () {
                $('.small-form__upper-container').addClass('animated');
            }, 700);

            setTimeout(function () {
                $('.small-form__down-container').addClass('animated');
            }, 1000);
        }
    }

    $(window).on('scroll', checkSmallForm);
    checkSmallForm();
})

// Логика модального окна

const $modal = $('#modal');

const open  = () => $modal.addClass('is-open');
const close = () => $modal.removeClass('is-open');

$('#openModal').on('click', open);
$('#closeModal').on('click', close);
$('#modalOverlay').on('click', close);

$(document).on('keydown', e => {
  if (e.key === 'Escape') close();
});

// Логика превью видео

$('.video__preview').on('click', function () {
    $(this).addClass('is-hidden');
    
    const $iframe = $(this).siblings('iframe');
    const src = $iframe.attr('src');
    $iframe.attr('src', src + '&autoplay=1');
});

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


    const $header = $("#header");
    const $spacer = $(".spacer--under")[0]; // чистый DOM для IntersectionObserver

    // 1️⃣ IntersectionObserver для полного пролистывания spacer
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (!entry.isIntersecting) {
                // блок полностью вышел из viewport
                $header.addClass("scrolled");
            } else {
                $header.removeClass("scrolled");
            }
            });
        }, {
            threshold: 0.2 // сработает, когда весь блок вышел из view
        });
    
    observer.observe($spacer);
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

    const projectsSwiper = new Swiper('#projects-swiper', {
        loop: true,
        speed: 600,
        slidesPerView: 1,
        spaceBetween: 0,

        navigation: {
            nextEl: '#next-project',
            prevEl: '#prev-project',
        },

        on: {
            init: function () { createPagination(this, 'project-pagination'); },
            slideChange: function () { updatePagination(this, 'project-pagination'); },
        }
    });

    const videoSwiper = new Swiper('#video-swiper', {
        loop: true,
        speed: 600,
        slidesPerView: 'auto',
        spaceBetween: 25,

        navigation: {
            nextEl: '#next-video',
            prevEl: '#prev-video',
        },

        on: {
            init: function () { createPagination(this, 'video-pagination'); },
            slideChange: function () { updatePagination(this, 'video-pagination'); },
        }
    });

    function createPagination(swiperInstance, id) {
        const $pagination = $(`#${id}`);
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

    function updatePagination(swiperInstance, id) {
        $(`#${id} .pagination-bullet`)
            .removeClass('active')
            .eq(swiperInstance.realIndex)
            .addClass('active');
    }
})