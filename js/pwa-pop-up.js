$(document).ready(function(){
  showAppInstallBanner()

function showAppInstallBanner() {
      let userAgent = navigator.userAgent;
      if (userAgent.match(/iPhone/i) || userAgent.match(/iPad/i)) {
        // dont show if PWA is installed
        if (window.matchMedia('(display-mode: standalone)').matches == false) {
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
        function app_fade_out() {
          $(".app-container").removeClass("shake")
          $(".app-container").addClass("fade-out")
        }
        }
      }
    }
});