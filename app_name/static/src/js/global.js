// Global Styles
// require("../less/global.less");
import $ from 'jquery';

function has_children()
{
    if($(window).outerWidth()<=650)
    {
        $('.has-children span.toggle').on('click',function(e) {
            e.preventDefault();
            $(this).parent().parent().parent().toggleClass('open');
        });
    }
    else
    {
        $('.has-children span.toggle').off('click');
    }
}

$(document).ready(function() {

    $('.js-menu-trigger').on('click', function(){
        $(this).toggleClass('open');
        $('body').toggleClass('open');
        $('ul.nav').toggleClass('open');
    });

    has_children();

    $('.has-children').hover(function(e) {
        if(!$('.nav').hasClass('open')){
            $(this).toggleClass('open');
        }
    });

});

$(document).load(function() {

});

$(window).resize(function() {

    $('.js-menu-trigger, .nav, .has-children').removeClass('open');

    has_children();

});
