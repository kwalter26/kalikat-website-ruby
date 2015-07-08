// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require_tree .
//= require jquery
//= require jquery_ujs





function getPosition(element) {
    var xPosition = 0;
    var yPosition = 0;

    while(element) {
        xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
    }
    return { x: xPosition, y: yPosition };
}

$(document).ready(function(){

    $('.article-section').height($(window).height());

    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        console.log(scroll);
    });

    /*$(function(){

        var x = $("#sidebar").position();
        alert("Top: " + x.top + " Left: " + x.left);
        $(window).scroll(function(event){
            var scroll = $(this).scrollTop();
            if(scroll < 320){
                $('#sidebar').css('position','relative');
            }
            else{
                $('#sidebar').css('position','fixed');
                $('#sidebar').css('top','320px');
            }
        });
    });*/
});


