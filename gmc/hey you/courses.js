
var textarea=document.getElementById("text");
var selectsize=document.getElementById("sizeoption");
var selectstyle=document.getElementById("styleoption");

// function bold() {
//     textarea.style.fontWeight="bold";
// }
$(".bbtn").click(function(){
if ($("#text").css("fontWeight")==700)
   { $("#text").css("fontWeight","normal");
}else{ $("#text").css("fontWeight","bold");
}
});


$(".ibtn").click(function(){
    // alert ($("#text").css("fontStyle","italic");
    if ($("#text").css("fontStyle")=="italic") {
    $("#text").css("fontStyle","normal");
    } else { $("#text").css("fontStyle","italic");

    }

});

$(".ubtn").click(function() {
    if ($("#text").css("text-decoration")=="none solid rgb(0, 0, 0)") {
        $("#text").css("text-decoration","underline");
    } else {$("#text").css("text-decoration","none"); }
}
);

$("#sizeoption").change(function() {
    $("#text").css({"fontSize":$("#sizeoption").val()});
});

$("#styleoption").change(function() {
   $("#text").css({"fontFamily":$("#styleoption").val()});
});








// function textsize() {
//     textarea.style.fontSize=selectsize.value;
// }
// function fontStyle() {
//     textarea.style.fontFamily=selectstyle.value;
// }



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

});







