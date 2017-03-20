var homeBig = false;
var base = ''

    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
    }
    /* Set the width of the side navigation to 0 */
    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }
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

        $(".logo_header_bar").css({
            "opacity": "0"
        });
        $(".social_container_small").css({
            "opacity": "0"
        });
        homeBig = true;
    } else {
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
        /*
        $(".header_bar_container").animate({
            backgroundColor: "#41b0f7",
        }, 150);
*/
        if (homeBig) {
            $(".social_container_small").animate({
                opacity: 1.0,
            }, 150);
            $(".logo_header_bar").animate({
                opacity: 1.0,
            }, 150);
        }

    } else if (prevScroll != 0 && wScroll == 0) {
        // change to transparent
        /*
        $(".header_bar_container").animate({
            backgroundColor: "transparent",
        }, 150);
*/
        if (homeBig) {
            $(".social_container_small").animate({
                opacity: 0.0,
            }, 150);
            $(".logo_header_bar").animate({
                opacity: 0.0,
            }, 150);
        }
    }

    prevScroll = wScroll;
});
