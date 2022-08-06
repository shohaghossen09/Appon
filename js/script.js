$(function(){

    //banner_slider
    $('#banner').slick({
        autoplay: true,
        autoplayspeed: 1500,
        speed: 1000, 
        arrows: false,
    });

    //screenshot_slider
    $('.ss_pic').slick({
        autoplay: true,
        autoplayspeed: 2000,
        speed: 1000,
        arrows: false,
        centerMode: true,
        centerPadding: '100px',
        slidesToShow: 3,
    });

    //nav_scroll

    var headeroffset = $('#header').offset().top;
    $(window).on('scroll', function(){
        var winscroll = $(window).scrollTop();

        if(winscroll > headeroffset){
            $('#header').addclass('header_scroll');
        }
        else{
            $('#header').removeclass('header_scroll');
        }
    });

    //back to top button

    if(winscroll > 200){
        $('.backtop').fadeIn(1000);
    }
    else{
        $('.backtop').fadeOut(1000);
    }
});