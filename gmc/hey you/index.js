  $(document).ready(function() {
      $(".firstimg").hover(function(){
         $(this).css('opacity','0.5');
         
         },function(){
        $(this).css('opacity','1');
      });
    

      $('.firstimg').hover(function(){
      ($(this).children('button')).css('visibility','visible');

      },function(){
        ($(this).children('button')).css('visibility','hidden');
      });

$('.firstimg').click (function() {
  $(this).alert('go my code');
  
  });

  $('button').click(function(){
    $('.alert').css('visibility','visible');
  });

  $(".vm").click(function() {
    $(".background_modal").css("display","flex");
  });

  $(".background_modal").click(function() {
    $(".background_modal").css("display","none");
  });



  $('.carousel').carousel({
    interval: 2000
  })


});

