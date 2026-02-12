
$(document).ready(function() {
    // Mega Menu Toggle (Hamburger)
    $('.menu-trigger').on('click', function() {
        if ($(window).width() <= 1200) {
            $(this).toggleClass('active');
            $('.mobile-menu').toggleClass('active');
            $('body').toggleClass('menu-open');
        } else {
            $(this).toggleClass('active');
            $('.main-mega-menu').toggleClass('active');
            
            // Close inventory menu if open
            $('.inventory-menu').removeClass('active');
            
            // Toggle body class logic
            if ($('.main-mega-menu').hasClass('active')) {
                $('body').addClass('menu-open');
            } else {
                $('body').removeClass('menu-open');
            }
        }
    });

    // Mobile Accordion Toggle Icon Logic
    $('.mobile-accordion-header').on('click', function() {
        $(this).find('.fa-chevron-down').toggleClass('fa-rotate-180');
    });

    // Close menu when clicking on a link inside any mega menu
    $('.mega-links a').on('click', function() {
        $('.menu-trigger').removeClass('active');
        $('.mega-menu-overlay').removeClass('active');
        $('body').removeClass('menu-open');
    });

    // Inventory Click Logic
    $('.inventory-trigger').on('click', function(e) {
        e.preventDefault();
        $('.inventory-menu').toggleClass('active');
        
        // Close main menu if open
        $('.main-mega-menu').removeClass('active');
        $('.menu-trigger').removeClass('active');

        // Toggle body class logic
        if ($('.inventory-menu').hasClass('active')) {
            $('body').addClass('menu-open');
        } else {
            $('body').removeClass('menu-open');
        }
    });

    // Service Click Logic
    $('.service-trigger').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation(); // Prevent closing immediately
        $('.service-menu').toggleClass('active');
        
        // Close other menus
        $('.inventory-menu').removeClass('active');
        $('.main-mega-menu').removeClass('active');
        $('.menu-trigger').removeClass('active');
    });

    // Close service menu when clicking anywhere else
    $(document).on('click', function(e) {
        if (!$(e.target).closest('.service-trigger, .service-menu').length) {
            $('.service-menu').removeClass('active');
        }
    });

    // Close inventory menu when clicking outside
    $(document).on('click', function(e) {
        if (!$(e.target).closest('.inventory-trigger, .inventory-menu').length) {
            $('.inventory-menu').removeClass('active');
             // Only remove menu-open if main menu is also closed
            if (!$('.main-mega-menu').hasClass('active')) {
                $('body').removeClass('menu-open');
            }
        }
    });
    // Close inventory menu button
    $('.inventory-close').on('click', function() {
        $('.inventory-menu').removeClass('active');
        if (!$('.main-mega-menu').hasClass('active')) {
            $('body').removeClass('menu-open');
        }
    });
    // Facebook Gallery Carousel
    $('.facebook-gallery-carousel').owlCarousel({
        loop: true,
        margin: 4,
        nav: false,
        dots: false,
        autoplay: false,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 2
            },
            768: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });

});
