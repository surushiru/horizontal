window.onload = function () {
    function mobile() {
        try {
            document.createEvent("TouchEvent");
            return true;
        } catch (e) {
            return false;
        }
    }
    let landscapeCount = 0;

    function updateLandscapeCount() {
        landscapeCount++;
        document.getElementById('landscapeCount').textContent = landscapeCount;
    }

    if (!mobile()) {
          document.body.innerHTML = "スマホをご利用ください";
    } 
    function checkOrientation() {
            const textElement = document.querySelector('.text');
            const imgElement = document.querySelector('.img');

            if (window.orientation === 0 || window.orientation === 180) {
                textElement.textContent = "画面を横向きにしてください";
               
            } else if (window.orientation === 90) {
                textElement.textContent = "画面を縦向きにしてください";
                imgElement.classList.add('b');
                setTimeout(function () {
                    imgElement.classList.remove('b');
                }, 1000);
                 updateLandscapeCount()
            } else if (window.orientation === -90) {
                textElement.textContent = "画面を縦向きにしてください";
                updateLandscapeCount()
                imgElement.classList.add('a');
                setTimeout(function () {
                    imgElement.classList.remove('a');
                }, 1000);
            }
        }

        // 初始檢查
        checkOrientation();

        // 偵測方向改變
        window.addEventListener('orientationchange', function () {
            checkOrientation();
        });
};
