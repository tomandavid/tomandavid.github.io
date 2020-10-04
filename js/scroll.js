
var check = true
function movetop() {
    var body = $("html, body");
    if ($(window).scrollTop() < $(window).height() * arguments[0]) {
        body.stop().animate({scrollTop:$(window).height() * (arguments[0]-1)}, 100, 'linear', function() { 
        });
    } 
    else {
        body.stop().animate({scrollTop:$(window).height() * (arguments[0] + 1)}, 100, 'linear', function() { 
        });
    };
};
var v
var lstpg
$(window).scroll(function(){
    if (theta % 1 == 0) {
        clearTimeout(v)
        window.check = false
        window.lstpg = theta
    }
    else {
        clearTimeout(v);
        v = setTimeout(function() {
            movetop(lstpg);
        }, 500);
    }
    
});
$(document).ready( function() {
    window.addEventListener( 'touchstart', function() {
        window.touchstart_scroll = $(window).scrollTop()
    });
    window.addEventListener("touchend", function() {
        if (Math.abs(window.touchstart_scroll - $(window).scrollTop()) > 1) {
            movetop(lstpg);
        }
    });

    window.addEventListener("", function() {
        console.log("neco")
    });
});

