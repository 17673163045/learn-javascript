###封装cookie思路:

```js
1.写一个立即执行函数,用Cookietools接收函数的返回结果

2.返回的是一个匿名对象,对象上有4个cookie方法

3.4个cookie方法:setCookie , getCookieAll,getCookieByName,
  removecookie.
```

#### setCookie 

```js
思路:
1.知识点:document.cookie 属性来创建 、读取、及删除 cookie
  浏览器设置cookie的方法是 document.cookie = "Str"
2.cookie的格式是 "name = value ; Domain = 'xxx'; path = '/';
Expires = 'datatime';secure = true / false"

3.分析:   name = value,name自己取, value可以是数组,对象,字符串.
  两个方法:encodeURIComponent():编码,将name和value的中文编码,编码之           后再设置到cookie里面.
          decodeURIComponent():解码,获取时要解码

          Domain = 'xxx';Domain表示域名
          path = '/'; path表示路径
          Expires = 'datatime'; 表示cookie的到期时间,以秒计
4.实现:    其实就是一个字符串拼接的过程,注意:
          1.函数传参数,(name,value,timer,path,damain,secure)
          2.判断name不为undefined,对name和value进行编码后再拼接
          3.判断timer是数字后,实例化data对                                     象,date.setDate(date.getDate() + timer);
            注意:日期要转成toUTCString()格式
          4.后面都是先判断是否不为undefined再进行拼接
          5.最后设置调用方法document.cookie = cookieStr
```

#### getCookieAll 

```js
思路:
	1.知识点:
	  document.cookie可以获取到页面的所有cookie;
	  获取到的cookie值包含name = value,不包含其他的path等等.
	  decodeURIComponent()可以解码,转化为认识的中文或者对象数组
      字符串的split方法分割特定的字符,返回一个包含分割后的字符的数组
	  trim()方法可以去掉字符串的头尾空格,不包括字符中间的.
      document.cookie返回所有cookie,所有cookie用双引号包起来当作一个       字符串,并且每条cookie是以封号加一个空格隔开,例如:
      "ga=GA1; gid=GA2; Hm_=G15" // 这是获取的3条cookie
    2.分析:这个函数要做的就是先获取cookie,再切割成一条条cookie,
          再把每条cookie切成对象的键值对,最后返回一个对象.
    3.实现:
			1.建立空对象
			2.获取cookie并解码
            3.以";"分割cookie,得到一条条cookie
			4.以"="分割每一条cookie,分割后设置为对象的键值对
			5.最后返回的是一个对象键值对.
```

#### getCookieByName 

```js
思路:
	1.调用上面的方法可以得到cookie的键值对对象了
    2.直接调用上面的方法,并且查询对象的名字name,返回		         	   name:value后面的value
```

#### removeCookie 

```js
思路:
	1.知识点:cookie的删除不能直接删除,只是一种覆盖,设置相同名称的		  cookie,并且将过期时间改为当前时间再减去1即可.
    2.所以直接调用设置cookie的函数,将有效期时间设为-1即可 		           this.setCookie(name, "", -1);
```

### 扩展

```js
/设置cookie的所有值:/;
	name：该Cookie的名称。Cookie一旦创建，名称便不可更改。 
    value：该Cookie的值。如果值为Unicode字符，需要为字符编码。如果值为			 二进制数据，则需要使用BASE64编码。 
    expires：该Cookie失效的时间，单位秒。 
    secure：该Cookie是否仅被使用安全协议传输。安全协议有						HTTPS，SSL等，在网络>上传输数据之前先将数据加密。默认为			false。 
	path：该Cookie的使用路径。如果设置为“/sessionWeb/”，则只有			  contextPath为“/sessionWeb”的程序可以访问该Cookie。如果设		   置为“/”，则本域名下contextPath都可以访问该Cookie。注意最后			一个字符必须为“/”。 		     
	domain：可以访问该Cookie的域名。如果设置为“.google.com”，则所有			以“google.com”结尾的域名都可以访问该Cookie。注意第一个字			 符必须为“.”。
```



```js
Cookie的Secure属性:
	基于安全的考虑，需要给cookie加上Secure和HttpOnly属性，HttpOnly比较好理解，设置HttpOnly=true的cookie不能被js获取到，无法用document.cookie打出cookie的内容。

Secure属性是说如果一个cookie被设置了Secure=true，那么这个cookie只能用https协议发送给服务器，用http协议是不发送的。换句话说，cookie是在https的情况下创建的，而且他的Secure=true，那么之后你一直用https访问其他的页面（比如登录之后点击其他子页面），cookie会被发送到服务器，你无需重新登录就可以跳转到其他页面。但是如果这是你把url改成http协议访问其他页面，你就需要重新登录了，因为这个cookie不能在http协议中发送。
```

