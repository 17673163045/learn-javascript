### 什么是ajax

```js
/ajax:ajax是一种与服务器进行数据通讯的技术,可以实现网页部分刷新.
//ajax的最大优点是在不重新加载整个页面的情况下，可以与服务器交换数据并更新部分网页内容。
;/ajax的核心内容是XMLHTTPRequest对象
```

```js
//AJAX = 异步的JavaScript 和数据XML(或json)。
/AJAX 是一种用于创建快速动态网页的技术。通过在后台与服务器进行少量数据交换，AJAX 可以使网页实现异步更新。
//这意味着可以在不重新加载整个网页的情况下，对网页的某部分进行更新。传统的网页（不使用 AJAX）如果需要更新内容，必需重载整个网页面。
```

```js
//ajax可以获得一个对象,XMLHttpRequest 对象 (异步的与服务器交换数据)
所有现代浏览器均支持 ;
/window.XMLHttpRequest 对象/;
/(IE5 和 IE6 使用 ActiveXObject)/
```

```js
/window.XMLHttpRequest 对象/ 或;
/ActiveXObject("Microsoft.XMLHTTP")/
ps:  Request:请求,应答
```

###ajax对象的兼容

```js
通过;/new关键字/,获得ajax对象,并兼容ie获取ajax对象:XMLHttpRequest.
```

```js
function creatxmlhttp(){
    if(window.XMLHttpRequest){
        var xmlhttp = new window.XMLHttpRequest();
    }else{
        var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")
    }
    return xmlhttp;
}
```

###XMLHttpRequest 对象

```js
XMLHttpRequest 是 AJAX 的基础
```

```js
XMLHttpRequest 对象用于和服务器交换数据。
```

###xhr请求

```js
如需将请求发送到服务器，我们使用 XMLHttpRequest 对象的 open() 和 send() 方法：
```

#### open()

```js
open(method,url,async);
/method:请求的类型；GET 或 POST/;
/url：文件在服务器上的位置/;
/async:true（异步）或 false（同步）/ 默认是true(异步)
```

#### send()

```js
send(string);
/string:仅用于 POST 请求/
send(null);get方法下写null;
```

###xhr响应

####responseText

```js
//如需获得来自服务器的响应，请使用 XMLHttpRequest 对象的 responseText 或 responseXML 属性。
```

```js
document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
```

####responseXML

```js
xmlDoc = xmlhttp.responseXML;
//再解析XML格式的文件为字符串
```

### status ###

```js
//status 当值为200时表示"OK",当值为404表示未找到页面
```

###readyState

```js
当请求被发送到服务器时，我们需要执行一些基于响应的任务。
```

```js
每当 readyState 改变时，就会触发 onreadystatechange 事件。
```

```js
readyState 属性存有 XMLHttpRequest 的状态信息。
```

readyState的变化

```js
 //XMLHttpRequest 的状态。从 0 到 4 发生变化。
```

| readyState的值 | 状态                        |
| -------------- | --------------------------- |
| 0              | 请求未初始化                |
| 1              | 服务器已经建立连接          |
| 2              | 请求已经接收                |
| 3              | 请求处理中                  |
| 4              | 请求已经完成,且响应已经就绪 |

### onreadystatechange事件

```js
存储函数（或函数名），每当 readyState 属性改变时，就会调用该函数。
```

```js
在 onreadystatechange 事件中，我们规定当服务器响应已做好被处理的准备时所执行的任务。
```

```js
当 readyState 等于 4 且status状态为 200 时，表示响应已就绪：
```

```js
onreadystatechange 事件被触发 5 次（0 - 4），对应着 readyState 的每个变化。
```

