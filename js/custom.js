$(document).ready(function () {

    // Start Index Page

    // Mobile Nav-bar

    $('.mobile-btn').click(function () {
        $('header .top-bar nav ul').toggleClass('show-nav');
        $('.mobile-btn').toggleClass('close-sign');
    });

    // Hide Nav-bar and "X" Sign When The Website Width More Than 991    

    $(window).resize(function () {
        if (window.innerWidth > 991) {
            $('.mobile-btn').removeClass('close-sign');
            $('header .top-bar nav ul').removeClass('show-nav');
        }
    })

    // Show and Hide Color Setting

    $('.color-setting-icon').click(function () {
        $('.color-setting').toggleClass('show-color-setting')
    })

    $('.color-setting-text svg').click(function () {
        $('.color-setting').removeClass('show-color-setting')
    })

    // Change the Website Colors

    $('.color-setting-color').click(function () {
        var mainColor = $(this).css('background-color')
        $(':root').css("--main-color", mainColor);
        $(this).addClass('active');
        $(this).siblings().removeClass('active')
    })

    // Save the Color

    $('.color-setting-color').click(function () {
        var mainColor = $(this).css('background-color')
        localStorage.setItem('color-option', mainColor);
    })

    // Use the Saved Color

    var color = localStorage.getItem('color-option');
    if (color != null) {
        $(':root').css("--main-color", color);
    }

    // Add Active on the Used Color

    $('.color-setting-color').each(function () {
        var colors = $(this).css('background-color')
        if (color == colors) {
            $(this).addClass('active')
            $(this).siblings().removeClass('active')
        }
    });

    // Finish Index Page

    // Start About Page

    // Circled Progress

    $(function () {
        $('.circlechart').circlechart();
    });

    // Finish About Page

    // Start Portfolio Page

    $('.portfolio-box').hover(function () {
        $(this).find('.portfolio-box-text a').fadeIn().hoverdir();
    }, function () {
        $(this).find('.portfolio-box-text a').hide();
    });

    // Finish Portfolio Page

    // Start Contact Page

    $('button').click(function () {
        $('.contact-right-box-message').fadeIn().delay(2000).fadeOut();
    })

    // Finish Contact Page

    // Preloader
        $("#loading").delay(300).fadeOut();
})