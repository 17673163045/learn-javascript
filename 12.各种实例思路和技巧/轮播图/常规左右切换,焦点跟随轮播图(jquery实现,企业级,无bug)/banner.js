$(function () {
    var bannershow = $(".banner"), //展示部分
        width = bannershow.width(), //展示部分宽度
        bannerhide = $(".bannerhide"), //隐藏部分
        leftbtn = $(".left"), //左边点击按钮
        rightbtn = $(".right"), //右边点击按钮
        circle = $(".circle li"); // 小圆点
    var index = 0; //记录图片的索引位置,初始为0,即初始展示第一张
    //点击左边按钮,
    leftbtn.on("click", function () {
        if (index == 0) {
            index = 6;
            bannerhide.css("left", -index * width);
        }
        index--;
        bannerhide.stop().animate({
            left: -index * width
        });
        if (index == 0) {
            circle.eq(0).addClass("now").siblings().removeClass("now");
        } else {
            circle.eq(index).addClass("now").siblings().removeClass("now")
        }
    })
    rightbtn.on("click", function () {
        if (index == 6) {
            index = 0;
            bannerhide.css("left", 0);
            circle.eq(index).addClass("now").siblings().removeClass("now")
        }
        index++;
        if (index == 6) {
            circle.eq(0).addClass("now").siblings().removeClass("now")
        } else {
            circle.eq(index).addClass("now").siblings().removeClass("now")
        }
        bannerhide.stop().animate({
            left: -index * width
        });
    })
    // 自动轮播
    var timer = setInterval(function () {
        rightbtn.click();
    }, 2000)

    //鼠标移入停止轮播
    bannershow.on("mouseenter", function () {
        clearInterval(timer)
    })
    //鼠标移出开始轮播
    bannershow.on("mouseleave", function () {
        timer = setInterval(function () {
            rightbtn.click();
        }, 2000)
    })
    //点击小圆点轮播
    circle.on("click", function () {
        $(this).addClass("now").siblings().removeClass("now")
        index = $(this).index();
        bannerhide.stop().animate({
            left: -index * width
        })
    })




})