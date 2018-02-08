<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width = device-width, initial-scale=1,user-scalable=no">
    <title>index</title>
    <link rel="stylesheet" href="/Public/Home/css/index.css">
</head>
<body>
<!--头部内容-->
<header>
    <div class="title">
        <div class="position">
            <!-- 暂无 港澳台 如需要可在city.json文件中添加-->
            <select id="province" name="province">
                <option id="choosePro" value="-1">请选择位置</option>
            </select>
        </div>
        <div class="search">
            <input type="text" placeholder="请输入网吧名称"><span><img src="/Public/Home/images/search.png"></span>
        </div>
    </div>
</header>
<!--中部内容-->
<main>
    <!--巨幕-->
    <div class="jumbotron">
        <img src="/Public/Home/images/jumbotron_bg.png">
    </div>
    <!--中部滚动内容-->
    <div class="main_title">
        <div class="title_active"><a href="javascript:;">离我最近</a></div>
        <div><a href="javascript:;">星级推荐</a></div>
        <div><a href="javascript:;">我已关注</a></div>
    </div>
    <div class="main_content">
        <?php if(is_array($bar)): foreach($bar as $key=>$bar_info): ?><a href="internetBarIntroduction.html">
            <div class="content_module">
                <div class="module_left">
                    <!--头像固定大小60*60px-->
                    <!--头像默认头像head_img.png-->
                    <img src="/Public/Home/images/head_img.png">
                </div>
                <div class="module_right">
                    <span class="module_right_title"><?php echo ($bar_info["bar_name"]); ?></span>
                    <div class="module_right_comment">
                        <?php if($bar_info["bar_star"] == 0): ?><img src="/Public/Home/images/stare_white.png">
                            <img src="/Public/Home/images/stare_white.png">
                            <img src="/Public/Home/images/stare_white.png">
                            <img src="/Public/Home/images/stare_white.png">
                            <img src="/Public/Home/images/stare_white.png">
                            <?php elseif($bar_info["bar_star"] == 1): ?>
                            <img src="/Public/Home/images/stare.png">
                            <img src="/Public/Home/images/stare_white.png">
                            <img src="/Public/Home/images/stare_white.png">
                            <img src="/Public/Home/images/stare_white.png">
                            <img src="/Public/Home/images/stare_white.png"><?php endif; ?>
                        <img src="/Public/Home/images/stare.png">
                        <img src="/Public/Home/images/stare.png">
                        <img src="/Public/Home/images/stare.png">
                        <img src="/Public/Home/images/stare_white.png">
                        <img src="/Public/Home/images/stare_white.png">
                        <em><?php echo ($bar_info["bar_star"]); ?></em>
                        <span>&lt;<em>285</em>m</span>
                    </div>
                    <div class="module_right_label">
                        <span>英雄联盟特权</span><span>QQ网吧</span><span>WIFI</span>
                    </div>
                    <div class="module_right_introduce">
                        <span>会员上网<em>3</em>元</span><span>临时卡上网<em>3</em>元</span>
                    </div>
                </div>
            </div>
        </a><?php endforeach; endif; ?>
    </div>
</main>
<!--底部内容-->
<footer>
    <div><a class="activeFooterBtn" href="javascript:;"><img src="/Public/Home/images/index_yellow.png">首页</a></div>
    <div><a href="../closeinternetbar/closeinternetbar.html"><img src="/Public/Home/images/reservation.png">订座</a></div>
    <div><a href="../my/my.html"><img src="/Public/Home/images/myself.png">我的</a></div>
</footer>
</body>
<script src="/Public/Home/js/jquery.min.js"></script>
<script src="/Public/Home/js/city_China.js"></script>

<script src="/Public/Home/js/index.js"></script>
<script>
    $('.main_title').on('click','a',function (e) {
        var target = e.target;
        $(target).parent().addClass('title_active').siblings().removeClass('title_active');
    });
</script>
</html>