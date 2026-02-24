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