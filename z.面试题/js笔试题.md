####第一题：

```js
if ( typeof(a) && -true + (+undefined) + ""){
    document.write("s")
}
// 是否可以打印出字符串"s"?
// 答案： 可以。
// 考点：1，typeof（）方法对未经声明的变量判断不会报错，typeof(a)返回的是undefined。
//  2，typeof()方法返回的值是用字符串类型表示。
//  3，- ture 和 +undefined 和 + "" 考的是隐式类型转化， -true为-1， + undefined为 NaN， +""为字符串拼接；
 // 所以结果为： if("undefined" && "NaN){...};条件满足。可以打印结果"s"
```

#### 第二题：

```js
if (11 + "11" * 2 == 33 ){
    document.write("s")
}
// 是否可以打印字符串"s" ？
// 答案：可以；
// 考点：1，*号的隐式类型转化，调用Number()方法，"11" * 2 = 22,数字类型的22。
```

#### 第三题

```js
!!" " + !!"" - !!false||document.write("s")
// 可以打印字符串"s"吗？
// 答案：不可以；
// 考点：1，空字符串的布尔值为false，带空格的字符串的布尔值为true；所以前面是true + false -false = 1；
// 2，||或逻辑运算符看到真的就返回真的值，不会看后面的语句了。
```

#### 第四题

```js
var x = 1;
if(function f(){}){
    x += typeof(f)
}
console.log(x)
// 答案：打印"1undefined"。
// 考点: 1,typeof()方法返回的是字符串类型的值。
//       2,预编译和立即执行函数
```

#### 第五题

```js
(window.foo || (window.foo = 'bar'));
console.log(window.log);
// 答案：'bar';
// 考点：1，括号优先级，括号在语句的优先级最高，先执行括号的语句，此时window.foo = 'bar'。
```



