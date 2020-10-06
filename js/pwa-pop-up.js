$(document).ready(function(){
  var app_enable = true
  if (theta == 0 && app_enable) {
    window.app_enable = false
    setTimeout(function(){
    $(".app-container").css({
        display: "block",
        opacity: 1,
    });
    
  }, 1000);
}
  var app_cont = document.querySelector('.app-container');
  app_cont.addEventListener( 'click', function() {
    $(".app-container").removeClass("shake")
    $(".app-container").addClass("fade-out")
  });
});

function app_fade_out() {
  $(".app-container").removeClass("shake")
  $(".app-container").addClass("fade-out")
}