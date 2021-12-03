$(document).ready(function () {
    $('.owl-program').owlCarousel({
        rtl: true ,
        loop:true,
        margin: 20,
        nav:true,
        dots: true,
        autoplay: false,
        touchDrag  :false,
		mouseDrag  : false,
		autoWidth: false,
		animateOut: 'fadeOut',
        autoplayTimeout: 3000,
		smartSpeed: 3000,
		dragEndSpeed: 3000,
		slidSpeed: 3000,
        paginationSpeed: 3000,
        autoplayHoverPause: true,
        navContainerClass: "container secondary owl-nav",
		navText: [
            '<i class="fas fa-chevron-right"></i>',
            '<i class="fas fa-chevron-left"></i>'
        ],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:3
            }
        }
    });

    $('.owl-gallery').owlCarousel({
        rtl: true ,
        loop:true,
        margin: 20,
        nav:true,
        dots: true,
        autoplay: false,
        touchDrag  :false,
		mouseDrag  : false,
		autoWidth: false,
		animateOut: 'fadeOut',
        autoplayTimeout: 3000,
		smartSpeed: 3000,
		dragEndSpeed: 3000,
		slidSpeed: 3000,
        paginationSpeed: 3000,
        autoplayHoverPause: true,
        navContainerClass: "container white owl-nav",
		navText: [
            '<i class="fas fa-chevron-right"></i>',
            '<i class="fas fa-chevron-left"></i>'
        ],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:3
            }
        }
    });

    $('.fancybox').fancybox({
        arrows: false,
        loop: false,
        keyboard: false,
        infobar: false,
        protect: true,
        hideScrollbar: true,
        touch: false ,
        image: {
            preload: true
        },
        youtube : {
            controls : 0,
            showinfo : 0
        },
        vimeo : {
            color : 'f00'
        }
    });
});