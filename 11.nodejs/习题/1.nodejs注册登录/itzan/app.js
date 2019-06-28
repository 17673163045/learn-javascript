//实现登录
// http://xxx/login

//注册
//http: //xxx/register

const http = require("http");
const qs = require("querystring");
const fs = require("fs");
http.createServer((request, response) => {
    //后台设置 CORS
    // response.setHeader("Access-Control-Allow-Origin", "*");
    response.writeHead(200, {
        "Content-Type": "application/json;charset=utf-8"
    });

    //废物icon
    if (request.url == "/favicon.ico") return;
    // 路由的机制 最初原型;
        //获取前端传递过来的参数? post
        serverLogin(request, response)

        //1.等到前端post传递过来的参数
        // var strPrams = "";
        // request.on("data", (data) => {
        //     strPrams += data;
        // })
        // request.on("end", function () {
        //     //把得到的参数转成一个对象;
        //     let params = qs.parse(strPrams);
        //     //2.得到本地文件里的所有用户
        //     var userStr = fs.readFileSync("./data/userlist.txt", {
        //         encoding: "utf8"
        //     });
        //     //3.拿所有的用户与当前的信息,进行比较
        //     var userArr = JSON.parse(userStr);
        //     // 如果有相同,提示人家 已经注册过了
        //     var isexits = userArr.some((el, index) => {
        //         return el.uname == params.uname
        //     })
        //     //如果没有相同,就把当前的 传递过来的信息保存到本地 文件里面
        //     if (isexits) {
        //         response.write(JSON.stringify({
        //             "msg": "已注册",
        //             "status": -1
        //         }))
        //         response.end("已注册");
        //     } else {
        //         userArr.push(params);
        //         //把对象写进 文件里面
        //         var statsu = fs.writeFileSync("./data/userlist.txt", JSON.stringify(userArr));
        //         //undefined 代表注册成功,undefined 是false;
        //         if (statsu) {
        //             response.write(JSON.stringify({
        //                 "msg": "注册失败",
        //                 "status": -1
        //             }))
        //             response.end("失败");
        //         } else {
        //             response.write(JSON.stringify({
        //                 "msg": "注册成功",
        //                 "status": 1
        //             }))
        //             response.end();
        //         }
        //         response.end();

        //     }
        // })



}).listen(8080, () => {
    console.log("服务启动完毕!");
});



function serverLogin(request, response) {
    var str = "";
    request.on("data", function (data) {
        str += data;
    })
    request.on("end", function () {
        let params = qs.parse(str); //页面post传递过过来的参数;
        let userStr = fs.readFileSync("./data/userlist.txt", {
            encoding: "utf8",
            flag: "r"
        })
        let userArr = JSON.parse(userStr || '[]');
         console.log(userArr)

        //遍历与 用户名和密码比较,如果找到了返回true;

        var result = userArr.some((el, index) => {
            return el.uname == params.uname && el.upwd == params.upwd
        })


        if (result == true) {
            response.write(JSON.stringify({
                "msg": "登录成功",
                "status": 1
            }));
        } else {
            response.write(JSON.stringify({
                "msg": "登录失败",
                "status": -1
            }));
        }
        response.end();
    })
}