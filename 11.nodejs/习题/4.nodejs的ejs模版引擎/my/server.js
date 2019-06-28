// npm init -y;创建packjson包
const express = require("express"); //引入模块erpress
const app = express(); //创建express实例化对象app
const ejs = require("ejs"); // 引入ejs模版引擎
app.listen(8080, console.log("服务启动"))
var data = [{
    url: "http://www.baidu.com",
    name: "百度"
}, {
    url: "http://www.sina.com",
    name: "新浪"
}, {
    url: "http://www.goole.com",
    name: "谷歌"
}, {
    url: "http://www.qq.com",
    name: "腾讯"
}]

app.get("/index",(req,res,next)=>{
    //模版引擎渲染页面
    ejs.renderFile("./index.html",{data},function(error,data){
        res.send(data);
    })
})