$(function () {

    /*页面跳转*/
   var $footer = $('footer');
   $footer.on('click','a',function (e) {
       // e.stopPropagation();
       console.log(this);
       if(this.classList.contains('footerBtn1')){
           // ../InternetBar/index.html
           // ../closeinternetbar/closeinternetbar.html
           // ../my/my.html
           window.location.href='../InternetBar/index.html';
       }else if(this.classList.contains('footerBtn2')){
           // ../my/my.html
           window.location.href='../closeinternetbar/closeinternetbar.html';
       }else {

       }
   })

});