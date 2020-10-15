var fix_timeout


window.addEventListener("mousewheel", snap_scroll_fix, true);
window.addEventListener('DOMMouseScroll', snap_scroll_fix, true); 
window.addEventListener('wheelEvent', snap_scroll_fix, true);
window.addEventListener('touchmove', snap_scroll_fix, true); 
window.addEventListener('keydown', snap_scroll_fix, true);

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