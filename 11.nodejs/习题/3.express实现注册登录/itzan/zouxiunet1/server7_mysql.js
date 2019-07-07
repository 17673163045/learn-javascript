const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");

let server = express();
server.listen(8080);


//中间件
server.use(bodyParser.urlencoded({
    limit: "500mb", //post只能传输500m
    extended: false //关闭扩展模式
}))


//api 
server.post("/login", function (request, response, next) {

    // request.body; ---> {"uname":"abc123","upwd":"123"}



    //mysql 
    //1.创建连接
    let conn = mysql.createConnection({
        user: "root",
        password: "",
        database: "cs1902_2",
        host: "127.0.0.1",
        port: 3306
    })
    //2.连接 
    conn.connect()
    //3.准备sql语句
    var sql = "SELECT*FROM userinfo WHERE u_name=? AND u_pwd =?"; //准备的sql语句

    var params = [request.body.uname, request.body.upwd]; //准备的参数
    //4.执行 
    //5.得到结果
    conn.query(sql, params, function (err, results, fields) {
        if (err) {
            console.log("操作数据库失败", err.message);
            return;
        }
        if (results.length == 0) {
            response.json({
                "msg": "登录失败",
                "status": -1
            });
            return;
        }
        var data = JSON.parse(JSON.stringify(results[0])) //  对象的克隆
        response.json({
            "msg": "登录成功",
            "status": 1,
            data
        });

    })








})