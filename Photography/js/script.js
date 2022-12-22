const navbar = document.getElementById("promo__header");
let scrolled = false;
window.onscroll = function () {
    if (window.pageYOffset > 100) {
        navbar.classList.remove("promo__header_top");
        navbar.style.boxShadow = "1px 1px 7px grey";
        if (!scrolled) {
            navbar.style.transform = "translateY(-70px)";
        }
        setTimeout(function () {
            navbar.style.transform = "translateY(0)";
            navbar.style.transition = "transform 0.3s";
            scrolled = true;
        }, 200);
    } else {
        navbar.classList.add("promo__header_top");
        navbar.style.boxShadow = "none";
        scrolled = false;
    }
};

$(function () {
    $("a[href^='#']").click(function () {
        const _href = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
        return false;
    });
});





