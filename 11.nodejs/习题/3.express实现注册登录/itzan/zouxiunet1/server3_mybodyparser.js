const express = require("express");
//引入自己的中间件
const mybodyparser = require("./lib/mybodyParser")
let server = express();

server.listen(8080);

server.use(mybodyparser.urlencoded())

server.post("/login", function (request, response, next) {
    console.log(request.mybody)
    response.end("abc");
})