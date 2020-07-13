$(document).ready(function(){
    $('.button_main').on('click', function(){
        $('.overlay').fadeIn('slow');
    })
    $('.overlay__close').on('click', function(){
        $('.overlay').fadeOut('slow');
    })

});