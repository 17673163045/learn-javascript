const express = require("express");
var app = express(); // 实例化express对象.
// 没有挂载路径的中间件，应用中的每个请求都会执行该中间件
app.use((req, res, next) => {
    console.log('Time');
    next(); // 传递request对象给下一个中间件
})

// 挂载至/user/:id的中间件，任何执行/user/:id的请求都会执行它
app.get('/user/:id', (req, res, next) => {
    console.log(1111);
    next();
    res.end();
})

// 路由和句柄函数（中间件系统），处理指向/user/:id的GET请求
app.get('/user/:id', (req, res, next) => {
    console.log('USER');
    res.end();
})
app.listen(8080);