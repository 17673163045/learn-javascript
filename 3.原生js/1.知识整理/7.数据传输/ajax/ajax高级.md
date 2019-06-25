###<mark>同步和异步</mark>

<table><tr><td bgcolor=orange> 同步和异步的概念</td></tr></table>

```js
同步：必须等待前面的任务完成，才能继续后面的任务。
同步：在银行排队时，只有等到你了，才能够去处理业务。
```

```js
异步：不受当前任务的影响。
异步：在排队的时候，可以玩手机。
```

<table><tr><td bgcolor=orange> 异步更新网站</td></tr></table>

```js
异步更新，会在加载数据的同时，页面没有刷新。
web前端里的异步更新，就要用到 Ajax。
```

###<mark>Ajax</mark>

```js
在浏览器中，我们可以在不刷新页面的情况下，通过ajax的方式去获取一些新的内容。
```

```js
Ajax：Asynchronous Javascript And XML（异步 JavaScript 和 XML）。它并不是凭空出现的新技术，而是对于现有技术的结合。Ajax 的核心是 js 对象：XMLHttpRequest。
```

####发送 Ajax 请求的五个步骤

```js
（1）创建异步对象。即 XMLHttpRequest 对象。

（2）设置请求的参数。包括：请求的方法、请求的url。

（3）发送请求。

（4）注册事件。 onreadystatechange事件，状态改变时就会调用。

如果要在数据完整请求回来的时候才调用，我们需要手动写一些判断的逻辑。

（5）获取返回的数据。
```

####编码,转码

```js
encodeURIComponent(URIstring)编码;
/参数:
URIstring  必需。一个字符串，含有 URI 组件或其他要编码的文本./;
/返回值: 
URIstring 的副本，其中的某些字符将被十六进制的转义序列进行替换。/;
/encodeURIComponent方法在编码单个URIComponent（指请求参数）应当是最常用的，它可以讲参数中的中文、特殊字符进行转义，而不会影响整个URL。/
```

```js
decodeURIComponent,将encodeURIComponent编码的字符解码为对应的原始的字符url.
```

###psot请求

<table><tr><td bgcolor = #f90>在以下情况中，请使用 POST 请求：</td></tr></table>

```js
1,无法使用缓存文件（更新服务器上的文件或数据库）
2,向服务器发送大量数据（POST 没有数据量限制）
3,发送包含未知字符的用户输入时，POST 比 GET 更稳定也更可靠
```

####请求头   

<table><tr><td bgcolor = #f90>请求头包含HTTP的头部信息, 即服务器返回的响应头信息和客户端发送出去的请求头信息. 我们可以获取响应头(response)信息或者设置请求头(request)信息</td></tr></table>

####getAllResponseHeaders()

```js
使用 getAllResponseHeaders()获取整个响应头信息
```

####getResponseHeader()

```js
getResponseHeader()获取单个响应头信息
```

####setRequestHeader(*header*,*value*)

<table><tr><td bgcolor = #f90>如果需要像 HTML 表单那样 POST 数据，请使用 setRequestHeader() 来添加 HTTP 头。然后在 send() 方法中规定您希望发送的数据：</td></tr></table>

```js
xmlhttp.open("POST","ajax_test.asp",true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send("fname=Bill&lname=Gates");
```

POST请求向服务器发送的数据, 不会跟在URL后面, 而是通过send()方法向服务器提交数据。

### 跨域请求

```js
同源策略限制了从同一个源加载的文档或脚本如何与来自另一个源的资源进行交互。这是一个用于隔离潜在恶意文件的重要安全机制。
```

#### jsonp解决跨域

```js
//非官方的,缺点是只支持gst方法.原理是利用具有src属性的标签不会有跨域的限制.带有src的属性的标签有script,img,iframe等等.
```

#### CORS

```js
CORS是一个W3C标准，全称是"跨域资源共享"（Cross-origin resource sharing）跨域资源共享 CORS 详解。看名字就知道这是处理跨域问题的标准做法。CORS有两种请求，简单请求和非简单请求
```

```js
Access-Control-Allow-Origin','*'
```

###Promise

#### 回调地狱

```js
//当我们有很多回调的时候，
比如这个回调执行完需要去执行下个回调，
然后接着再执行下个回调，这样就会造成层层嵌套，
代码不清晰，很容易进入“回调地狱”.
```

####定义

```js
Promise，他是一个对象，是用来处理异步操作的，
可以让我们写异步调用的时候写起来更加优雅，更加美观便于阅读。
顾名思义为承诺、许诺的意思，意思是使用了Promise之后
他肯定会给我们答复，无论成功或者失败都会给我们一个答复，
所以我们就不用担心他跑了哈哈。
```

```js
Promise有三种状态：
pending（进行中），
resolved（完成），
rejected（失败）.
只有异步返回的结构可以改变其状态。
所以，promise的过程一般只有两种：
pending->resolved ;/进行到成功/;
或者pending->rejected。;/进行到失败/
```

####then

```js
promise对象还有一个比较常用的then方法，用来执行回调函数.
then方法接受两个参数，第一个是成功的resolved的回调，
另一个是失败rejected的回调，第二个失败的回调参数可选。
并且then方法里也可以返回promise对象，这样就可以链式调用了。
```











