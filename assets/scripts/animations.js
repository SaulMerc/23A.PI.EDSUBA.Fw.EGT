let typedBackspace = new Typed(".txt_typed",{
    strings: ['EDSUBA EGT '],
    typeSpeed: 200,
    smartBackspace: true,
    cursorChar: ' < />',
    startDelay: 1000,
    backDelay: 10000,
    loop: true
});

/**
 * Subida al cielo
 */
$(document).ready(function(){
    const arriba = document.querySelector('#go-up');
        
    
            $('#ir_Arriba').click(function(){
            $('body, html').animate({
                scrollTop: '0px'
            }, 300);
        });
    
        $(window).scroll(function(){
            if( $(this).scrollTop() > 0 ){
                $('#ir_Arriba').slideDown(300);
            } else {
                $('#ir_Arriba').slideUp(300);
            }
        });
    
    });
