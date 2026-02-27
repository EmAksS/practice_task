$(document).ready(function() {

    const isWhiteHero = $(".hero--white")[0];
    const $headerLogo = $(".header__logo")

    if (isWhiteHero){
        $headerLogo.addClass("header__logo--white");
    }

    const userAgent = navigator.userAgent.toLowerCase();
    const isChromium = userAgent.includes('chrome') || userAgent.includes('edg') || userAgent.includes('opr') || userAgent.includes('opera');
    
    if (!isChromium) {
        document.documentElement.classList.add('no-liquid-glass-support');
        const elements = document.querySelectorAll('.header--glass');
        elements.forEach(el => {
            el.classList.add('liquid-glass-fallback');
        });
    }
    else{
        const elements = document.querySelectorAll('.header--glass');
        elements.forEach(el => {
            el.classList.add('liquid-glass-apply');
        });
    }

    const currentPage = "./" + window.location.pathname.split("/").pop();

    $(".header__nav__element a").each(function () {
        console.log($(this).attr("href"));
        if ($(this).attr("href") === (currentPage)) {
            $(this).parent().addClass("header__nav__element--active");
        }
    });
});