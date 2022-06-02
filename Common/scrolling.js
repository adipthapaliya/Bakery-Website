jQuery(document).ready(function(){
  
    var navOffSet =jQuery("nav").offset().top;
    

    jQuery(window).scroll(function(){
        var scrollPos =jQuery(window).scrollTop();

        if(scrollPos>60){
            jQuery("nav").addClass("scrolling-active");
        } else{
            jQuery("nav").removeClass("scrolling-active");
        }  
    }); 
});