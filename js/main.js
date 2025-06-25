(function($) {
    "use strict";

    // Back To Top - Start
    // --------------------------------------------------
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('.backtotop:hidden').stop(true, true).fadeIn();
        } else {
            $('.backtotop').stop(true, true).fadeOut();
        }
    });
    $(function() {
        $(".scroll").on('click', function() {
            $("html,body").animate({
                scrollTop: 0
            }, "slow");
            return false
        });
    });
    // Back To Top - End
    // --------------------------------------------------

    // sticky header - Start
    // --------------------------------------------------
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 60) {
            $('header').addClass("sticky");
        } else {
            $('header').removeClass("sticky");
        }
    });
    // sticky header - End
    // --------------------------------------------------

    // Preloader - Start
    // --------------------------------------------------
    // $(window).on('load', function(){
    //   $('#preloader').fadeOut('slow',function(){$(this).remove();});
    // });
    // Preloader - End
    // --------------------------------------------------

    // Tooltip - Start
    // --------------------------------------------------
    /*var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    });*/
    // Tooltip - End
    // --------------------------------------------------

    // OffCanvas - Start
    // --------------------------------------------------
    // $(document).ready(function () {
    //   $('.cart_close_btn, .cart_sidebar_overlay').on('click', function () {
    //     $('.cart_sidebar').removeClass('active');
    //     $('.cart_sidebar_overlay').removeClass('active');
    //   });

    //   $('.cart_btn').on('click', function () {
    //     $('.cart_sidebar').addClass('active');
    //     $('.cart_sidebar_overlay').addClass('active');
    //   });
    // });
    // OffCanvas - End
    // --------------------------------------------------

    // wow js - Start
    // --------------------------------------------------
    var wow = new WOW({
        animateClass: 'animated',
        offset: 100,
        mobile: true,
        duration: 1000,
    });
    wow.init();
    // wow js - End
    // --------------------------------------------------

    // Mouse Move Parallax - Start
    // --------------------------------------------------
    $('.mouse_move').parallax({
        scalarX: 10.0,
        scalarY: 10.0,
    });
    // Mouse Move Parallax - End
    // --------------------------------------------------

    // Tilt - Start
    // --------------------------------------------------
    $('.tilt').tilt({
        maxTilt: 20,
        perspective: 1000,
        scale: 1.02,
        speed: 1000,
        glare: false,
        maxGlare: 1
    });
    // Tilt - End
    // --------------------------------------------------

    // Dropdown - Start
    // --------------------------------------------------
    $('.dropdown').hover(function() {
        $(this).find('.dropdown-menu').addClass('show');
    }, function() {
        $(this).find('.dropdown-menu').removeClass('show');
    });
    // Dropdown - End
    // --------------------------------------------------

    // Counter Up - Start
    // --------------------------------------------------
    $('.value_text').counterUp({
        delay: 10,
        time: 1000
    });
    // Counter Up - End
    // --------------------------------------------------

    // Sponsors Carousel - Start
    // --------------------------------------------------
    $('.sponsors_logo_wrap').slick({
        speed: 2000,
        autoplaySpeed: 0,
        dots: false,
        arrows: false,
        autoplay: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        cssEase: 'linear',
        pauseOnHover: true,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    // Sponsors Carousel - End
    // --------------------------------------------------

    // Testimonial Carousel - Start
    // --------------------------------------------------
    $('.testimonial_carousel').slick({
        dots: true,
        speed: 900,
        arrows: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
        pauseOnHover: true,
        autoplaySpeed: 900,
        prevArrow: ".tc_arrow_left",
        nextArrow: ".tc_arrow_right"
    });
    // Testimonial Carousel - End
    // --------------------------------------------------

    // Videos & Images popup - Start
    // --------------------------------------------------
    $('.popup_video').magnificPopup({
        type: 'iframe',
        preloader: false,
        removalDelay: 160,
        mainClass: 'mfp-fade',
        fixedContentPos: false
    });

    $('.zoom-gallery').magnificPopup({
        delegate: '.popup_image',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300,
            opener: function(element) {
                return element.find('img');
            }
        }
    });
    // Videos & Images popup - End
    // --------------------------------------------------

})(jQuery);