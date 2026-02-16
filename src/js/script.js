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

    // Находим ВСЕ поля с классом phone-input
    $('.phone-input').each(function() {
        const $input = $(this);
        const $textField = $input.closest('.text-field');
        
        // Применяем маску к каждому полю
        $input.inputmask('+7 (999) 999 - 99 - 99', {
            'placeholder': ' ',
            'clearMaskOnLostFocus': true,
            'clearIncomplete': false,  // Ставим false, чтобы неполный номер не исчезал
            'showMaskOnHover': false,
            'showMaskOnFocus': true,
            'removeMaskOnSubmit': true
        });
        
        // Валидация для каждого поля
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
})