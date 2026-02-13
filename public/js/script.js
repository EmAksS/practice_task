$(document).ready(function(){


    // Анимация "аккордеона"
    $('.accordeon__element').attr('open', true).each(function() {
        const $summary = $(this).find('summary'); 
        $summary.nextAll().wrapAll('<div class="con"></div>').parent().hide(); 

        $summary.on('click', function(e) {
            e.preventDefault(); 
            $(this).next('.con').slideToggle(); 

            $(this).parent().parent().siblings().children().find('.con').slideUp(); 

        });
    });
})