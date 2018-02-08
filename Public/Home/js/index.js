var $jumbotron = $(".jumbotron");
var $main_content = $(".main_content");
var $main_title = $(".main_title");

function get_main_content_top() {
    $main_title.css("top",$jumbotron.height() + "px");
    $main_content.css("top", $jumbotron.height() + 43 + "px");
}

/*屏幕大小变化时调用的函数*/
$(window).resize(function () {
    /*动态获取main_content定位的top值*/
    get_main_content_top();
});
/*动态获取main_content定位的top值*/
setTimeout(function () {
    get_main_content_top();
},100);