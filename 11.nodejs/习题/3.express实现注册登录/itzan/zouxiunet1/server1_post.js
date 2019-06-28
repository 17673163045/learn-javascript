const http = require("http");

http.createServer((request, response) => {
    var str = "";
    request.on("data", (data) => {
        str += data;
    })
    request.on("end", () => {
        console.log(str);
    })
    response.end();
}).listen(8080);