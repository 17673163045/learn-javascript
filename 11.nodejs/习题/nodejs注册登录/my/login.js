const http = require('http'); // 引入http模块
var server = new http.Server(); //创建一个服务器实例化对象
//利用http的request事件创建服务器:
server.on("request",function(req,res){
    //req,res是request事件的两个参数,表示请求头和响应头;注意req是request的缩写,和request事件的区别是一个是事件,一个是事件的参数.
    //设置响应头信息格式
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    //设置响应头的跨域
    // res.setHeader("Access-Control-Allow-Origin","*");
    //设置输出内容,可以是html
    res.write("hello world<br>");
    //结束请求,必须写,否则浏览器端一直在请求
    res.end("结束请求");
})
server.listen(8080); // 服务器的listen方法,监听端口
server.on("connection",function(){
    console.log("服务器TCP建立连接")
})
server.on("close",function(){
    console.log("关闭服务器")
})