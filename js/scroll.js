$(document).ready( function() {
    window.addEventListener( 'touchstart', function() {
        window.touchstart_scroll = $(window).scrollTop()
    });
    window.addEventListener("touchend", function() {
        if ($(window).scrollTop() - window.touchstart_scroll > 0) {
            movetop(lstpg, 500, 1);
        } 
        else if ($(window).scrollTop() - window.touchstart_scroll < 0) {
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

window.scroll_timeout = true
var v
window.lstpg = window.theta
$(window).scroll(function(){
    console.log("lstpg: " + lstpg)
    if (theta % 1 == 0) {
        clearTimeout(v)
        window.check = false
        window.lstpg = theta
    }
    else {
        if (window.scroll_timeout) {
            window.scroll_timeout = false
            setTimeout(function() {
                scroll_timeout = true
            }, 1000)
            movetop(lstpg, 100, 0);
        }
    }
}); 

function disableScrolling(){
    var x=window.scrollX;
    var y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
}

function enableScrolling(){
    window.onscroll=function(){};
}

/*
window.lstpg = window.theta
window.scroll_timeout = true
$(window).scroll(function() {
    if (window.scroll_timeout) {
        window.scroll_timeout = false
        setTimeout(function() {
            scroll_timeout = true
        }, 1000)
        if (theta > lstpg) {
            movetop_simple(lstpg, 100, 1)
            window.lstpg = theta
            console.log("up")
        }
        else {
            movetop_simple(lstpg, 100, -1)
            console.log("down")
            window.lstpg = theta
        }
    }
});

function movetop_simple() {
    var body = $("html, body");
    console.log(window.lstpg)
    body.stop().animate({scrollTop:$(window).height() * (arguments[0] + arguments[2])}, arguments[1], 'swing', function() { 
    });
} 


var v
window.lstpg = window.theta
$(window).scroll(function(){
    console.log("lstpg: " + lstpg)
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


*/