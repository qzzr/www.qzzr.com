jQuery(function(){
var wwidth = jQuery(window).width();
var n = 4;
//var randomthis = Math.floor((Math.random()* $('.carousel li').length )+1);
if( wwidth > 480 && wwidth < 767 )  
{
  jQuery('.carousel').flexslider({
    animation: "slide",
  slideshow: false,
    animationLoop: false,
    itemWidth: 300,                   //{NEW} Integer: Box-model width of individual carousel items, including horizontal borders and padding.
    itemMargin: 0,                  //{NEW} Integer: Margin between carousel items.
    minItems: 2,                    //{NEW} Integer: Minimum number of carousel items that should be visible. Items will resize fluidly when below this.
    maxItems: 2,                    //{NEW} Integer: Maxmimum number of carousel items that should be visible. Items will resize fluidly when above this limit.
    move: 2,                        //{NEW} Integer: Number of carousel items that should move on animation. If 0, slider will move all visible items.
  controlNav: false,               //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
    directionNav: true,             //Boolean: Create navigation for previous/next navigation? (true/false)
  });
} else if( wwidth < 480)
{
  jQuery('.carousel').flexslider({
    animation: "slide",
  slideshow: false,
    animationLoop: false,
    itemWidth: 300,                   //{NEW} Integer: Box-model width of individual carousel items, including horizontal borders and padding.
    itemMargin: 0,                  //{NEW} Integer: Margin between carousel items.
    minItems: 1,                    //{NEW} Integer: Minimum number of carousel items that should be visible. Items will resize fluidly when below this.
    maxItems: 1,                    //{NEW} Integer: Maxmimum number of carousel items that should be visible. Items will resize fluidly when above this limit.
    move: 1,                        //{NEW} Integer: Number of carousel items that should move on animation. If 0, slider will move all visible items.
  controlNav: false,               //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
    directionNav: true,             //Boolean: Create navigation for previous/next navigation? (true/false)
  });
} else {
  jQuery('.carousel').flexslider({
    animation: "slide",
  animationLoop: false,
  slideshow: false,
    itemWidth: 300,                 //{NEW} Integer: Box-model width of individual carousel items, including horizontal borders and padding.
    itemMargin: 0,                  //{NEW} Integer: Margin between carousel items.
    minItems: 3,                    //{NEW} Integer: Minimum number of carousel items that should be visible. Items will resize fluidly when below this.
    maxItems: 3,                    //{NEW} Integer: Maxmimum number of carousel items that should be visible. Items will resize fluidly when above this limit.
    move: 3,                        //{NEW} Integer: Number of carousel items that should move on animation. If 0, slider will move all visible items.
  controlNav: false,               //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
    directionNav: true,
  
           //Boolean: Create navigation for previous/next navigation? (true/false)
  });
}
/*jQuery('#home_slider').flexslider({
 animation: "slide"
});*/
/* jQuery('.carousel').cycle({
    fx:'carousel',
    timeout:0,
    visible:4,
    autoplay:false,
    slides:'>.carouse',
    pauseOnHover:true,
    prev:'.left_arrow',
    next:'.right_arrow'
  });
jQuery('.carousel_mobile').cycle({
    fx:'carousel',
    timeout:0,
    visible:4,
    autoplay:false,
    slides:'>.saying_carousel_mobile',
    pauseOnHover:true,
    prev:'.left_arrow',
    next:'.right_arrow'
  }); 
*/  
  /*jQuery('.right_arrow').on( 'click', function() {
    jQuery(this).prev('.saying_carousel').cycle('goto', currSlide + 2);
});
jQuery('.left_arrow').on( 'click', function() {
    var minus = currSlide - 4;
    jQuery(this).next('.saying_carousel').cycle('goto', minus);
});*/
  /*jQuery('.mid').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3
});*/
/*jQuery('.mid').slick({
  centerMode: true,
  centerPadding: '30px',
  slidesToShow: 5,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});*/

/*if(wwidth>1583){
  jQuery('.mid .slide:nth-child(4)').addClass('center');
  
} else{
jQuery('.mid .slide:nth-child(3)').addClass('center');
}*/


jQuery('flex-direction-nav a.flex-disabled').css('display','none');

var str = jQuery('.top_menu li li.menu-item-object-custom, #dedicated-mobilemenu li.menu-item-object-custom').html();
 function eachWord(str){
   return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
 }
 jQuery('.top_menu li li.menu-item-object-custom, #dedicated-mobilemenu li.menu-item-object-custom').html(eachWord(str));
 



/*
 * Get rid of urls from Uses Menu Headers.
 */
jQuery('#menu-item-861 a').contents().unwrap('<a>');
jQuery('#menu-item-977 a').contents().unwrap('<a>');
jQuery('#menu-item-861').text('Qzzr for:');
jQuery('#menu-item-977').text('Qzzr to:');

  /*
   * Toggle monthly/annual link on click (Pricing page).
   */
  jQuery('.monthly-toggle').click(function(){
    var $this = jQuery(this);

    jQuery(document).find('.box-pricing-primary').toggleClass('monthly');

    if (jQuery('.box-pricing-primary').hasClass('monthly')){
      jQuery('.box-pricing-primary .button').attr('href', 'https://app.qzzr.com/account/signup_pro/59');
    } else {
      jQuery('.box-pricing-primary .button').attr('href', 'https://app.qzzr.com/account/signup_pro/58');
    }

    jQuery('.monthly-toggle').toggle();
  });
var nav = jQuery('.top_menu > li.menu-item-has-children');
nav.click(function (event) {
  event.stopPropagation();
    nav.not(this).find('ul.sub-menu').removeClass('is-active');
  jQuery(this).removeClass('is-active');
    jQuery(this).find('ul.sub-menu').toggleClass('is-active');
  jQuery(this).toggleClass('is-active');
});


/*jQuery('#menu-item-572 a').click(function(event){
event.stopPropagation();
jQuery(this).parent('#menu-item-572').toggleClass('is-active');
})
jQuery(document).click( function(){
jQuery('#menu-item-572').removeClass('is-active');
});

jQuery('#menu-item-432 a').click(function(event){
event.stopPropagation();
jQuery(this).parent('#menu-item-432').toggleClass('is-active');
})
jQuery(document).click( function(){
jQuery('#menu-item-432').removeClass('is-active');
});*/








  jQuery('.quiz_minutes:nth-child(2)').addClass('testimonial1');
  jQuery('.quiz_minutes:nth-child(3)').addClass('testimonial2');
  jQuery('.quiz_minutes:nth-child(4)').addClass('testimonial3');
  jQuery('.quiz_minutes:nth-child(5)').addClass('testimonial4');
  jQuery('.quiz_minutes:nth-child(6)').addClass('testimonial5');
  //finalHtml1 = curHtml1.replace(/Â&raquo/g, "");
  jQuery("#content .navigation ul li.pagination-next a").html("Next Page");
  jQuery("#content .navigation ul li.pagination-previous a").html("Previous Page");
  jQuery('.footer_top  >div:nth-child(2)').addClass('box1');
  jQuery('.footer_top > div:nth-child(3)').addClass('box2');
  jQuery('.footer_top > div:nth-child(4)').addClass('box3');
  
jQuery('#nav_menu-3').removeClass('box');
//jQuery('#nav_menu-3').removeClass('box1');
jQuery('#nav_menu-4').removeClass('box');
//jQuery('#nav_menu-4').removeClass('box2');
jQuery('.footer_top > div:nth-child(3)').addClass('box2');
jQuery('.fancybox-media')
                 .attr('rel', 'media-gallery')
                 .fancybox({
                     openEffect : 'none',
                     closeEffect : 'none',
                     prevEffect : 'none',
                     nextEffect : 'none',
width:993,
height:591,
                     arrows : false,
                     helpers : {
                         media : {},
                         buttons : {}
                     }
                 });
jQuery('.video')
                 .attr('rel', 'media-gallery')
                 .fancybox({
                      beforeShow: function () {
                        this.title = '<div class="text-center"><a href="/pricing/" class="get_start button button-large button-primary">Get started now</a></div>';
                      },                   
                     openEffect : 'none',
                     closeEffect : 'none',
                     prevEffect : 'none',
                     nextEffect : 'none',
autosize: false ,                  
width: '70%'  ,
height: '70%' ,
                     arrows : false,
                     helpers : {
                        title: {
                          type: 'inside'
                        },
                         media : {},
                         buttons : {}
                     }
                 });
jQuery('.mid').cycle({
    fx:'carouselCenter',
    log: true,
    // carouselSlideDimension: "287px",
//autoplay:true,

    //carouselVisible:5,
    timeout:0,
        autoplay:false,
        slides:'> .slide',
    pauseOnHover:true,  
    prev:'#prev',
    next:'#next'    
  });

//jQuery('.mid .cycle-slide-active').addClass('act');

/*jQuery( '.mid' ).on( 'cycle-after', function( event, opts ) {


     // your event handler code here


     var t=opts.currSlide ;


     var newindex=t+2;


     jQuery('.cycle-slide').removeClass('center');


         //$('.cycle-slide').removeClass('lastnew');


             //$('.cycle-slide').removeClass('lastnewlast');





     jQuery('.cycle-slide').eq(newindex+2).addClass('center');
   jQuery('.cycle-slide').eq(newindex+2).find('.item').html('Current');

});*/
//jQuery('.flex-direction-nav a.flex-disabled').css('display','none');
/*var first=jQuery('.flex-direction-nav li:first-child a.flex-prev');
if(jQuery('.flex-direction-nav li:first-child a.flex-prev').hasClass('flex-disabled')){
 jQuery('.flex-direction-nav li:first-child a.flex-prev').css('display','none');;
}else{
  jQuery('.flex-direction-nav li:first-child a').css('display','block');
  //alert('enable');
}*/

//var last_child=jQuery('.slides li:last-child');
/*if(last_child){


//if(jQuery('.flex-direction-nav a').hasClass('flex-disabled')){
jQuery('.flex-direction-nav a.flex-prev.flex-disabled').css('display','none');
//}else{
//jQuery('.flex-direction-nav a.flex-prev').css('display','block');
//jQuery('.flex-direction-nav a.flex-next.flex-disabled').css('display','none');
//}else{
//jQuery('.flex-direction-nav a.flex-next').css('display','block');
  
  
  //}
  







var intervalVar;

/* When hover, cycle corousel. */
jQuery('#prev').hover(function () {
    intervalVar = setInterval(function(){
        jQuery('.mid').cycle('prev');
    },500);
}, function () {
    clearInterval(intervalVar);
});

jQuery('#next').hover(function () {
    intervalVar = setInterval(function(){
        jQuery('.mid').cycle('next');
    },500);
}, function () {
    clearInterval(intervalVar);
});

/*
jQuery('#next').hover(function () {
    //mouse enter - Resume the slideshow
    jQuery('.mid').cycle('next');
});
*/


jQuery(".mid").touchwipe({
      wipeLeft: function() {
            jQuery(".mid").cycle("next");
      },
      wipeRight: function() {
            jQuery(".mid").cycle("prev");
      }
});



if(jQuery('body').hasClass('tax-uses')){
  jQuery('.banner').css('display','none');
}

jQuery('.tabs-logos').find('.page_logo:first-child').addClass('color');
jQuery('.page_logo').click(function(e) {
    e.preventDefault();
    jQuery('.detail').hide();
    jQuery('.page_logo').removeClass('color');
    jQuery(this.hash).show();
    jQuery(this).addClass('color');
});
});

/*jQuery(document).ready(function() {
  var owl = jQuery(".carousel");
  owl.owlCarousel({    
    items : 3,
    itemsDesktop : [1199,3],
    itemsDesktopSmall : [979,3]
  });
  jQuery(".right_arrow").click(function(){
  owl.trigger('owl.next');
  return false;
  })
   jQuery(".left_arrow").click(function(){
  owl.trigger('owl.prev');
  return false;
  }) 
  });*/
  /*jQuery(window).load(function() {
  jQuery('.flexslider').flexslider({
    animation: "slide",
    animationLoop: false,
    itemWidth: 210,
    itemMargin: 5
  });
});*/
  jQuery(window).load(function(e) {
    jQuery('.top_menu').after(function(){
        return jQuery('<div id="dedicated-mobile"><a class="trigger" href="#"><span></span></a></div>');
    });
    jQuery('.top_menu:first').clone().attr('id', 'dedicated-mobilemenu').removeAttr('class').hide().appendTo('#dedicated-mobile');
    jQuery('#dedicated-mobile a.trigger').addClass('close');
    jQuery('#dedicated-mobile a.trigger').click(function(e){
    e.preventDefault();
        jQuerythis = jQuery(this);
        if(jQuerythis.hasClass('close')){
            jQuerythis.removeClass('close').addClass('open');
 jQuerythis.parent().find('#dedicated-mobilemenu').slideDown();
        } else {
            jQuerythis.removeClass('open').addClass('close');
 jQuerythis.parent().find('#dedicated-mobilemenu').slideUp();
        }
    });
    // add arrow mobile menu
          jQuery('ul#dedicated-mobilemenu li.menu-item-has-children > a').after(function(){
return jQuery('<span class="mobile-menu-closed"></span>');
    });
       jQuery(".menu-item-has-children span").click(function(event){
jQuery(this).siblings("ul").slideToggle();
      if (jQuery(this).hasClass("mobile-menu-closed")) {
        jQuery(this).removeClass("mobile-menu-closed").addClass("mobile-menu-opened");
      } else {
        jQuery(this).removeClass("mobile-menu-opened").addClass("mobile-menu-closed");
      }
  event.preventDefault();
      });
});

jQuery(function() {
    var width = jQuery( window ).width();
    var numToShow = 3;

    if (width < 420) {
        numToShow = 1;
    } else if (width < 600) {
        numToShow = 2;
    }


    jQuery('#testimonial-carousel').cycle({
        fx:'carousel',
        log: true,
        toAdvance: numToShow,
        carouselVisible: numToShow,
        carouselFluid: true,
        timeout:0,
        autoplay:false,
        slides:'> .slide',
        pauseOnHover:true,
        prev:'#prev-link',
        next:'#next-link'
    });
});