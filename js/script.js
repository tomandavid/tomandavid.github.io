
$(window).scroll(function() {
var phase = 0.2;
var theta = ($(window).scrollTop() / window.innerHeight);
var theta2 = (theta - phase) / (1 - phase);
var height_fix = 821 / window.innerHeight
    

if (theta < phase) {
    $('#left').css({ 
        marginLeft: - theta * 100  , 
        marginTop: - theta * 173  , 
        transform: 'rotate(-' + Math.min(theta * 0 , 120) + 'deg)' 
    });
    $('#right').css({ 
        marginLeft: theta * 173 , 
        marginTop: - theta * 100 * 0 ,
        transform: 'rotate(' + Math.min(theta * 0, 120) + 'deg)' 
    });
    $('#bottom').css({ 
        marginLeft: - theta * 100, 
        marginTop:  theta * 173 ,
        transform: 'rotate(' + Math.min(theta * 0, 120) + 'deg)' 
    });
    $('#center').css({
        opacity: 1 - theta * 5,
        marginLeft: theta * 0.7,
        marginTop: - window.innerHeight * 0.07 + theta * 250 ,
        height: window.innerHeight * 0.7 - theta * 400
    });
}
else {
    $('#left').css({ 
        marginLeft: - Math.min(phase * 100 + theta2 * 100 * 4 / height_fix, 173 * 2.31 / height_fix),
        marginTop: - Math.min(phase * 173 + theta2 * 173, 470 / 2 / 1.53 / height_fix),
        transform: 'rotate(-' + Math.min(theta2 * 120 * height_fix, 120) + 'deg)' 
    });
    $('#right').css({ 
        marginLeft: Math.min(phase * 173 + theta2 * 173 * 2.3 / height_fix, 100 * 4 / height_fix), 
        marginTop: - Math.min(theta2 * 100 * 1.55/ height_fix, 470 / 2 / 1.53 / height_fix ),
        transform: 'rotate(' + Math.min(theta2 * 120 * height_fix, 120) + 'deg)' 
    });
    $('#bottom').css({ 
        marginLeft: + Math.min((theta2 * 20 - 100 * phase ) / height_fix, 0 / height_fix),
        marginTop: - Math.min((theta2 * 173 * 1.3 - 173 * phase ) / height_fix, 192 / height_fix),
        transform: 'rotate(' + Math.min(theta2 * 0, 120) + 'deg)'
    });
    
    $('#left-core').css({ 
        marginLeft: - Math.min(phase * 100 + theta2 * 100 * 4 / height_fix, 173 * 2.31 / height_fix),
        marginTop: - Math.min(phase * 173 + theta2 * 173, 470 / 2 / 1.53 / height_fix),
        transform: 'rotate(-' + Math.min(theta2 * 120 * height_fix, 120) + 'deg)' 
    });
    $('#right-core').css({ 
        marginLeft: Math.min(phase * 173 + theta2 * 173 * 2.3 / height_fix, 100 * 4 / height_fix), 
        marginTop: - Math.min(theta2 * 100 * 1.55/ height_fix, 470 / 2 / 1.53 / height_fix ),
        transform: 'rotate(' + Math.min(theta2 * 120 * height_fix, 120) + 'deg)' 
    });
    $('#bottom-core').css({ 
        marginLeft: + Math.min((theta2 * 20 - 100 * phase ) / height_fix, 0 / height_fix),
        marginTop: - Math.min((theta2 * 173 * 1.3 - 173 * phase ) / height_fix, 192 / height_fix),
        transform: 'rotate(' + Math.min(theta2 * 0, 120) + 'deg)' 
    });
    
    $('#center').css({
        opacity: 0
    });
    
    $('.navbar-element').css({
        marginLeft: window.innerHeight * 0.06 + (theta - 1) * 220 / height_fix
    });
}
});


var position = $(window).scrollTop();
$(window).scroll(function() {
    

            <!--last page-->
            if (($(window).scrollTop() / window.innerHeight) == 0) {
                document.getElementById("lastpage").innerHTML = 0;
            }
            else if (($(window).scrollTop() / window.innerHeight) == 1) {
                document.getElementById("lastpage").innerHTML = 1;
            }
            else if (($(window).scrollTop() / window.innerHeight) == 2) {
                document.getElementById("lastpage").innerHTML = 2;
            }
            else if (($(window).scrollTop() / window.innerHeight) == 3) {
                document.getElementById("lastpage").innerHTML = 3;
            }
            else if (($(window).scrollTop() / window.innerHeight) == 4) {
                document.getElementById("lastpage").innerHTML = 4;
            }

            var lastpagestr = document.getElementById("lastpage").outerHTML;

            var lastpagestr = lastpagestr.substr(lastpagestr.length - 7, 1);

            console.log(lastpagestr);
    
    
        var theta = ($(window).scrollTop() / window.innerHeight);
        var height_fix = 821 / window.innerHeight;
         
    
    if (($(window).scrollTop() / window.innerHeight) == 3) {
        $( "#navbar-element-core" ).addClass( "opacity-0" );
        
        
    }
    
   else if (($(window).scrollTop() / window.innerHeight) > 2) {
        $('.tribar').css({ 
            marginTop: - Math.min((120 + (theta - 2) * 1000) / height_fix, 9500),
        }); 
        
            if (lastpagestr == 2) {
                 $( "#navbar-element-core" ).addClass( "fade-out" );
                $( "#navbar-element-core" ).removeClass( "fade-in" );

                
                $( "#navbar-element-member" ).removeClass( "opacity-0" );
            }
            else {
                 $( "#navbar-element-core" ).addClass( "fade-in" );
                $( "#navbar-element-core" ).removeClass( "fade-out" );

               
            }
    }
    
    else if (($(window).scrollTop() / window.innerHeight) == 2) {
             
    }
    
    else if (($(window).scrollTop() / window.innerHeight) > 1) {
           
                $('.tribar').css({ 
                    marginTop: - Math.min(-122 + (theta - 1) * 900 / height_fix, 120 / height_fix ),
                });


            if (lastpagestr == 1) {
                

                
                $( ".tribar-head" ).addClass("rollout-animation" ),
                $( ".tribar-core" ).addClass("roll-core-animation" ),
                $( ".core-text" ).addClass( "fade-in" ),
                $( ".box-text" ).addClass( "fade-in" );

                $( "#left" ).addClass( "fade-out" ),
                $( "#right" ).addClass( "fade-out" ),
                $( "#bottom" ).addClass( "fade-out" );
                
                $( "#left-core" ).removeClass( "opacity-0" ),
                $( "#right-core" ).removeClass( "opacity-0" ),
                $( "#bottom-core" ).removeClass( "opacity-0" );
                
                $( "#navbar-element" ).addClass( "fade-out" );
                $( "#navbar-element" ).removeClass( "fade-in" );
                
                $( "#navbar-element-core" ).removeClass( "opacity-0" );
            }
            else {
                
                
                
                $( ".tribar-head" ).removeClass("rollout-animation" ),
                $( ".tribar-core" ).removeClass("roll-core-animation" ),
                $( ".core-text" ).removeClass( "fade-in" ),
                $( ".box-text" ).removeClass( "fade-in" );

                $( "#left" ).removeClass( "fade-out" ),
                $( "#right" ).removeClass( "fade-out" ),
                $( "#bottom" ).removeClass( "fade-out" );
                
                $( "#left-core" ).addClass( "opacity-0" ),
                $( "#right-core" ).addClass( "opacity-0" ),
                $( "#bottom-core" ).addClass( "opacity-0" );
                
                $( "#navbar-element" ).addClass( "fade-in" );
                $( "#navbar-element" ).removeClass( "fade-out" );
                
                
            }
        
            $( ".core" ).addClass( "blur" );
            $( ".cabana" ).removeClass( "blur" );
            
        
            
    }
    
    else if (($(window).scrollTop() / window.innerHeight) == 1) {
           
            
            
                
            $( ".box-text" ).addClass( "fade-in" ),
            $( ".box-text" ).removeClass( "fade-out" ),
        
            $( ".tribar-head" ).addClass( "roll-animation" ),
            $( ".tribar-head" ).removeClass("rollout-animation" ),
              
            $( ".tribar-text" ).addClass( "fade-in" ),
            $( ".tribar-text" ).removeClass( "fade-out" ),
        
            $( ".tribar-core" ).removeClass("roll-core-animation" ),

            $( ".box" ).removeClass( "fade-in-delay" );
        
            $( ".cabana" ).addClass( "blur" );
            $( ".core" ).removeClass( "blur" );
        
            $( "#navbar-element-core" ).addClass( "opacity-0" );
            
        }
    
    else if (($(window).scrollTop() / window.innerHeight) > 0) {
        

            $( ".tribar-head" ).removeClass("roll-animation" ),
            $( ".tribar-text" ).removeClass( "fade-in" ),
            $( ".box-text" ).removeClass( "fade-in" );
                            
            $( ".cabana-libre" ).addClass( "fade-out" ),
            $( ".cabana-libre" ).removeClass( "fade-in" );
        

            if (lastpagestr == 0) {
                $( ".navigation-bar" ).addClass( "fade-in" );
                $( ".navigation-bar" ).removeClass( "fade-out" );
                
                $( ".cabana-libre" ).removeClass( "fade-in" );
            }
            else if (lastpagestr == 1) {
                $( ".navigation-bar" ).removeClass( "fade-in" );
                $( ".navigation-bar" ).addClass( "fade-out" );
                
                $( ".cabana-libre" ).addClass( "fade-in" );
                $( ".cabana-libre" ).removeClass( "fade-out" );
            }
        
    }
    
    else if (($(window).scrollTop() / window.innerHeight) == 0) {
        
         $( ".navigation-bar" ).removeClass( "fade-in" );
                
    }
      
    
    
                
});











$(function() {
  $.scrollify({
    section : ".section",
  });
});



  $.scrollify({
    section : "section",
    sectionName : "section",
    interstitialSection : "navigation-bar",
    easing: "easeOutExpo",
    scrollSpeed: 1500,
    offset : 0,
    scrollbars: true,
    standardScrollElements: "",
    setHeights: true,
    overflowScroll: false,
    updateHash: true,
    touchScroll:true,
    before:function() {},
    after:function() {},
    afterResize:function() {},
    afterRender:function() {}
  });
