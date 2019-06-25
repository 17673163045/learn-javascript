





封装Ajax的 promise版本

知识点:

1,参数data是要请求的数据,

get请求数据是url请求,格式是一长串url + "?" + xxx=xxx&xxx=xxx,所以要将data对象转化为"xxx=xxx&xxx=xxx",所以send为send(null)

2.post请求数据是用send()方法请求,所以open()方法里填原始url,把要请求的数据写在send()里面

3.异步有onreadystatechange事件,同步没有这个事件,所以要对opts.async的值为true或者false进行判断为同步还是异步

思路:

1,Ajax函数的功能是向服务器发送请求(request)并获得应答文本(responseText)

2,将应答文本即传输的数据当做resolve()的参数,在promise对象里进行then()调用.

3.Ajax函数的参数是一个对象opts,包括opts = {data:"请求的数据",datatype:"请求的数据类型",url:"请求数据的地址",type:"请求方式,get/post",async:true / false,对应异步或同步,success:成功返回数据结果后的回调函数,如果用promise对象的话,就不需要}

4.在ajax函数里面,所以要进行

实现:

实现Ajax函数之前得准备函数:

1,把data转化为xxx=xxx&xxx=xxx格式的function getparams(){}函数

2,XMLHTTPRequest对象的兼容函数  function xmlhttp(){}

3.Ajax的主体函数:function ajax(opts){}

3.1 在函数主体里面先搞定3个参数type,datatype,async,

3.2 然后是运行xmlhttp()获得ajax的核心对象

3.3 然后返回promise对象,promise对象的参数为一个函数,在这个函数里面继续写ajax对象事件

3.4 判断是get还是post,因为这两种请求有区别,所以有两个逻辑判断,注意:

get方式的open的第二个参数url后面记得加"?"

post方式的open()和send()方法之间必须设置响应头 :setRequestHeader

3.5 判断是异步还是同步,异步有onreadystatecahnge事件,并且需要判断readyState == 4;同步没有这个事件,不需要判断readyState,只要判断status == 200;

3.6 将服务器响应结果responseText作为promise函数resolve函数的参数,然后就可以在then函数里面写回调函数了.



