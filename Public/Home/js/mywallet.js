
$(document).ready(function(){
    $(".LTT_ka_ul li").click(function(){
        $(".LTT_ka_ul li").eq($(this).index()).addClass("on").siblings().removeClass("on");
        $(".LTT_ka_xia").hide().eq($(this).index()).show();
    })
})