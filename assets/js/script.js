
$(document).ready(function() {
    // Mega Menu Toggle
    $('.menu-trigger').on('click', function() {
        $(this).toggleClass('active');
        $('.mega-menu-overlay').toggleClass('active');
        $('body').toggleClass('menu-open');
    });

    // Close menu when clicking on a link inside it
    $('.mega-links a').on('click', function() {
        $('.menu-trigger').removeClass('active');
        $('.mega-menu-overlay').removeClass('active');
        $('body').removeClass('menu-open');
    });
});
