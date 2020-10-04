$(document).ready(function(){
    window.trigger_one = true
    var grid = document.querySelector('.grid-item-one');
    var card = document.querySelector('.card-one');
    grid.addEventListener( 'mouseenter', function() {
        card.classList.add('is-flipped');
    });
    grid.addEventListener( 'mouseleave', function() {
        if (window.trigger_one) {
            card.classList.remove('is-flipped');
        };
    });
    card.addEventListener( 'click', function() {
        if (window.trigger_one == false) {
            card.classList.toggle('is-flipped');
            window.trigger_one = true
        } else {
            window.trigger_one = false
        }
    });
});

$(document).ready(function(){
    window.trigger_two = true
    var grid = document.querySelector('.grid-item-two');
    var card = document.querySelector('.card-two');
    grid.addEventListener( 'mouseenter', function() {
        card.classList.add('is-flipped');
    });
    grid.addEventListener( 'mouseleave', function() {
        if (window.trigger_two) {
            card.classList.remove('is-flipped');
        };
    });
    card.addEventListener( 'click', function() {
        if (window.trigger_two == false) {
            card.classList.toggle('is-flipped');
            window.trigger_two = true
        } else {
            window.trigger_two = false
        }
    });
});

$(document).ready(function(){
    window.trigger_three = true
    var grid = document.querySelector('.grid-item-three');
    var card = document.querySelector('.card-three');
    grid.addEventListener( 'mouseenter', function() {
        card.classList.add('is-flipped');
    });
    grid.addEventListener( 'mouseleave', function() {
        if (window.trigger_three) {
            card.classList.remove('is-flipped');
        };
    });
    card.addEventListener( 'click', function() {
        if (window.trigger_three == false) {
            card.classList.toggle('is-flipped');
            window.trigger_three = true
        } else {
            window.trigger_three = false
        }
    });
});

$(document).ready(function(){
    window.trigger_four = true
    var grid = document.querySelector('.grid-item-four');
    var card = document.querySelector('.card-four');
    grid.addEventListener( 'mouseenter', function() {
        card.classList.add('is-flipped');
    });
    grid.addEventListener( 'mouseleave', function() {
        if (window.trigger_four) {
            card.classList.remove('is-flipped');
        };
    });
    card.addEventListener( 'click', function() {
        if (window.trigger_four == false) {
            card.classList.toggle('is-flipped');
            window.trigger_four = true
        } else {
            window.trigger_four = false
        }
    });
});

$(document).ready(function(){
    window.trigger_five = true
    var grid = document.querySelector('.grid-item-five');
    var card = document.querySelector('.card-five');
    grid.addEventListener( 'mouseenter', function() {
        card.classList.add('is-flipped');
    });
    grid.addEventListener( 'mouseleave', function() {
        if (window.trigger_five) {
            card.classList.remove('is-flipped');
        };
    });
    card.addEventListener( 'click', function() {
        if (window.trigger_five == false) {
            card.classList.toggle('is-flipped');
            window.trigger_five = true
        } else {
            window.trigger_five = false
        }
    });
});

$(document).ready(function(){
    window.trigger_six = true
    var grid = document.querySelector('.grid-item-six');
    var card = document.querySelector('.card-six');
    grid.addEventListener( 'mouseenter', function() {
        card.classList.add('is-flipped');
    });
    grid.addEventListener( 'mouseleave', function() {
        if (window.trigger_six) {
            card.classList.remove('is-flipped');
        };
    });
    card.addEventListener( 'click', function() {
        if (window.trigger_six == false) {
            card.classList.toggle('is-flipped');
            window.trigger_six = true
        } else {
            window.trigger_six = false
        }
    });
});

$(document).ready(function(){
    window.trigger_seven = true
    var grid = document.querySelector('.grid-item-seven');
    var card = document.querySelector('.card-seven');
    grid.addEventListener( 'mouseenter', function() {
        card.classList.add('is-flipped');
    });
    grid.addEventListener( 'mouseleave', function() {
        if (window.trigger_seven) {
            card.classList.remove('is-flipped');
        };
    });
    card.addEventListener( 'click', function() {
        if (window.trigger_seven == false) {
            card.classList.toggle('is-flipped');
            window.trigger_seven = true
        } else {
            window.trigger_seven = false
        }
    });
});

$(document).ready(function(){
    window.trigger_eight = true
    var grid = document.querySelector('.grid-item-eight');
    var card = document.querySelector('.card-eight');
    grid.addEventListener( 'mouseenter', function() {
        card.classList.add('is-flipped');
    });
    grid.addEventListener( 'mouseleave', function() {
        if (window.trigger_eight) {
            card.classList.remove('is-flipped');
        };
    });
    card.addEventListener( 'click', function() {
        if (window.trigger_eight == false) {
            card.classList.toggle('is-flipped');
            window.trigger_eight = true
        } else {
            window.trigger_eight = false
        }
    });
});

$(document).ready(function(){
    window.trigger_nine = true
    var grid = document.querySelector('.grid-item-nine');
    var card = document.querySelector('.card-nine');
    grid.addEventListener( 'mouseenter', function() {
        card.classList.add('is-flipped');
    });
    grid.addEventListener( 'mouseleave', function() {
        if (window.trigger_nine) {
            card.classList.remove('is-flipped');
        };
    });
    card.addEventListener( 'click', function() {
        if (window.trigger_nine == false) {
            card.classList.toggle('is-flipped');
            window.trigger_nine = true
        } else {
            window.trigger_nine = false
        }
    });
});


$(document).ready(function(){
    var grid = document.querySelector('.message-me');
    var card = document.querySelector('.message-container');
    var blur = document.querySelector('.contact-grid');
    var line_01 = document.querySelector('.line_01');
    var line_02 = document.querySelector('.line_02');
    var cancel_01 = document.querySelector('.contact-cancel');
    var cancel_02 = document.querySelector('.second-page');
    grid.addEventListener( 'click', function() {
        card.classList.add('message-show');
        blur.classList.add('blur-me');
        line_01.classList.add('blur-me');
        line_02.classList.add('blur-me');
    });
    cancel_01.addEventListener( 'click', function() {
        card.classList.remove('message-show');
        blur.classList.remove('blur-me');
        line_01.classList.remove('blur-me');
        line_02.classList.remove('blur-me');
    });
    cancel_02.addEventListener( 'click', function() {
        card.classList.remove('message-show');
        blur.classList.remove('blur-me');
        line_01.classList.remove('blur-me');
        line_02.classList.remove('blur-me');
    });
});

$(document).ready(function(){
    var phone = document.querySelector('.phone');
    var mail = document.querySelector('.mail');
    var linkedin = document.querySelector('.linkedin');
    linkedin.addEventListener( 'click', function() {
        window.open("https://www.linkedin.com/in/tomandavid/", '_blank');
    });
    phone.addEventListener( 'click', function() {
        window.open("https://wa.me/34610931610?text=Hi%20David,%20I%20saw%20your%20portfolio!", '_blank');
    });
    mail.addEventListener( 'click', function() {
        ebody = "Hi David," + '\r\n' + '\r\n' + "I saw your portfolio!"
        ebody = encodeURIComponent(ebody)
        window.open('mailto:'+"toman.david@me.com"+'?subject='+"Website development"+'&body=' + ebody, '_self');
    });
});


$(document).ready(function(){
    window.addEventListener( 'touchstart', function() {
        window.touchstart_scroll = $(window).scrollTop()
    });
    window.addEventListener( 'touchleave', function() {
       console.log("touch")
    });
});




