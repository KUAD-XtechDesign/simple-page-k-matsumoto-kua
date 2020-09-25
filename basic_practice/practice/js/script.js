
$(function(){
  
  $(".btn").on("click",()=>{
    $("#slide").slideToggle();
  })

  $("#slide").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    dots:true,
    slidesToShow: 1,
    adaptiveHeight: true
  });

});