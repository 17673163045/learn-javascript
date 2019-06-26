//实现nodejs登录
//获得post请求的uname和upwd,是通过事件驱动去获得的
//
//
const http = require("http");
const qs = require("querystring");
const fs = require("fs");
http.createServer(function(req,res){
    res.setHeader("Access-Control-Allow-Origin","*");
    res.writeHead(200,{
        "Content-Type":"application/json;charset:utf-8"
    })
    console.log(req.url);
})