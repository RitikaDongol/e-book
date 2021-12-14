$(document).ready(function() {
    $(window).scroll(function(){
        if(this.scrollY > 500){
            $('.arrow').addClass("show");
        }else{
            $('.arrow').removeClass("show");
        }
    });

    $('.arrow').click(function(){
        $('html').animate({scrollTop:0})
    });
 
    $('#owl-demo').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        autoplayHoverPause:true,
        autoplay:true,
        autoplayTimeout:3000,
        
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });
    $('#owl-demo1').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        autoplayHoverPause:true,
        autoplay:true,
        autoplayTimeout:3000,
        
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });
});