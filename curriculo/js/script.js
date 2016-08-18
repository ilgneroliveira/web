$(window).scroll(function(){
    if ($(window).scrollTop() >= 50){
        $('#topo2').addClass('menuActive').slideDown('slow').removeClass('menuNone');
    }
    else{
        $('#topo2').removeClass('menuActive').addClass('menuNone').fadeOut(500);
    }
});
