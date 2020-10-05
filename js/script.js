
$(document).ready(function(){
    if ($(window).width() > 1000) {
        var path_rectangle = "rectangle.json"
    }
    else {
        var path_rectangle = "recrtanglemobile.json"
    }
    window.animation = bodymovin.loadAnimation({
        container: document.getElementById("background-rectangle"),
        rederer: "svg",
        loop: false,
        autoplay: false,
        path: path_rectangle,
        rendererSettings: {
            preserveAspectRatio: 'none'
        }
    });

    
    window.theta = Math.round($(window).scrollTop() / ($(window).height()) * 1000) / 1000;
    window.theta = Math.min(window.theta, 5)
    movetop(Math.round(window.theta)-1)
    scroll_animation()
    reload_fix()
});

$(window).scroll(function(){
    window.theta = Math.round($(window).scrollTop() / ($(window).height() ) * 1000) / 1000;
    window.theta = Math.min(window.theta, 5)
    scroll_animation()
    name_fade()
})

$(window).resize(function() {
    if (theta >= 1) {
        $(".line_02").css({
            marginTop: 0,
            height: 0.9 * window.innerHeight + "px"
        });
    }
    else {
        $(".line_02").css({
            marginTop: - ($(window).width() - $(window).height()) * 0.9 / 2 + ($(window).width() - $(window).height()) *  (- Math.pow(0 - 1, 2) + 1) * 0.9 / 2,
            height: 90 + "vw"
        });
    }
    if (theta < 5) {
        $(".line_01").css({
            height: 90 + "vh"
        });
    }
    $(".my-name").css({
        top: 0.48 * $(window).height() - 0.1 * $(window).width() + "px"
    })
    touchpad_scroll()
})

function reload_fix() {
    if (theta >= 1) {
        $(".line_01").css({
            transform: "rotate(" + (- 1 * 180) + "deg)",
            left: "5%",
            height: 0.9 * window.innerHeight + "px"
        });
        $(".line_02").css({
            transform: "rotate(" + (90 - 1 * 90) + "deg)",
            right: "5%",
            marginTop: - ($(window).width() - $(window).height()) * 0.9 / 2 + ($(window).width() - $(window).height()) *  (- Math.pow(1 - 1, 2) + 1) * 0.9 / 2,
            height: 0.9 * window.innerHeight + "px"
        });
        $(".my-name").css({
            display: "none"
        });
    }
    if (theta == 5) {
        $(".line_01").css({
            transform: "rotate(" + 45 + "deg)",
            left: 5 + 45 + "%"
        });
        $(".line_02").css({
            transform: "rotate(-" + 45 + "deg)",
            right: 5 + 45 + "%"
        });
    }
    $(".second-page").css({
        height: 5 * window.innerHeight + "px"
    });
    $(".my-name").css({
        top: 0.48 * $(window).height() - 0.1 * $(window).width() + "px"
    })
}

function scroll_animation() {

        if (theta >= 1) {
            $(".line_01").css({
                height: 0.9 * window.innerHeight + "px",
                left: 5 + "%",
                transform: "rotate(" + 0 + "deg)",
            });
            $(".line_02").css({
                height: 0.9 * window.innerHeight + "px",
                right: 5 + "%",
                transform: "rotate(" + 0 + "deg)",
            });
            $(".curtain_01").css({
                width: 5 + "%"
            });
            $(".curtain_02").css({
                width: 5 + "%"
            });
        }
    
        if (theta >= 5) {
            $(".contact-grid").css({
                display: "grid",
                top: 0.45 * window.innerHeight + "px"
            });
            $(".line_01").css({
                transform: "rotate(" + 45 + "deg)",
                left: 5 + 45 + "%"
            });
            $(".line_02").css({
                transform: "rotate(-" + 45 + "deg)",
                right: 5 + 45 + "%"
            });
            if ($(window).width() < 1000) {
                $(".line_01").css({
                    top: 0 + "%"
                });
                $(".line_02").css({
                    top: 0 + "%"
                });
            }
        }
        else if (theta > 4) {
            theta_loc = theta - 4
            $(".line_01").css({
                transform: "rotate(" + 45 * theta_loc + "deg)",
                left: 5 + 45 * theta_loc + "%"
            });
            $(".line_02").css({
                transform: "rotate(-" + 45 * theta_loc + "deg)",
                right: 5 + 45 * theta_loc + "%"
            });
            $(".book_01, .book_02, .book_03").css({
                display: "none"
            });
            $(".book_04").css({
                opacity: Math.min(1-(theta_loc)*5, 1)
            });
            $(".contact-grid").css({
                display: "grid",
                opacity: Math.max((theta_loc - 0.8)*5, 0)
            });
            if ($(window).width() < 1000) {
                $(".line_01").css({
                    top: 5 - 5 * theta_loc + "%"
                });
                $(".line_02").css({
                    top: 5 - 5 * theta_loc + "%"
                });
            }
        }
        else if (theta > 3.5) {
            theta_loc = theta - 3.5
            $(".line_02").css({
                transform: "rotate(-180deg)",
                right: 95 - 90 * 2 * theta_loc + "%"
            });
            $(".curtain_02").css({
                width: 95 - 90 * 2 * theta_loc + "%" 
            });
            $(".book_04").css({
                display: "block"
            });
            $(".book_01, .book_02, .book_03").css({
                display: "none"
            });
            $(".contact-grid").css({
                display: "none"
            });
        }
        else if (theta > 3) {
            theta_loc = theta - 3
            $(".line_02").css({
                transform: "rotate(-180deg)",
                right: 5 + 90 * 2 * theta_loc + "%"
            });
            $(".curtain_02").css({
                width: 5 + 90 * 2 * theta_loc + "%" 
            });
            $(".book_03").css({
                display: "block",
            });
            $(".book_01, .book_02, .book_04").css({
                display: "none"
            });
        }
        else if (theta > 2.5) {
            theta_loc = theta - 2.5
            $(".line_01").css({
                transform: "rotate(-180deg)",
                left: 95 - 90 * 2 * theta_loc + "%"
            });
            $(".curtain_01").css({
                width: 95 - 90 * 2 * theta_loc + "%" 
            });
            $(".book_03").css({
                display: "block",
            });
            $(".book_02").css({
                display: "none"
            });
        }
        else if (theta > 2) {
            theta_loc = theta - 2
            $(".line_01").css({
                transform: "rotate(-180deg)",
                left: 5 + 90 * 2 * theta_loc + "%"
            });
            $(".curtain_01").css({
                width: 5 + 90 * 2 *theta_loc + "%" 
            });
            $(".book_02").css({
                display: "block",
            });
            $(".book_03").css({
                display: "none"
            });
            $('#ddd').trigger('pause');
        }
        else if (theta >= 1.5) {
            $(".line_01").css({
                transform: "rotate(-180deg)",
                left: 45 - 40 * (theta-1.5) * 2 + "%" 
            });
            $(".line_02").css({
                transform: "rotate(0deg)",
                right: 45 - 40 * (theta-1.5) * 2 + "%"
            });
            $(".curtain_01, .curtain_02").css({
                width: 45 - 40 * (theta-1.5) * 2 + "%" 
            });
            $(".book_02").css({
                display: "block",
            });
            $(".book_01").css({
                display: "none"
            });
            animation.goToAndStop(0, true);
            pop_down()
        }
        else if (theta >= 1) {
            $(".line_01").css({
                transform: "rotate(-180deg)",
                left: 5 + 45 * (theta-1) * 2 + "%"
            });
            $(".line_02").css({
                transform: "rotate(0deg)",
                right: 5 + 45 * (theta-1) * 2 + "%"
            });
            $(".curtain_01, .curtain_02").css({
                display: "block",
                width: 5 + 45 * (theta-1) * 2 + "%"
            });
            $(".book_02").css({
                display: "none"
            });
            $(".book_01").css({
                display: "block",
            });
            if (theta == 1) {
                animation.play();
                call_pop_up()
            }
            $(".my-name").css({
                display: "none"
            })
        }
        else if (theta >= 0) {
            $(".curtain_01, .curtain_02").css({
                display: "none",
            });
            $(".line_01").css({
                transform: "rotate(" + (- theta * 180) + "deg)",
                left: 20 - 10 * theta + 5 * Math.sin(theta * Math.PI * 3/2) + "%",
                height: (0.9 - 0.4 * Math.abs(Math.sin(theta * Math.PI))) * window.innerHeight + "px",
                top: 5 + "%"
            });
            $(".line_02").css({
                transform: "rotate(" + (90 - theta * 90) + "deg)",
                right: 50 - 45 * theta + "%",
                marginTop: - ($(window).width() - $(window).height()) * 0.9 / 2 + ($(window).width() - $(window).height()) *  (- Math.pow(theta - 1, 2) + 1) * 0.9 / 2,
                height: ($(window).width() - ($(window).width() - window.innerHeight) * (- Math.pow(theta - 1, 2) + 1)) * 0.9,
                top: 5 + "%"
            });
            $(".book_01").css({
                opacity: Math.max((theta - 0.8)*5, 0)
            });
            $(".my-name").css({
                display: "flex"
            })
            if (theta <= 0.5) {
                animation.goToAndStop(0, true);
                pop_down()
            }
            $(".book_01, .book_02, .book_03, .book_04, .contact-grid").css({
                display: "none"
            });
            if ($(window).width() < 1000) {
                $(".line_01").css({
                    height: (0.9 - 0.4 * Math.abs(Math.sin(theta * Math.PI))) * window.innerHeight + "px",
                });
            }
        };

}

function name_fade() {
        if (theta >= 1) {
            $(".my-name h1").css({
                opacity: 0
            })
        };
        n = Math.floor(theta*13)
    $(".my-name h1:nth-child(" + n + ")").css({
        opacity: 1 - (theta - (n-0.12) / 12) * 10
    })
    $(".my-name h1:nth-child(-n" + (n-2) + ")").css({
        opacity: 0
    })
    $(".my-name h1:nth-child(" + (n-1) + ")").css({
        opacity: 0.1 - (theta - (n-0.12) / 12) 
    })
    $(".my-name h1:nth-child(n" + (n+1) + ")").css({
        opacity: 1
    })
}

function call_pop_up() {
    window.i = 0;
    window.y = [7, 5, 3, 9, 1, 2, 8, 4, 6];
    pop_up()
}

function pop_up() {
    setTimeout(function() {
        i = Math.min(i, 8)
        $(".grid-container .grid-item:nth-child(" + y[i] + ")").css({
            animationName: "pop_up",
            animationDuration: 1 + "s",
            opacity: 1
        });
        i++;
        if (i <= 8) {
        pop_up();
        }
    }, 70)
}

function pop_down() {
    $(".grid-container .grid-item").css({
        animationName: "",
        animationDuration: 1 + "s",
        opacity: 0
    });
}


