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