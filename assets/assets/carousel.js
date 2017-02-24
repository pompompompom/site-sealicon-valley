$(document).ready(function() {
    var carousel = $(".carousel"),
        currdeg = 0;
    var totalItems = 5;
    var degStep = 360 / totalItems;
    var allItems = document.getElementById("ccarousel").children;
    console.log("rawrwarawr");
    console.log(allItems.length);
    var currItem = 0;

    for (i = 0; i < allItems.length; i++) {
        allItems[i].style.opacity = 0.2;
    }
    allItems[currItem].style.opacity = 1;

    $(".next").click(function() {
        rotate("n");
    });
    $(".prev").click(function() {
        rotate("p");
    });
    $("body").keydown(function(e) {
        if (e.keyCode == 37) { // left
            rotate("p");
        } else if (e.keyCode == 39) { // right
            rotate("n");
        }
    });
    $(".carousel").on("swipeleft", function() {
        rotate("p");
    });

    $(".carousel").on("swiperight", function() {
        rotate("n");
    });

    var fadeOutItem = 0;

    function rotate(e) {
        console.log("CIICK");
        if (e == "n") {
            currdeg = currdeg - degStep;
        }
        if (e == "p") {
            currdeg = currdeg + degStep;
        }
        var rawr = ((currdeg * (-1)) % 360) + 360;
        currItem = (rawr / degStep) % totalItems;

        if (e == "n") {
            fadeOutItem = (currItem + totalItems - 1) % totalItems;
        }
        if (e == "p") {
            fadeOutItem = (currItem + totalItems + 1) % totalItems;
        }
        console.log(currItem);
        carousel.css({
            "-webkit-transform": "rotateY(" + currdeg + "deg)",
            "-moz-transform": "rotateY(" + currdeg + "deg)",
            "-o-transform": "rotateY(" + currdeg + "deg)",
            "transform": "rotateY(" + currdeg + "deg)"
        });
        fadeOut(allItems[fadeOutItem]);

        fadeIn(allItems[currItem]);
    }

    function fadeOut(element) {
        var op = 1; // initial opacity
        var timer = setInterval(function() {
            if (op <= 0.2) {
                clearInterval(timer);
            }
            element.style.opacity = op;
            element.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op -= op * 0.1;
        }, 20);
    }

    function fadeIn(element) {
        var op = 0.2; // initial opacity
        element.style.display = 'block';
        var timer = setInterval(function() {
            if (op >= 1) {
                clearInterval(timer);
            }
            element.style.opacity = op;
            element.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op += op * 0.1;
        }, 10);
    }

});
