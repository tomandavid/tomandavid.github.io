$(document).ready( function() {
    window.addEventListener( 'touchstart', function() {
        window.touchstart_scroll = $(window).scrollTop()
    });
    window.addEventListener("touchend", function() {
        if ($(window).scrollTop() - window.touchstart_scroll > 0) {
            movetop(lstpg + 1, 500);
        } 
        else if ($(window).scrollTop() - window.touchstart_scroll < 0) {
            movetop(lstpg - 1, 500);
        }
    });
});
var max_scroll_ios_fix = 5
var check = true
function movetop() {
    var body = $("html, body");
    console.log("tady: "+window.innerHeight * arguments[0])
    body.stop().animate({scrollTop:$(window).height() * arguments[0]}, arguments[1], 'swing', function() { enableScroll() });
};

function scroll_direction(e) {
    
    var isTouchPad = e.wheelDeltaY ? e.wheelDeltaY === -3 * e.deltaY : e.deltaMode === 0
    if (window.device == undefined) {
        window.device = isTouchPad ? "TouchPad" : "Mouse"
    }
    console.log(e.deltaY)
    
    
    if (e.deltaY > 0) {
        window.scroll_down = true
    }
    else {
        window.scroll_down = false
    }
    if (window.scroll_down) {
        window.nxtpg = Math.ceil(theta)
    }
    else {
        window.nxtpg = Math.floor(theta)
    }
    movetop(nxtpg, 200)
    disableScroll()
}
window.addEventListener("mousewheel", scroll_direction, false);
window.addEventListener("DOMMouseScroll", scroll_direction, false);

window.scroll_timeout = true
window.v = 0
var ios_fix
window.lstpg = window.theta

$(window).scroll(function(){
    console.log(theta)
    console.log(window.device)
    console.log("st: "+$(window).scrollTop())

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
            touchpad_scroll()
        }
        else if (window.device == "Mouse") {
            
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

var myVar;


function ios_fix_settimeout() {
    ios_fix = setTimeout(function(){
        movetop(0, 200 + "ms", 0)
    }, 1000);
}

function ios_fix_cleartimeout() {
    clearTimeout(ios_fix)
    ios_fix = null
}
window.scroll_timeout = true
function mouse_scroll() {
    console.log("nx"+nxtpg)
    disableScroll()
    if (window.scroll_timeout) {
        window.scroll_timeout = false
        var a = setTimeout(function() {
            scroll_timeout = true
            enableScroll()
        }, 5000)
        movetop(nxtpg, 200 + "ms", 0);
        console.log("ahoj")
    }
}

function touchpad_scroll() {
    clearTimeout(window.v);
   window.v = setTimeout(function() {
        movetop(nxtpg, 200 + "ms", 0);
    }, 500);
}



// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
    console.log("dis")
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
    console.log("ena")
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}