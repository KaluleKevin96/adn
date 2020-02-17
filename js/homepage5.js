$(window).scroll(function() {
    if ($(this).scrollTop() > 120){  
    $('.var5_header ').removeClass('slideIn animated');
      $('.var5_header').addClass("sticky_header slideInDown animated");
    }
    else{
    $('.var5_header ').removeClass('sticky_header slideInDown animated');
       $('.var5_header ').addClass('slideIn animated');
    }
});
 $(document).ready(function(){
    $(".mob_drop_arrow").click(function(){

      $(this).parent().find(".submenu").toggleClass("show_sub_menu")
	  $(this).parent().find(".nav_drop_ar").toggleClass("show")
	  $(this).parent().find(".mob_drop_arrow").toggleClass("active")
	  
	  

    })
$(".hdr_search .btn").click(function(){
		$(".search_overlay").addClass("show")  
	  })
	  
	 $(".close_search").click(function(){
		$(".search_overlay").removeClass("show")  
	  }) 
  })