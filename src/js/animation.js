//=require section.hero.main/section.hero.main.js
//=require section.about-us/section.about-us.js
//=require section.servicesSmall/section.servicesS.js
//=require section.small-form/section.small-form.js

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

    const $partners = $('#partners')[0];
    const $clients = $('#clients')[0];

    observer.observe($partners);
    observer.observe($clients);

})