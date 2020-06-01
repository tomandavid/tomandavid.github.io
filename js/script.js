

        $(window).scroll(function() {
        var phase = 0.16;
        var theta = ($(window).scrollTop() / window.innerHeight);
        var theta2 = theta - phase;
        var height_fix = 821 / window.innerHeight
            
        
        if (theta < phase) {
            $('#left').css({ 
                marginLeft: - theta * 173 * 3.3 , 
                marginTop: - theta * 100 * 5, 
                transform: 'rotate(-' + Math.min(theta * 120 , 120) + 'deg)' 
            });
            $('#right').css({ 
                marginLeft: theta * 100 * 5, 
                marginTop: - theta * 173 * 3,
                transform: 'rotate(' + Math.min(theta * 120, 120) + 'deg)' 
            });
            $('#bottom').css({ 
                marginLeft: theta * 100 * 2, 
                marginTop: theta * 173 * 2,
                transform: 'rotate(' + Math.min(theta * 0, 120) + 'deg)' 
            });
        }
        else {
            $('#left').css({ 
                marginLeft: - Math.min(theta * 173 * 3.3, 400 / height_fix),
                marginTop: - Math.min(theta * 100 * 4, 470 / 2 / 1.53 / height_fix),
                transform: 'rotate(-' + Math.min(theta * 120 * height_fix, 120) + 'deg)' 
            });
            $('#right').css({ 
                marginLeft: Math.min(theta * 100 * 5, 400 / height_fix), 
                marginTop: - Math.min(theta * 173 * 2, 470 / 2 / 1.52 / height_fix),
                transform: 'rotate(' + Math.min(theta * 120 * height_fix, 120) + 'deg)' 
            });
            $('#bottom').css({ 
                marginLeft: - Math.min(theta2 * 40  - phase * 100 * 2, 0),
                marginTop: - Math.min(theta2 * 173 * 3 - phase * 173 * 2, 275 / 1.43 / height_fix),
                transform: 'rotate(' + Math.min(theta * 0, 120) + 'deg)' 
            });
        }
    
        });


    
    <script>
        $(window).scroll(function() {
            if (($(window).scrollTop() / window.innerHeight) == 1) {
                    $( ".tribar-head" ).addClass( "roll-animation" ),
                    $( ".tribar-text" ).addClass( "fade-in" ),
                    $( ".box-text" ).addClass( "fade-in" );
                
                    $( ".tribar-head" ).removeClass("rollout-animation" ),
                    $( ".tribar-text" ).removeClass( "fade-out" ),
                    $( ".box-text" ).removeClass( "fade-out" ),
                
                    $( ".cabana-libre" ).addClass( "fade-out" ),
                    $( ".cabana-libre" ).removeClass( "fade-in" );
                }
            else {
                    $( ".tribar-head" ).removeClass("roll-animation" ),
                    $( ".tribar-text" ).removeClass( "fade-in" ),
                    $( ".box-text" ).removeClass( "fade-in" ),
                        
                        
                    $( ".cabana-libre" ).addClass( "fade-in" ),
                    $( ".cabana-libre" ).removeClass( "fade-out" );
                        
            }
            
            document.getElementById("demo").innerHTML = $(window).scrollTop() + "   ;   " + window.innerHeight +  "   ;   " +  $(window).scrollTop() / window.innerHeight ;
        });

    </script>
    
    <script>
    
        $( ".tribar" ).hover(
          function() {
              $( ".z-0" ).addClass( "tribar-hover" );
          }
        );
        
    </script>
     

    
    <script>
        (function($) {
          var selector = ".section";

          var $slides = $(selector);

          var currentSlide = 0;
          var isAnimating = false;

          var stopAnimation = function() {
            setTimeout(function() {
              isAnimating = false;
            }, 300);
          };

          var bottomIsReached = function($elem) {
            var rect = $elem[0].getBoundingClientRect();
            return rect.bottom <= $(window).height();
          };

          var topIsReached = function($elem) {
            var rect = $elem[0].getBoundingClientRect();
            return rect.top >= 0;
          };

          document.addEventListener(
            "wheel",
            function(event) {
              var $currentSlide = $($slides[currentSlide]);

              if (isAnimating) {
                event.preventDefault();
                return;
              }

              var direction = -event.deltaY;

              if (direction < 0) {
                // next
                if (currentSlide + 1 >= $slides.length) return;
                if (!bottomIsReached($currentSlide)) return;
                event.preventDefault();
                currentSlide++;
                var $slide = $($slides[currentSlide]);
                var offsetTop = $slide.offset().top;
                isAnimating = true;
                $("html, body").animate(
                  {
                    scrollTop: offsetTop
                  },
                  1000,
                  stopAnimation
                );
              } else {
                // back
                if (currentSlide - 1 < 0) return;
                if (!topIsReached($currentSlide)) return;
                event.preventDefault();
                currentSlide--;
                var $slide = $($slides[currentSlide]);
                var offsetTop = $slide.offset().top;
                isAnimating = true;
                $("html, body").animate(
                  {
                    scrollTop: offsetTop
                  },
                  1000,
                  stopAnimation
                );
              }
            },
            { passive: false }
          );
        })(jQuery);

    </script>