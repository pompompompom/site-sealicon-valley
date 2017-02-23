/*var prevScroll = 0;
var width = $( document ).width();
var scrollWidthLimit = 841;

$(window).scroll(function() {
    var wScroll = document.body.scrollTop;

      if(width >= scrollWidthLimit) {
    // bigger divider -> longer it will remain on screen


    $(".logo").css({
        "transform": "translate(0px, " + wScroll / 2 + "px)"
    });


    $(".layer2").css({
        "transform": "translate(0px, " + wScroll / 2 + "px)"
    });


    $(".layer3").css({
        "transform": "translate(0px, " + wScroll / 8 + "px)"
    });


    $(".layer4").css({
        "transform": "translate(0px, " + wScroll / 10 + "px)"
    });
  }


    if (prevScroll == 0 && wScroll != 0) {
        // change to white
        $(".header_bar_container").animate({
            backgroundColor: "white",
            borderBottomColor: "rgba(211, 211, 211, 0.3)"
        }, 200);

    } else if (prevScroll != 0 && wScroll == 0) {
        // change to transparent
        $(".header_bar_container").animate({
            backgroundColor: "transparent",
            borderBottomColor: "rgba(255, 255, 255, 0.3)"
        }, 200);
    }

    prevScroll = wScroll;
});
*/
