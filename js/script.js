$('.banner-carousel').owlCarousel({
    loop:true,
    margin:0,
    dots:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
          
        }
        
    }
})
$('.training-carousel').owlCarousel({
    loop:true,
    margin:20,

    responsiveClass:true,

    responsive:{
        0:{
          
            items:1,
            
        },
        768:{
            items:2,
        },
        998:{
            items:3,

        },
        1200:{
          
            items:4,
            
        }
        
    }
})
$('.blog-carousel').owlCarousel({
    loop:true,
    margin:20,
    responsiveClass:true,
    
    responsive:{
        0:{
            items:1,
            dots:true,
        },
        768:{
            items:2,
        },
        1200:{
            items:3,
        }
    }
})

  AOS.init();
$(window).on("scroll",()=>{
   if($(this).scrollTop()>=120){
    $(".header-bottom").addClass("header-fixed")
    $(".header-fixed").addClass("show")
    $(".scroll-btn").addClass("show")
    $(".scroll-btn").on("click",()=>{
        $(window).scrollTop(0)
    })

   }else{
    $(".header-bottom").removeClass("header-fixed")
    $(".header-fixed").removeClass("show")
    $(".scroll-btn").removeClass("show")
   }
})
$(".nav-menu-btn").on('click',()=>{
    $(".header-mobile-menu").toggleClass("show");
    
$(".nav-menu-btn i").toggleClass("fa-times");

})
$(document).ready(function() {
    $(".gallery a").fancybox();
  });
  $(document).ready(function() {
$(".gallery a").attr("data-fancybox","mygallery");
$(".gallery a").each(function(){
$(this).attr("data-caption", $(this).find("img").attr("alt"));
$(this).attr("title", $(this).find("img").attr("alt"));
});

$(".gallery a").fancybox();
});
