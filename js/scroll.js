
$(document).ready( function() {
    window.addEventListener( 'touchstart', function() {
        window.touchstart_scroll = $(window).scrollTop()
    });
    window.addEventListener("touchend", function() {
        if (Math.abs(window.touchstart_scroll - $(window).scrollTop()) > 1) {
            movetop(lstpg, 500);
        }
    });
});
var max_scroll_ios_fix = 5
var check = true
function movetop() {
    console.log(arguments[1])
    var body = $("html, body");
    if ($(window).scrollTop() < $(window).height() * arguments[0] || $(window).scrollTop() == max_scroll_ios_fix) {
        body.stop().animate({scrollTop:$(window).height() * (arguments[0]-1)}, arguments[1], 'swing', function() { 
        });
    } 
    else {
        if (lstpg != max_scroll_ios_fix) {
            body.stop().animate({scrollTop:$(window).height() * (arguments[0] + 1)}, arguments[1], 'swing', function() { 
            });
        }
    };
    console.log("lstpg: " + $(window).scrollTop() )
};
var v
var lstpg = 0
$(window).scroll(function(){
    if (theta % 1 == 0) {
        clearTimeout(v)
        window.check = false
        window.lstpg = theta
    }
    else {
        clearTimeout(v);
        v = setTimeout(function() {
            movetop(lstpg, 100);
        }, 100);
    }
});