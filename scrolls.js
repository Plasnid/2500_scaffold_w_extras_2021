let navOffset = $("nav").innerHeight();

$(document).ready(function(e){
    $("body,html").animate({scrollTop:0},100, "easeInOutQuad");
    $("nav>a:nth-child(1)").addClass("active");
});

$("nav a[href^='#']").click(function(e){
    e.preventDefault();
    let idPosNav = $($(this).attr("href")).offset().top - navOffset;
    $("body,html").animate({scrollTop:idPosNav}, 1000, "easeInOutQuad");
});

$(window).scroll(function(){
    // * find the position of the content just under the nav
    let topContentArea = $(window).scrollTop()+navOffset+20;
    console.log(topContentArea);
    
    //*loop through each section to see which one is visible in the viewport
    $("section").each(function(){
        // *find the position of the section
        let secTopPos = $(this).offset().top;
        let secBottomPos = $(this).offset().top+$(this).innerHeight();
        let secID = $(this).attr("id");
        console.log(`Section ${secID} -> top: ${secTopPos} bottom: ${secBottomPos}`);
        // *check what section is currently visible in the viewport
        if(topContentArea>=secTopPos && topContentArea<=secBottomPos){
            $(`nav a[href='#${secID}']`).addClass("active");
        }else{
            $(`nav a[href='#${secID}']`).removeClass("active");
        } 
    });
    
    //* animating content into the screen
    $(".revealElement").each(function(){
        // * find the bottom of the object
        let bottomOfObject = $(this).offset().top + $(this).innerHeight();
        // * find where the bottom of the window is
        let bottomOfWindow = topContentArea + $(window).height();
        // * if the item is visible in the window, animate it in
        if(bottomOfObject<bottomOfWindow){
            $(this).animate({opacity:1, marginLeft:0}, 3000, "easeOutElastic");
        }
    });
});

// * animating in the intro page
$("#intro h1").delay(500).animate(
    {opacity:1, marginLeft:0},
    1000,
    "linear"
);

$("#intro p").delay(1500).animate(
    {opacity:1, marginLeft:0},
    1000,
    "easeOutBounce"
);