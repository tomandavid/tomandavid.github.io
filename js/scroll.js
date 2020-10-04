
var check = true
function movetop() {
    var body = $("html, body");
    if ($(window).scrollTop() < $(window).height() * arguments[0]) {
        body.stop().animate({scrollTop:$(window).height() * (arguments[0]-1)}, 100, 'swing', function() { 
        });
    } 
    else {
        body.stop().animate({scrollTop:$(window).height() * (arguments[0] + 1)}, 200, 'swing', function() { 
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
    window.addEventListener("touchend", function() {
        console.log("hey")
        movetop(lstpg);
    });
});

