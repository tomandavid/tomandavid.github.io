var fix_timeout

window.addEventListener("mousewheel", snap_scroll_fix, true);

function snap_scroll_fix() {
    $(".fixed").css({
        pointerEvents: "none"
    })
    fix_cleartimeout()
    fix_settimeout()
    console.log("agoj")

}

function fix_settimeout() {
    fix_timeout = setTimeout(function(){
        $(".fixed").css({
            pointerEvents: "all"
        })
    }, 1000);
}

function fix_cleartimeout() {
    clearTimeout(fix_timeout)
    fix_timeout = null
}

$(".container").scroll(function() {
    console.log("agoj")
});

window.addEventListener('scroll', function() {
    console.log("agoj")
  });