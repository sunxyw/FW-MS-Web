$(document).ready(function () {
    var load = 0;
    window.onload = function () {
        $(".loader b").fadeOut();
        setTimeout(function () {
            $(".loader b").text("加载完成 点我继续");
            $(".loader").css("cursor", "pointer");
        }, 500);
        $(".loader b").fadeIn("slow");
        load = 1;
    };

    $(".loader").click(function () {
        if (load = 1) {
            $(".loader").fadeOut("slow");
        }
    });

    $(".nav-link").mouseenter(function () {
        $(this).addClass("link-active");
    });

    $(".nav-link").mouseleave(function () {
        $(this).removeClass("link-active");
    });
});