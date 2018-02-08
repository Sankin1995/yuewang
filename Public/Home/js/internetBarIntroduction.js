/*获取节点变量*/
$carousel = $('.carousel');


/*动态设置main 中间内容的定位top的值*/
setTimeout(function () {
    $("main").css("top", $("header").height() + "px");
},200);


/*carousel 旋转木马 轮播图动画效果*/
var startX, startY, moveEndX, moveEndY, X, Y;
$carousel.on("touchstart", function (e) {
    e.preventDefault();
    startX = event.touches[0].pageX;
});
$carousel.on('touchmove', function (e) {
    e.preventDefault();
    X = event.touches[0].pageX;
    moveEndX = X - startX;
    var $carousel_ul = $('.carousel ul');
    if (moveEndX > 0) {
        console.log("1");
        var margin_left = parseInt($carousel_ul.css('margin-left').substring(0, $carousel_ul.css('margin-left').length - 2));
        console.log(margin_left);
        if (margin_left < 0) {
            $carousel_ul.css('margin-left', (margin_left + 5) + "px");
        }
    } else {
        console.log("2");
        var right_position = ($(".carousel ul li").width() + 13) * $(".carousel ul li").length;
        console.log(right_position);
        var margin_left = parseInt($carousel_ul.css('margin-left').substring(0, $carousel_ul.css('margin-left').length - 2));
        console.log(Math.abs(margin_left) + $(window).width());
        if (Math.abs(margin_left) >= 0 && Math.abs(margin_left) + $(window).width() <= right_position) {
            $carousel_ul.css('margin-left', (margin_left - 5) + "px");
        }
    }
});

