'use strict';

jQuery(document).ready(function(){

    var $slider = $('.js_slider'); 
    var $arrowLeft = $('.js_arrow_left'); 
    var $arrowRight = $('.js_arrow_right');
    var $teamSlider = $('.js_team_slider');
    var $teamArrowLeft = $('.js_team_arrow_left');
    var $teamArrowRight = $('.js_team_arrow_right');
    var $buttonToTop = $('.js_button_to_top');
    var $header = $('.header');
    var $headerContainer = $('.header__container');
    var $navLink = $('.js_nav_list a');
    var $link = $('a');
    var $homeBox = $('.house__box');
    var $homeDiscript = $('.house__discription');    
    var $phoneBox = $('.phone__box');
    var $phoneDiscript = $('.phone__discription');
    var $phone = $('.js_phone');
    
    $($link).on('click', function () {
        
        event.preventDefault()
    });

// Gallery Slider 
 
    $($slider).slick({
        dots: true,
        infinite: true,
        prevArrow: $($arrowLeft),
        nextArrow: $($arrowRight),
    });

// End Gallery Slider

// Responsive Slider

    $($teamSlider).slick ({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: $($teamArrowLeft),
        nextArrow: $($teamArrowRight),
        responsive: [
            {
            breakpoint: 860,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2
            }
            },
            {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
            }
        ]
    });

// End Responsive Slider

// Scroll to top

    $($buttonToTop).click(function(){
       
        $('html, body')
            .animate({scrollTop:$($header)
            .position().top}, 3000);
        
        $($navLink)
            .removeClass('active')
    });

// End Scroll to top

// Navigation
    $($navLink).on('click', function () {
        var $value = $(this).data('name');
        event.preventDefault()

        $($navLink)
            .removeClass('active')

        $(this)
            .addClass('active')
            .siblings()
            .removeClass('active');


        $('html, body')
            .animate({scrollTop:$($value)
            .position().top}, 3000);
            
    })
// End Navigation

// Contact button

    $($homeBox).on('click', function () {
        $($homeDiscript)
            .toggleClass('dontshow')
            .toggleClass('bounceInRight');
    });

    $($phoneBox).on('click', function () {
        event.preventDefault()
        $($phoneDiscript)
            .toggleClass('dontshow')    
            .toggleClass('bounceInRight');

        $($phone)
            .toggleClass('wibro');
    });

// END Contact button

// Fixed Header

    $(window).scroll(function(){
        
        if ( $(this).scrollTop() > 0 ) {
            $($headerContainer)
                .addClass('fixed')
                .addClass('zoomIn')
                .removeClass('container');
                
            $('.header__box')
                .css({'padding-top': '430px'});

        } else {

            $($headerContainer)
                .removeClass('fixed')   
                .removeClass('zoomIn')         
                .addClass('container');

            $('.header__box')
            .css({'padding-top': '285px'})
            
        }
    });

  
// End Fixed Header
});