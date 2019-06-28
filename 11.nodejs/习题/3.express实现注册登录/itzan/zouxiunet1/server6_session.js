// session 干嘛的?
// 用于服务器端 的页面之间传递数据
//它是与cookie一起使用

const express = require("express");
const cookieSession = require("cookie-session");

let server = express();
server.listen(8080);

//1引入中间件
server.use(cookieSession({
    name: "useker.cn",
    keys: ["a", "b", "c"],
    maxAge: 20 * 60 * 1000
}))

// 使用session实现是否登录了

//别人访问 /login的时候,往session里面存储值
server.get("/login", function (request, response, next) {

    request.session["userinfo"] = true;
    response.end("login");
})

//别人访问 /registere的时候,从session取值;
server.get("/register", function (request, response, next) {

    console.log(request.session["userinfo"]);
    response.end("register");
})
// 因为seesion和cookie是密切相关,很多人 是伪造 cookie从实现 ,免登录

// jwt 来解决这个技术 签名+加密