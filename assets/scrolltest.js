var homeBig = false;
var base = ''
$(document).ready(function() {

    var url = document.URL;
    console.log(url);
    var depth = url.split('/').length - 1;
    if (depth <= 1) {
        base = '.';
    } else if (depth == 2) {
        base = '..';
    } else if (depth == 3) {
        base = '../..';
    } else if (depth == 4) {
        base = '../../..';
    } else if (depth == 5) {
        base = '../../../..';
    } else if (depth == 6) {
        base = '../../../../..';
    }
    var width = $(document).width();;
    console.log(width);
    var scrollWidthLimit = 841;

    if ((url.endsWith(".com/") || url.endsWith("index.html") || url.endsWith(":4000/")) && (width >= scrollWidthLimit)) {

        $(".header_box").css({
            "display": "block"
        });
        $(".header_box_small").css({
            "display": "none"
        });
        $(".logo_header_bar").css({
            "opacity": "0"
        });
        $("#social_container_small").css({
            "opacity": "0"
        });
        homeBig = true;
    } else {

        if (width < scrollWidthLimit) {
            console.log("url(" + base + "/assets/banner_mobile.png\")");
            $(".header_box_small").style.backgroundImage = "url(" + base + "/assets/banner_mobile.png\")";
        }

        $(".header_box").css({
            "display": "none"
        });
        $(".header_box_small").css({
            "display": "block"
        });

        homeBig = false;
    }
});

var prevScroll = 0;

$(window).scroll(function() {
    var wScroll = document.body.scrollTop;

    /*
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
      */


    if (prevScroll == 0 && wScroll != 0) {
        // change to colored background
        $(".header_bar_container").animate({
            backgroundColor: "#41b0f7",
        }, 150);

        if (homeBig) {
            $("#social_container_small").animate({
                opacity: 1.0,
            }, 150);
            $(".logo_header_bar").animate({
                opacity: 1.0,
            }, 150);
        }

    } else if (prevScroll != 0 && wScroll == 0) {
        // change to transparent
        $(".header_bar_container").animate({
            backgroundColor: "transparent",
        }, 150);

        if (homeBig) {
            $("#social_container_small").animate({
                opacity: 0.0,
            }, 150);
            $(".logo_header_bar").animate({
                opacity: 0.0,
            }, 150);
        }
    }

    prevScroll = wScroll;
});
