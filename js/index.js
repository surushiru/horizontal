$(document).ready(function() {
    function checkOrientation() {
        if (window.orientation === 0 || window.orientation === 180) {
            // 縱向
            $("body").css("background-color", "white");
            $("#orientation").text("Portrait (縱向)");
        } else if (window.orientation === 90) {
            // 橫向左
            $("body").css("background-color", "lightgray");
            $("#orientation").text("Landscape Left (橫向左)");
        } else if (window.orientation === -90) {
            // 橫向右
            $("body").css("background-color", "lightblue");
            $("#orientation").text("Landscape Right (橫向右)");
        }
    }

    // 初始檢查
    checkOrientation();

    // 偵測方向改變
    $(window).on("orientationchange", function() {
        checkOrientation();
    });
});