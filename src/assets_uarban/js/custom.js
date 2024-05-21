// $(document).ready(function(){
// 	$(".carouselTicker").carouselTicker();

// });


$(document).ready(function() {
    $('#slider').nivoSlider();
    $('#Play').hide();
    $("#Pause").click(function() {
        $('#Pause').fadeOut(200);
        $('#Play').fadeIn(200);
        $('#slider').data('nivoslider').stop();
    });
    $("#Play").click(function() {
        $('#Play').fadeOut(200);
        $('#Pause').fadeIn(200);
        $('#slider').data('nivoslider').start();
    });
});

$('.logo-slider').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [{
            breakpoint: 1600,
            settings: {
                slidesToShow: 6
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2
            }
        }
    ]
});

$('.minister-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2500

});


$(document).ready(function() {
    $(".ticker1").modernTicker({
        effect: "scroll",
        scrollType: "continuous",
        scrollStart: "inside",
        scrollInterval: 20,
        transitionTime: 500,
        autoplay: true
    });
    $('.dropdown-submenu .dropdown-toggle').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        if ($(window).width() <= 991) {
            $(this).siblings('.dropdown-menu').slideToggle(300);
        }
    });
    if ($(window).width() <= 991) {
        $(".dropdown-submenu .dropdown-menu").hide();
    }
    $(function() {
        $('#gotop').click(function(e) {
            e.preventDefault();
            $("html, body").animate({ scrollTop: 0 }, 800);
            return false;
        });

    });

    $("#topnav a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800);
        } // End if
    });

    (function($) {
        function changeFont(fontSize) {
            return function() {
                $('.fontresize').css('font-size', fontSize + '%');
                sessionStorage.setItem('fSize', fontSize);
            }
        }
        var normalFont = changeFont(85),
            mediumFont = changeFont(100),
            largeFont = changeFont(115);

        $('.js-font-decrease').on('click', function(e) {

            e.preventDefault();
            normalFont();
        });
        $('.js-font-normal').on('click', function(e) {
            e.preventDefault();
            mediumFont();
        });
        $('.js-font-increase').on('click', function(e) {
            e.preventDefault();
            largeFont();
        });
        if (sessionStorage.length !== 0) {
            $('fontresize').css('font-size', sessionStorage.getItem('fSize') + '%');
        }
    })(jQuery);

});

$(window).resize(function() {
    if ($(window).width() <= 768) {
        $('.dropdown-submenu .dropdown-menu').hide();
    }
    if ($(window).width() > 768) {
        $('.dropdown-submenu .dropdown-menu').show();
    }
});

$(function() {
    $('[data-toggle="tooltip"]').tooltip();

});
$(".listing").mCustomScrollbar({
    theme: "minimal-dark"
});