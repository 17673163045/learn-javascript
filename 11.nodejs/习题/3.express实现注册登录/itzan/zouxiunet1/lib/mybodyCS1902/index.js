// console.log(arguments)
// console.log(arguments.callee)

const qs = require("querystring");

module.exports = {
    urlencoded: function () {

        return function (request, response, next) {
            //中间件的作用,就是 对request或者response的处理,加强
            var str = "";
            request.on("data", function (data) {
                str += data;
            })
            request.on("end", function () {
                request.mybody = qs.parse(str);
                next(); //调用一下next
            })
        }

    }
}