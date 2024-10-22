
document.addEventListener('DOMContentLoaded', () => {
    $('.sources__toggler').addClass('is-closed').addClass('is-processed');
    $('.sources__content').hide();

    $('.sources__toggler').on('click', function () {
        $(this).toggleClass('is-closed');
        $(this).next('.sources__content').slideToggle(200);
    });

    ScrollOut({
        threshold: 0.3,
        once: true
    });

    $(document).on('scroll', function () {
        $('.header__up').toggleClass('is-shown', document.documentElement.scrollTop > 200);
    });

    $('.open-pop').on('click', function() {
        var popupId = $(this).data('popup-link');
        var $popup = $('body').find(`[data-popup='${popupId}']`)
        $popup.addClass('active');
        $('body').css("overflow", "hidden");
    });
    
    $('.close-pop').on('click', function() {
        var $popup = $(this).closest('.popup-overlay');
        $popup.removeClass('active');
        $('body').css("overflow", "auto");
    });

    $('.toggle-acc').on('click', function () {
        var accId = $(this).data('acc-link');
        var $acc = $('body').find(`[data-acc='${accId}']`);
        $(this).toggleClass('active');
        $acc.slideToggle();
    });
})
