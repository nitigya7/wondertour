// Hamburger

$(".hamburger").click(function(){
    $(this).toggleClass("icon");
    $(".nav-ul").toggleClass("change-ul");
});

$(".home-nav").click(function(){
    $(".nav-ul").toggleClass("change-ul");
    $(".hamburger").toggleClass("icon");
});
    
// Carousel

$(".g-carousel").owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    autoplay: true,
    autoplaySpeed: 800,
    dots: true,
    responsive:{
        0:{
            items: 2,
            margin: 20
        },
        521:{
            items: 3
        },
        1001: {
            items: 4
        }
    }
});