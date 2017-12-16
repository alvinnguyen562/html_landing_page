(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();
        $(".header-area").sticky({topSpacing:0});

        // jQuery smooth scroll
        $('li.smooth-menu a').bind('click', function(event) {
            var $anchor = $(this);
            var headerH = '60';
            if (!$anchor.length) {
                return;
            }
            var offset = $($anchor.attr('href')).offset().top - headerH + "px";
            $('html, body').stop().animate({
                scrollTop: offset
            }, 1200, "easeInOutExpo");
            event.preventDefault();
        });

        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 95
        })

        $('.parallax-bg, .top-area-bg').scrolly({bgParallax: true});

        $('.navbar-toggle').click(function() {
            $('body').addClass('mobile-menu-actived');
        });

        $('ul.nav.navbar-nav li a').click(function() {
            console.log('msg')
            $('.navbar-collapse').removeClass('in');
        });

    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	