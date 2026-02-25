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