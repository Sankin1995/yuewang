
$content = $(".content");
$footer = $(".footer");
$modal_box = $(".modal_box");   //modal_box  获取所有的模态对话框的内容

function setContentPositionBottom() {
    $content.css("bottom", $footer.height());
}
function setModalDialogBoxMarginTop() {
    $modal_box.css("margin-top",($(window).height()-$modal_box.height())/2 - 20 + "px");
}
/*动态设置内容的定位的底部距离*/
setContentPositionBottom();
/*动态设置模态对话框的位置竖直方向居中-margin-top的值*/
setModalDialogBoxMarginTop();
$(window).resize(function () {
    /*动态设置内容的定位的底部距离*/
    setContentPositionBottom();
    /*动态设置模态对话框的位置竖直方向居中-margin-top的值*/
    setModalDialogBoxMarginTop();
});

