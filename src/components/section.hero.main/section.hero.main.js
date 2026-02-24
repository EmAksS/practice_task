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