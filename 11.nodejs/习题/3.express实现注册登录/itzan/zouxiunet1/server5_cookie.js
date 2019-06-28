// cookie
// cookie能做什么事?
// 1.用于浏览器的简单存储 4k
// 2.因为http协议在请求的时候,会自动携带cookie到服务器端

//cookie express 直接发送到浏览器,但是不能接受到浏览器发送过来的cookie
// 只能出,不能进!

const express = require("express");
const cookieParase = require("cookie-parser");
const server = express();
server.listen(8080);
//引入中间件
server.use(cookieParase())


server.get("*", function (request, response, next) {
    console.log("11111");
    // response.end("1111");
    next()
})

// 这个login 做了一件 往浏览器发送cookie的操作
server.get("/login", function (request, response, next) {
    // response.cookie   设置cookie
    response.cookie("abc", "123456", {
        maxAge: 20 * 1000 * 60
    });
    // response.clearCookie

    response.end();
})


//当我访问 这个register路径的时候,能够得到 当初  /login 给浏览器发送过去数据
server.get("/register", function (request, response, next) {
    console.log(request.cookies.abc)
    response.end();
})