$(document).ready(function(){
    $('.media__button').click(function(){
        $(this).toggleClass('opened').toggleClass('closed').parent().children('.hidden').slideToggle().css('display','flex');
        if($(this).hasClass('opened')) {
            $(this).html('Hide');
        }
        else {
            $(this).html('More article');
        }
        return false;

       });
    });