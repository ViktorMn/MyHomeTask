
    $(document).ready(function() {
        $( '.dropdown' ).hover(
            function(){
                $(this).children('.sub-menu').stop(true,false).slideDown(400);
           
            },
            function(){
                $(this).children('.sub-menu').stop(true,false).slideUp(400);
               
            }
        );
        
         $( 'nav ul li' ).hover(
            function(){
                
                $('.sub-menu').animate({backgroundColor:"#E14B4B",}, 800 );
                
            },
            function(){
              
                $('.sub-menu').animate({backgroundColor:"#E14B4B",}, 800 );
            }
        );
        
        
        
        
    }); // end ready
