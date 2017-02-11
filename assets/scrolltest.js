$(window).scroll(function(){
  var wScroll = document.body.scrollTop;

  // bigger divider -> longer it will remain on screen

  $(".logo").css({
    "transform" : "translate(0px, "+ wScroll/2+"px)"
  });


  $(".layer2").css({
    "transform" : "translate(0px, "+ wScroll/2+"px)"
  });


  $(".layer3").css({
    "transform" : "translate(0px, "+ wScroll/8+"px)"
  });


  $(".layer4").css({
    "transform" : "translate(0px, "+ wScroll/5+"px)"
  });
});
