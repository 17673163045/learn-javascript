//静态资源服务器
// 把已经写好的 页面方法到node里面
// 让别人访问某一个路径的时候,把对应页面返回出
const http = require("http");
const fs = require('fs');
const app = http.createServer((request, response) => {
  // http:xxx:8080/abc
    // request.url
    if (request.url == "/favicon.ico") {
        return;
    }

    //路由思想 ,没有路由设计模式
    // 模式 工厂模式,观察者模式,订阅模式,单例模式
    //虚拟路径
    fs.readFile("./public/" + request.url, function (err, data) {
        if (err) {
            return;
        }
        response.write(data.toString());
        response.end();
    })
})

app.listen(8080,function(){
    console.log("服务启动")
})