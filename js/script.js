$(function(){
    // header scroll
    var $header = $('header');
    var $nav = $('nav');

    var $window = $(window);
    var pageOffsetTop = 200;
    
    $window.on('scroll', function(){ //스크롤시
        var scrolled = $window.scrollTop() >= pageOffsetTop;
        $header.toggleClass('down', scrolled);
        $nav.toggleClass('nav_down', scrolled);
    });


    //roll banner
    var widthSize =1510;
    var $rollBanner = $('.roll_banner');

    var $scrollBar = $('.scroll_bar');
    var $scrollBarIn = $('.scroll_bar_in');
    var scrollBarMax = 160;

    $rollBanner.mousewheel(function(event, delta) {
        this.scrollLeft -= (delta * 30);
        event.preventDefault();
    });
});