$(document).ready(function() {
    function checkOrientation() {
        if (window.orientation === 0 || window.orientation === 180) {
            // 縱向
            // $("body").css("background-color", "white");
            // $("#orientation").text("Portrait (縱向)");
        } else if (window.orientation === 90) {
            // 橫向左
            // $("body").css("background-color", "lightgray");
            // $("#orientation").text("Landscape Left (橫向左)");
            $(".img").addClass("a");
            setTimeout(function() {
                $(".img").removeClass("a");
            }, 1000);
        } else if (window.orientation === -90) {
            // 橫向右
            // $("body").css("background-color", "lightblue");
            // $("#orientation").text("Landscape Right (橫向右)");
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

