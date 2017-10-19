$(document).ready(function () {
    $(".nav_menu a, .top").mPageScroll2id();
    $(".burger").on("click",function(){
    	$(".nav_menu").slideToggle();
//        $(".header_nav").toggleClass(" 1000, active");
    });
  
    $(".fa-search").on("click",function(){
    $('input[type=search]').toggleClass( "hide", 100, "easeOutSine");
    });
    

});