### 变量的解构赋值

####基本概念:

```js
概念:ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）。
```

```js
ES6 以前的用法:
var a=1;
var b=2;
var c=3
ES6:
let [a,b,c]=[1,2,3];
```

#### 高级用法

```js
/解构赋值允许指定默认值/

let [foo=true] = []; //true
let [x, y = 'b'] = ['a']; // x='a', y='b'
let [x, y = 'b'] = ['a', undefined]; // x='a', y='b'
```

```js
/对象解构赋值/

// 不用按次序，但是要名称相同
let {foo,bar} = {bar:'World',foo:'Hello'}
console.log(foo+bar) //HelloWorld;
(相当于let foo = "Hello";let bar = "World")
( 理解:将一个对象的键的值赋给左边的对象里面的变量,相当于一种给变量赋值的操作,可以不按顺序.)
//如果解构前，已经定义了变量，需要在解构的语句外面加一个圆括号
let foo;
({foo}={foo:'Hello1'})
```

```js
/从函数返回多个值/

//返回数组
function example(){
return [1,2,3]
}
let [a,b,c]=example();
// 返回一个对象
function example() {
return {
foo: 1,
bar: 2
};
}
let { foo, bar } = example();
```

```js
/提取JSON数据/

let jsonData = {
id: 42,
status: "OK",
data: [867, 5309]
}; // 这是一个json格式的对象;
//怎么去取出json数据里的键值对?
let { id, status, data: number } = jsonData;
console.log(id, status, number);
// 42, "OK", [867, 5309]
//data: number, 表示key值重命名
相当于:let id = jsonData.id; let status = jsonData.status;
let number = jsonData.data;
```

错误用法:

```js
/等号右边不等与数组或右边不是可遍历的结构就会报错/

let [a]=1; //错误
let [a]=false; //错误
let [a]={}; //错误
```









