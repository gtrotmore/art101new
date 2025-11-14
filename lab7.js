$(".nice-block span").click(function () {

    $(this).parent().toggleClass("more");

    if ($(this).html() == "more") {
        $(this).html("less");
    } else {
        $(this).html("more");
    }

});

// Hover effect - grows on hover
$(".hover-box").hover(
    function() {
        $(this).animate({
            width: "180px",
            height: "180px"
        }, 200);
    },
    function() {
        $(this).animate({
            width: "150px",
            height: "150px"
        }, 200);
    }
);

// Click to fade out another element
$(".click-box").click(function() {
    $(".fade-target").fadeToggle(500);
    if ($(".fade-target").is(":visible")) {
        $(this).text("Click to Hide →");
    } else {
        $(this).text("Click to Show →");
    }
});

// Click to change colors randomly
$(".color-change-box").click(function() {
    const colors = ['#f093fb', '#4facfe', '#43e97b', '#fa709a', '#ff6b6b', '#feca57'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    $(this).css('background', randomColor);
});

// Click to slide element
let slidePosition = 0;
$(".slide-box").click(function() {
    slidePosition = slidePosition === 0 ? 200 : 0;
    $(this).animate({
        left: slidePosition + "px"
    }, 400);
});