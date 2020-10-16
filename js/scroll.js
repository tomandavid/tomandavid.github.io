var fix_timeout

window.addEventListener("mousewheel", scroll_direction, true);
window.addEventListener("mousewheel", scroll_direction, true);
window.addEventListener('DOMMouseScroll', scroll_direction, true); 
window.addEventListener('wheelEvent', scroll_direction, true);
window.addEventListener('touchmove', scroll_direction, true); 
window.addEventListener('keydown', scroll_direction, true);

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
        window.device = isTouchPad ? "TouchPad" : "Mouse"
    if (device == "Mouse") {
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
    $(".snap-container").stop().animate({scrollTop:$(window).height() * arguments[0]}, 500, 'swing', function() {});
};