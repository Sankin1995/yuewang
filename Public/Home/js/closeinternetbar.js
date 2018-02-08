
$(document).ready(function () {
    $(".LTT_price_li").click(function () {
        $(".LTT_price_li").eq($(this).index()).addClass("on").siblings().removeClass("on");
        $(this).children(".LTT_price").show().parent().siblings().children(".LTT_price").hide();
    })
})