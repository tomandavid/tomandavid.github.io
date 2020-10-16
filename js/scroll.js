var fix_timeout

window.addEventListener("mousewheel", mouseHandle, true);
window.addEventListener('DOMMouseScroll', mouseHandle, true); 
window.addEventListener('wheelEvent', mouseHandle, true);
window.addEventListener('touchmove', mouseHandle, true); 
window.addEventListener('keydown', mouseHandle, true);

var scrolling = false;
var oldTime = 0;
var newTime = 0;
var isTouchPad;
var eventCount = 0;
var eventCountStart;

function mouseHandle(evt) {
    var isTouchPadDefined = isTouchPad || typeof isTouchPad !== "undefined";
    console.log(isTouchPadDefined);
    if (!isTouchPadDefined) {
        if (eventCount === 0) {
            eventCountStart = new Date().getTime();
        }

        eventCount++;

        if (new Date().getTime() - eventCountStart > 100) {
                if (eventCount > 10) {
                    isTouchPad = true;
                } else {
                    isTouchPad = false;
                }
            isTouchPadDefined = true;
        }
    }

    if (isTouchPadDefined) {
        // here you can do what you want
        // i just wanted the direction, for swiping, so i have to prevent
        // the multiple event calls to trigger multiple unwanted actions (trackpad)
        if (!evt) evt = event;
        var direction = (evt.detail<0 || evt.wheelDelta>0) ? 1 : -1;

        if (isTouchPad) {
            snap_scroll_fix()
        } 
        else {
            if (direction < 0) {
                nxtpg = Math.ceil(theta)
                movetop(theta + 1)
            } else {
                nxtpg = Math.ceil(theta)
                movetop(theta - 1)
            }
        }
    }
}

function log() {
    console.log(arguments[0])
}

function snap_scroll_fix() {
    $(".snap-block > *").css({
        pointerEvents: "none"
    })
    fix_cleartimeout()
    fix_settimeout()
}

function fix_settimeout() {
    fix_timeout = setTimeout(function(){
        $(".snap-block > *").css({
            pointerEvents: "all"
        })
    }, 1000);
}

function fix_cleartimeout() {
    clearTimeout(fix_timeout)
    fix_timeout = null
}

function dot_slider() {

    var dot_select = theta

    for (j = 1; j <= 5; j++) {
        $(".dot_0" + j).css({
            fill: "transparent",
            transition: "all 250ms ease-in-out"
        });
    };
    $(".dot_0" + dot_select).css({
        fill: "rgb(225, 225, 225)",
        transition: "all 250ms ease-in-out"
    });
        
};

function scroll_direction(e) {
    var isTouchPad = e.wheelDeltaY ? e.wheelDeltaY === -3 * e.deltaY : e.deltaMode === 0
    if (window.device == undefined) {
        window.device = isTouchPad ? "TouchPad" : "Mouse"
    }
    if (device != "Touchpad") {
        if (e.deltaY > 0) {
            nxtpg = Math.ceil(theta)
            console.log(nxtpg)
            movetop(theta + 1)
        }
        else if (e.deltaY < 0) {
            nxtpg = Math.floor(theta)
            movetop(theta - 1)
            console.log(nxtpg)
        }
        else {
            window.scroll_down = null
        }
    }
    else {
        snap_scroll_fix()
    }
    
}

function movetop() {
    $(".snap-container").stop().animate({scrollTop:$(window).height() * arguments[0]}, 300, 'swing', function() {});
};