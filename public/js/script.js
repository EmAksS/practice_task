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
})