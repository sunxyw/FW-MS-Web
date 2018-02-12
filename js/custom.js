$(document).ready(function () {
    window.onload = function () {
        $('.loader').fadeOut('slow');
    };

    $('.nav-link').mouseenter(function () {
        $(this).addClass('link-active');
    })

    $('.nav-link').mouseleave(function () {
        $(this).removeClass('link-active');
    })
});