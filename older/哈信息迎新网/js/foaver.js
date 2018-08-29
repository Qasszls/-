
$(function() {
    $(window).scroll(function () {
        var top = $(this).scrollTop();//获取滚动条高度
        if (top >= 0) {
            $("footer").css("bottom",-top);
        }
    })
})