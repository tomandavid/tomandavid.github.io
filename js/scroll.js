$(document).ready( function() {
    window.addEventListener( 'touchstart', function() {
        window.touchstart_scroll = theta
    });
    window.addEventListener("touchend", function() {
        if (theta - window.touchstart_scroll > 0) {
            movetop(lstpg, 500, 1);
        } 
        else {
            movetop(lstpg, 500, -1);
        }
    });
});
var max_scroll_ios_fix = 5
var check = true
function movetop() {
    var body = $("html, body");
    if ($(window).scrollTop() < $(window).height() * arguments[0] || (theta == max_scroll_ios_fix && arguments[2] == -1)) {
        body.stop().animate({scrollTop:$(window).height() * (arguments[0] - 1)}, arguments[1], 'swing', function() { 
        });
    } 
    else {
        if (lstpg != max_scroll_ios_fix) {
            body.stop().animate({scrollTop:$(window).height() * (arguments[0] + 1)}, arguments[1], 'swing', function() { 
            });
        }
    };
};
var v
var lstpg = 0
$(window).scroll(function(){
    console.log("lstpg: " + theta)
    if (theta % 1 == 0) {
        clearTimeout(v)
        window.check = false
        window.lstpg = theta
    }
    else {
        clearTimeout(v);
        v = setTimeout(function() {
            movetop(lstpg, 100, 0);
        }, 100);
    }
});