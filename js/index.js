$(document).ready(function() {
    function checkOrientation() {
        if (window.orientation === 0 || window.orientation === 180) {

        } else if (window.orientation === 90) {
            $(".img").addClass("a");
            setTimeout(function() {
                $(".img").removeClass("a");
            }, 1000);
        } else if (window.orientation === -90) {
            $(".img").addClass("b");
            setTimeout(function() {
                $(".img").removeClass("b");
            }, 1000);
        }
    }

    // 初始檢查
    checkOrientation();

    // 偵測方向改變
    $(window).on("orientationchange", function() {
        checkOrientation();
    });
});

