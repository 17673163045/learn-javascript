var initBanner = (function () {
    var bannerShow = $(".banner"),
        width = bannerShow.width(),
        bannerHide = $(".bannerhide"),
        leftbtn = $(".left"),
        rightbtn = $(".right"),
        circle = $(".circle li"),
        index = 0;
    console.log(leftbtn);

    function leftclick() {
        if (index == 0) {
            index = 6;
            bannerHide.css("left", -index * width);
        }
        index--;
        var animateObj = {
            left: -index * width
        }
        bannerHide.stop().animate(animateObj);
    }

    function rightclick() {
        console.log(111)
        if (index == 6) {
            index = 0;
            bannerHide.css("left", 0);
        }
        index++;
        var animateObj = {
            left: -index * width
        }
        bannerHide.stop().animate(animateObj);
    }

    return function () {
        leftbtn[0].onclick = leftclick;
        rightbtn[0].onclick = rightclick;
    }
})()
initBanner();