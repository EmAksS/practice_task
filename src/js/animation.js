
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

    const $heroMain = $('.hero--main')[0];
    const $aboutUs = $('#about-us')[0];
    const $servicesSmall = $('#servicesS')[0];
    const $smallForm = $('#small-form')[0];
    const $partners = $('#partners')[0];
    const $clients = $('#clients')[0];

    observer.observe($heroMain);
    observer.observe($aboutUs);
    observer.observe($servicesSmall);
    observer.observe($smallForm);
    observer.observe($partners);
    observer.observe($clients);

})