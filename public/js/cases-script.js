$(document).ready(function() {

    let itemsToShow = 4;
    let visibleItems = 0;
    let filteredItems = $('.cases__list > li');

    function updateList() {
        $('.cases__list > li').hide();
        visibleItems = 0;
        showNextItems();
    }

    function showNextItems() {
        filteredItems.slice(visibleItems, visibleItems + itemsToShow).fadeIn();
        visibleItems += itemsToShow;

        if (visibleItems >= filteredItems.length) {
            $('#show-more').hide();
        } else {
            $('#show-more').show();
        }
    }

    // При смене radio
    $('input[name="cases"]').on('change', function() {
        let selected = $(this).val();

        if (selected === "all") {
            filteredItems = $('.cases__list > li');
        } else {
            filteredItems = $('.cases__list > li[data-category="' + selected + '"]');
        }

        updateList();
    });

    // Кнопка "Посмотреть еще"
    $('#show-more').on('click', function() {
        showNextItems();
    });

    // Инициализация при загрузке
    updateList();

});