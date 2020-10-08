var max_scroll_ios_fix = 5
var check = true
window.scroll_timeout = true
window.v = 0
var ios_fix
window.lstpg = window.theta

window.addEventListener("mousewheel", scroll_direction, false);
window.addEventListener("DOMMouseScroll", scroll_direction, false);

$(document).ready( function() {
    window.addEventListener( 'touchstart', function() {
        window.touchstart_scroll = $(window).scrollTop()
        console.log("start: "+$(window).scrollTop())
    });
    window.addEventListener("touchend", function() {
        console.log("end: "+$(window).scrollTop())
        if ($(window).scrollTop() < 1) {
            movetop(1, 500)
        }
        else if ($(window).scrollTop() - window.touchstart_scroll > 0) {
            movetop(lstpg + 1, 500);
        } 
        else if ($(window).scrollTop() - window.touchstart_scroll < 0) {
            movetop(lstpg - 1, 500);
        }
    });
});

$(window).scroll(function(){
    if (window.scroll_down) {
        window.nxtpg = Math.ceil(theta)
    }
    else {
        window.nxtpg = Math.floor(theta)
    }
        if (theta % 1 == 0) {
            clearTimeout(window.v)
            window.check = false
            window.lstpg = theta
        }
        else {
            if (window.device == "TouchPad") {
                touchpad_scroll(500)
            }
            else if (window.device == "Mouse") {
                touchpad_scroll(100)
            }
        }
        if ($(window).width() < 1000) {
            if (theta < 0.5 && theta != 0 && ios_fix == null) {
                ios_fix_settimeout()
            }
            else {
                ios_fix_cleartimeout()
            }
        }
    });

function movetop() {
    var body = $("html, body");
    body.stop().animate({scrollTop:$(window).height() * arguments[0]}, arguments[1], 'swing', function() {});
};

function scroll_direction(e) {
    var isTouchPad = e.wheelDeltaY ? e.wheelDeltaY === -3 * e.deltaY : e.deltaMode === 0
    if (window.device == undefined) {
        window.device = isTouchPad ? "TouchPad" : "Mouse"
    }
    if (e.deltaY > 0) {
        window.scroll_down = true
    }
    else {
        window.scroll_down = false
    }
}

function ios_fix_settimeout() {
    ios_fix = setTimeout(function(){
        movetop(0, 200 + "ms", 0)
    }, 1000);
}

function ios_fix_cleartimeout() {
    clearTimeout(ios_fix)
    ios_fix = null
}

function mouse_scrolla() {
    console.log("nx"+nxtpg)
    if (window.scroll_timeout) {
        window.scroll_timeout = false
        setTimeout(function() {
            scroll_timeout = true
        }, 1000)
        movetop(nxtpg, 200 + "ms", 0);
        console.log("ahoj")
    }
}

function touchpad_scroll() {
    clearTimeout(window.v);
   window.v = setTimeout(function() {
        movetop(nxtpg, 200 + "ms", 0);
    }, arguments[0]);
}