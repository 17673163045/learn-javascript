//知识点1
//所谓 的模块化,就是一个无形函数.
//该形参有4个参数
// {},
// require 
// modules {exports,parent}
// __dirname
// __filename


//知识点2
//暴露方式 
//module.exports 可以保留多个
//exports 不能暴露一个对象出去 

 function show(num1,num2){
    return num1+num2
 }

//exports.show=show;
 module.exports={show}