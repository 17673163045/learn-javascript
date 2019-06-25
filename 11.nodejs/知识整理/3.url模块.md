`url` 模块用于处理与解析 URL。 使用方法如下： 

``` js
const url = require('url');
```

```js
URL 字符串是结构化的字符串，包含多个含义不同的组成部分。 解析字符串后返回的 URL 对象，每个属性对应字符串的各个组成部分。
```

![](C:\Users\Administrator\Desktop\learn javascript\11.nodejs\img\url组成.PNG)

```js
使用 WHATWG 的 API 解析 URL 字符串：
const myURL =
  new URL('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash');
```



```js
使用遗留的 API 解析 URL 字符串：
const url = require('url');
const myURL =
  url.parse('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash');
输出:
Url {
  protocol: 'https:', //协议
  slashes: true,
  auth: 'user:pass',
  host: 'sub.host.com:8080', //主机
  port: '8080', //端口
  hostname: 'sub.host.com', //主机名称
  hash: '#hash', //哈希
  search: '?query=string', // search包含?
  query: 'query=string', //不包含问号
  pathname: '/p/a/t/h', //路径名称
  path: '/p/a/t/h?query=string', //路径
  href:
   'https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash'  //href连接
}
console.log(myURL.query); // 输出query=string
```











