//实现nodejs登录
//获得post请求的uname和upwd,是通过事件驱动去获得的
//
//
const http = require("http");
const qs = require("querystring");
const fs = require("fs");
http.createServer(function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(200, {
        "Content-Type": "application/json;charset:utf-8"
    })
    if (req.url == "/favicon.ico") return;
    if (req.url == "/login") {
        //如果是登录页面,那么获得post请求的数据
        var str = "";
        req.on("data", function (chunk) {
            str += chunk;
        })
        req.on("end", function () {
            //将post数据转化为对象
            let urldata = qs.parse(str);
            let userdata = fs.readFileSync("./data/userlist.json", {
                encoding: "utf8",
                flag: "r"
            });
            let userarr = JSON.parse(userdata) || [];
            var flag = userarr.some(function (el, index) {
                return el.uname == urldata.uname && el.upwd == urldata.upwd;
            })
            if (flag) {
                res.write(JSON.stringify({
                    "msg": "登录成功",
                    "status": 1
                }))
                res.end();
            } else {
                res.write(JSON.stringify({
                    "msg": "登录失败",
                    "status": -1
                }))
                res.end();
            }
        })
    }
}).listen(9090, function () {
    console.log("服务启动")
});