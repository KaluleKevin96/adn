$(window).scroll(function() {
  if ($(this).scrollTop() > 120){  
  $('.hdr_variation2').removeClass('slideIn animated');
    $('.hdr_variation2').addClass("sticky_header slideInDown animated");
  }
  else{
  $('.hdr_variation2 ').removeClass('sticky_header slideInDown animated');
     $('.hdr_variation2 ').addClass('slideIn animated');
  }
});
$(document).ready(function(){

$(".hdr_search .btn").click(function(){
  $(".search_overlay").addClass("show")  
  })

  $(".close_search").click(function(){
  $(".search_overlay").removeClass("show")  
  }) 
})
