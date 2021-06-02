let navOffset = $("nav").innerHeight();

$(document).ready(function(e){
    $("body,html").animate({scrollTop:0},100, "easeInOutQuad");
});

$("nav a[href^='#']").click(function(e){
    e.preventDefault();
    let idPosNav = $($(this).attr("href")).offset().top - navOffset;
    $("body,html").animate({scrollTop:idPosNav}, 1000, "easeInOutQuad");
});