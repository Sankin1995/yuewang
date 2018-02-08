
var wait=60;
function time(o) {
    if (wait == 0) {
        o.removeAttribute("disabled");
        o.value="免费获取验证码";
        o.css("color","red");
        wait = 60;
    } else {
        o.setAttribute("disabled", true);
        o.value=wait+"秒后可以重新发送";
        wait--;
        setTimeout(function() {
                time(o)
            },
            1000)
    }
}
document.getElementById("btn").onclick=function(){time(this);}