```php
//头部加一句这个不会出现乱码
header("Content-Type:application/json;charset=utf-8");
```

```php
$_SERVER["REQUEST_METHOD"]//表示获取到服务器的请求方式,语法为大写字母,[],里面是字符串,获取的结果也是大写,
if($_SERVER["REQUEST_METHOD"] != "POST") // 如果获取的提交方法为POST请求
```

```php
    array() //创建一个类似于对象的数组,语法为array("str"=>"str"),
    $arr = array("msg"=>"对不起只支持post请求") //相当于js的{msg:"对不起只支持post请求"}
```

```php
json_encode()把php的数组转成json对象
json_decode()把json对象转化为php数组
```

```php
print_r()控制台输出内容
```

```php
$_REQUEST 变量可用来收集通过 GET 和 POST 方法发送的表单数据。 $_REQUEST 变量包含了 $_GET、$_POST 和 $_COOKIE 的内容,
通过 $_POST 变量来收集表单数据（请注意，表单域的名称会自动成为 $_POST 对象中的键）,即html的form表单里的name属性的值自动成为$_POST对象的键,值为html表单value的值
```

```php
isset()检测变量是否设置，并且不是 NULL。
```

```php
$connect->query($sql);->相当于对象的.即通过对象的键查询值.
```



登陆接口:

1.通过$_SERVER["REQUEST_MRTHOD"]判断请求方式:

```php
if($_SERVER["REQUEST_METHOD"] != "POST"){
    $res = array("msg"=>"不支持post之外的请求","status"=>-1);
    print_r(json_encode($res));
    return;
}
```

2.判断用户名或者密码不为空

```php
if(!(isset($_POST["uname"]) && $_POST["upwd"])){
    $res = array("msg"=>"用户名密码不能为空","status"=>-2)
}
// $_POST拿到html页面的表单的name为uname的input用户输入框的值和name为upwd的input密码输入框
//isset判断变量是否设置并且不为null
// status的作用,前端通过ajax的responseText拿到后台status的值进行逻辑判断,显示对应的弹框
```

3.拿到form表单的数据

```php
$uname = $_POST["uname"];//$uname是声明一个变量,相当于var uname;
//$_POST是一个对象,拿到前端通讯页面的表单的name的值,表单域的名称会自动成为 $_POST 对象中的键,
// $_POST["uname"]表示通过$_POST对象查询对应的表单的value值.
$upwd = $_POST["upwd"]; //拿到密码输入框的值
```

4.拿到数据后的操作数据库五部曲:

4.1 创建核心对象new mysqli()

```php
new mysqli(),这个对象就是数据库对象.即相当于整个你创建的那个数据库,比如你创建了一个班级数据库,这个对象就是班级数据库.
    怎么找到你的班级数据库?
    /*通过主机名称host:"localhost",主机的用户名username:"root",
    和密码passwd和数据库的名称dbname:"cs1902"和端口port:3306和数据库进行匹配*/
    $connect = new mysqli("localhost","root","","cs1902","3306") //参数分别是主机名,主机用户名,密码(可以为空),数据库名称,端口
    //参数数据库名称就是班级数据库
```

4.2设置通信的字符,即设置数据库和php文件的通信字符

```php
mysqli_query($connect,"set names utf8");//固定语法names,utf8
//mysqli_query函数,第一个参数是数据库对象,第二个参数是字符串,可以是查询语句,可以是增加数据库的语句,可以是删除语句.
```

4.3 准备mysql字符串,即mysql数据库的查询语句字符串

```php
$sql="SELECT `u_id`,`u_name`,`u_email`,`u_telphone`,`u_sex`,`u_hobby`,`u_realyname` FROM userinfo WHERE u_name='".$uname."' AND u_pwd='".$upwd."'";
//这是一个字符串,即数据库的查询语句的字符串.
//注意:查询语句的后半部分语法:u_name='".$uname."' AND u_pwd='".$upwd."',单引号加双引号加两个..,两个点之间放要查询的表单值
```

4.4 执行sql语句:

```php
$connect->query($sql);
//表示数据库对象的query方法,即相当于在数据库里手动点击查询的按钮.
//返回的查询语句的结果是一个对象,里面有一个num_rows属性,如果num_rows >= 1的话,表示数据库里面存在查询的数据;
//查询语句的结果是一个对象,它的fetch_assoc属性表示从结果集中取得一行作为关联数组：
```

4.5 关闭数据库连接

```php
$connect->close();
```

注意:print_r语句必须写. print_r(json_decode($res))