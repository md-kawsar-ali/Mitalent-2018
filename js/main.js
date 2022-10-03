(function ($) {
    'use strict';
    //Navbar
	$('.toggle-btn').click(function () {
       $('.main-nav').fadeToggle(300);
    });
    
    //search-ui
    $('.search-btn').click(function () {
       $('.search-form').fadeIn(300, function () { $('.search-form').show(); });
    });
    
    $('.cross-btn').click(function () {
       $('.search-form').fadeOut(300, function () {
          $('.search-form').hide();
       });
    });
	
    //header-slider
    $(function () {
        var owl = $('.header-slider.owl-carousel');
        owl.owlCarousel({
            animateOut: 'fadeOut',
            touchDrag: false,
            mouseDrag: false,
            onInitialized : counter, //When the plugin has initialized.
            onTranslated : counter, //When the translation of the stage has finished.
            items: 1
        });

        function counter(event) {
            var element   = event.target;         // DOM element, in this example .owl-carousel
            var items     = event.item.count;     // Number of items
            var item      = event.item.index + 1;     // Position of the current item
            $('#counter').html("0" + item);
        }
        
        var i = 1;
        $('.header-slider .owl-dot').each(function () {
            $(this).text(i);
            i++;
        });
    });
    
    //MixitUp
    var containerEl = document.querySelector('.client-mixitup');
	var mixer = mixitup(containerEl);
    
    //Slider-video-post
    $('.slider-post').owlCarousel({
        nav: false,
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        smartSpeed: 2000
    });
    
    //Normal-post-slider
    $('.slider-img').owlCarousel({
        nav: false,
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        smartSpeed: 2000
    });
    
})(jQuery);