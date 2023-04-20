
$(document).ready(function () {

    var carouselList = $('.row-4-carousel .carousel-wrapper');
    carouselList.css({ "marginLeft": "-=400px" });
    function changeSlide() {
        if ((carouselList).is(':animated')) {
            return false;
        }
        else {
            carouselList.animate({ "marginLeft": "-=400px" }, 500, moveFirstSlide);
        }
    };
    function moveFirstSlide() {
        var firstItem = carouselList.find(".col-carousel:first");
        var lastItem = carouselList.find(".col-carousel:last");
        lastItem.after(firstItem);
        carouselList.css({ "marginLeft": "+=400px" });
        var active = $('.carousel-controls .active');
        var next = active.next();
        if (next.length == 0) {
            next = $('.carousel-controls div').first();
        }
        next.addClass('active');
        active.removeClass('active');
    }
    setInterval(changeSlide, 3000);
    var slideLeft = $('.carousel-button-slide-left');
    slideLeft.on('click', function () {
        if ((carouselList).is(':animated')) {
            return false;
        }
        else {
            carouselList.animate({ "left": "+=400px" }, 300, moveFirstSlideLeftButton());
            var active = $('.carousel-controls .active');
            var prev = active.prev();
            if (prev.length == 0) {
                prev = $('.carousel-controls div').last();
            }
            prev.addClass('active');
            active.removeClass('active');
        }
    });


    $('#toggle').on('click', function () {


        $('.nav-menu').fadeToggle(500);

    });



});



$(function () {
    var carouselList = $('.row-testi');
    carouselList.css({ "marginLeft": "-=400px" });
    function changeSlide() {
        if ((carouselList).is(':animated')) {
            return false;
        }
        else {
            carouselList.animate({ "marginLeft": "-=400px" }, 500, moveFirstSlide);
        }
    };
    function moveFirstSlide() {
        var firstItem = carouselList.find(".col-testi:first");
        var lastItem = carouselList.find(".col-testi:last");
        lastItem.after(firstItem);
        carouselList.css({ "marginLeft": "+=400px" });
        var active = $('.carousel-controlss .actives');
        var next = active.next();
        if (next.length == 0) {
            next = $('.carousel-controlss div').first();
        }
        next.addClass('actives');
        active.removeClass('actives');
    }
    setInterval(changeSlide, 3000);
    var slideLeft = $('.carousel-button-slide-left');
    slideLeft.on('click', function () {
        if ((carouselList).is(':animated')) {
            return false;
        }
        else {
            carouselList.animate({ "left": "+=400px" }, 300, moveFirstSlideLeftButton());
            var active = $('.carousel-controlss .actives');
            var prev = active.prev();
            if (prev.length == 0) {
                prev = $('.carousel-controlss div').last();
            }
            prev.addClass('actives');
            active.removeClass('actives');
        }
    });


});





