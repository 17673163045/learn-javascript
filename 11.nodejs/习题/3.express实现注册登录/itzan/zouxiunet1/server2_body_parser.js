const express = require("express");
//1引入中间件
const bodyparser = require("body-parser");
const server = express();
server.listen(8080);
//往外暴露静态资源
server.use(express.static("./public"));
//让中间件与express建立关系
//bodyparser有 urlencoded,json,text,raw
server.use(bodyparser.urlencoded()); //支持表单模式

server.post("/login", function (request, response, next) {
    response.setHeader("content-type", "text/html;charset=utf-8");
    console.log(request.body)
    response.end("你好");
})