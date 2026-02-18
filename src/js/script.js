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