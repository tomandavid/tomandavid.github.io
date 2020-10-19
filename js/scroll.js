var max_scroll_ios_fix = 5
var check = true
window.scroll_timeout = true
window.v = 0
var ios_fix
window.lstpg = window.theta
window.nxtpg = 0
var theta
window.scroll_down = theta
window.moved = false

$(window).scroll(function(){
console.log(moved)
    if (window.scroll_down == null || $(window).scrollTop() > window.last_scrolltop) {
        window.scroll_down = true
    }
    else if (window.scroll_down == $(window).scrollTop() < window.last_scrolltop) {
        window.scroll_down = false
    }

    if (window.scroll_down) {
        window.nxtpg = Math.round(theta)
        if (theta < 0.5) {
            window.nxtpg = 1
        }
        console.log(nxtpg)
    }
    else {
        window.nxtpg = Math.floor(theta)
    }
    fix_cleartimeout()
    dot_slider()
    if (theta > 0) {
        fix_settimeout()
    }

    window.last_scrolltop = $(window).scrollTop()
});

function movetop() {
    var body = $("html, body");
    body.stop().animate({scrollTop:$(window).height() * arguments[0]}, arguments[1], 'swing', function() {window.moved = true});
};

function fix_settimeout() {
    ios_fix = setTimeout(function(){
        movetop(nxtpg, 200 + "ms", 0)
    }, 1000);
}

function fix_cleartimeout() {
    clearTimeout(ios_fix)
    ios_fix = null
}

function dot_slider() {

    var dot_select = Math.round(theta)

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
