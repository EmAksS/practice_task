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

$(document).ready(function () {

    /// observer для просмотра видим ли объект или нет для добавления класса animate
    /// (Возможны расширения)

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {

        if (entry.isIntersecting) {
            $(entry.target).addClass('animated')
            observer.unobserve(entry.target)
        }

        })
    }, {
        threshold: 0.6
    })

    const $partners = $('#partners')[0];
    const $clients = $('#clients')[0];

    observer.observe($partners);
    observer.observe($clients);

})