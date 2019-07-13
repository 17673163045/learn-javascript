### 脚手架快速搭建

#### node安装

```js
1.node安装,版本4.0及以上
2.使用node -v查看node版本看是否安装成功.
```

#### 全局安装vue-cli

```js
1. `cnpm install -g vue-cli`安装到全局
2.使用vue -V 查看vue版本.
```

#### 项目初始化

```js
 `vue init webpack demo(你新建的项目名称/文件名称)`
 执行之后将会 自动初始化一个文件夹 ：demo
```

#### 下载配置node_module

```js
手动打开demo文件夹 可以看到已经初始化好了一个基本的项目.
这个时候package.json已经配置好了相关的模块信息,你需要安装这些模块,使用`cnpm install`指令
```

#### 运行项目

```js
使用指令` npm run dev `或者`yarn start `来运行项目.
默认端口是localhost:8080,
   通过查看配置文件package.json的script属性,可以查看到启动命令.
```

### 设置别名

```js
build文件夹--> webpack.base.config-->:
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
          'vue$': 'vue/dist/vue.esm.js',
          '@': resolve('src'),
        }
      }
可以为@符号设置别名,默认@设置为src文件夹目录.`@/components`即表示src文件夹下的components文件夹.
```

### 设置任意形式的访问

```js
config文件夹--->index.js-->:
	host: 'localhost', 
    port: 8080, 
    更改为:
    host: '0.0.0.0', // 设置任意形式的访问
    port: 9999, //随意
```

### src文件

```js
scr文件是我们主要编辑目录,除了在src里面修改不需要重启,其他目录都要重启服务器.
scr文件夹下的assets,主要存放下载到本地的图片资源,如ico图片,精灵图,不需要去服务器拉取图片资源.
src文件夹下的components,主要存放组件库.
```

### static文件

```js
一级目录下的static文件,和src平级.
里面适合存放面放一些第三方(前端插件)的文件,比如类似jquery等不需要编译的文件.
static/ 目录下的文件并不会被 Webpack 处理,所以适合放不需要编译的文件,如果是sass文件,不能放在static文件夹下.
`必须使用绝对路径引用这些文件`
```

```js
不需要编译的静态文件,直接在`index.html`引用,比如: `<link rel="stylesheet" href="./static/reset.css">`或者引入jquery,`<script src="./static/jquery.js"></script>`
```

### package.json文件

```js
这里存放的是模块清单,对应有启动项目的各个模块版本,可以维持项目的稳定性.
```

### 导入scss文件编译

```js
下载sass模块:cnpm install node-sass sass-loader sass-resources-loader --save-dev
```

```js
在src文件夹下建立common文件夹下再建立css文件夹,里面存放scss文件.
```

```js
build文件夹下的utils文件中配置
	scss: generateLoaders('sass').concat(
     {
       loader: 'sass-resources-loader',
       options: {
         resources: path.resolve(__dirname, '../src/common/css/index.scss')
       }
     }
   )
```

### 配置全局组件,指令,过滤器,apis,方法

```js
参考`17.定义全局组件,过滤器,指令.md`
```

### 存放静态文件

```js
1.不需要编译的静态文件,在static里面的 css或者js,在打包之后会不会被压缩
2.直接在index.html引用 <link rel="stylesheet" href="./static/reset.css">或引入jquery
```

### 配置axios

```js
下载axios模块:npm install axios --save-dev
```

```js
//定义公共请求配置部分
import axios from "axios"
const baseURL = location.host.indexOf(".com") != -1 ? "" : "/apis";
var instance = axios.create({
  baseURL:"/apis",
  timeout: 20000,
  // 跨域  
  withCredentials: true,
  // `transformRequest` 允许在向服务器发送前，修改请求数据
  transformRequest: [function (data) {
    return data;
  }],
  // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
  transformResponse: [function (data) {
    return data;
  }],
  responseType: 'json'
})
export default instance
```

```js
import request from "./https"
class Apis {
  //cnode的接口
  getTopics() {
    return request({
      method: 'get',
      url: '/api/v1/topics',
    });
  }
  //cnode的接口
  getThem() {
    return request.get("https://cnodejs.org/apis/api/v1/topic_collect/alsotang")
  }
  //本地服务器的接口
  getPhp() {
    return request({
      method:"post",
      url: "/dist/php/json.php",
      data:{
        uname:"sasige",
        upwd:"123456"
      }
    })
  }
}
export default new Apis()
```

```js
//代理跨域;
const cnode = "https://cnodejs.org"
	proxyTable: {
       '/apis': {
         target:cnode,  // 需要进行代理跨域主机
         secure: true, // 如果是https接口，需要配置这个参数
         changeOrigin: true, //是否跨域
         pathRewrite: {
           '^/apis': '' //请求结束 将url里面 /apis重写成"" https://cnodejs.org/api/v1/topics
         }
       }
    },
```

### 配置淘宝响应框架

```js
1.安装模块:`cnpm i lib-flexible --save`
2..在项目入口文件main.js中引入lib-flexible:`import 'lib-flexible/flexible.js'`或者`require("lib-flexible/flexible.js")`
3.自动设置viewport
4.使用:配合scss使用计算rem的值:
// flexbal
$fontSize:75;
@function r($px){
	@return $px/$fontSize+rem;
}
5.在css里使用scss书写css:
	height:r(100)
	width:r(100)
```

### 设置全局事件

```js
在需要获取 data 的组件上设置一个监听器，每次要传递 data 时，那个组件就广播这个事件并调用这些监听器。我们不难发现 EventHub 的主要功能就两个： `监听`和`广播`，当然还有`去掉监听`器。
```

```js
在挂载全局指令组件的core文件里,core.config.js:
	import Vue from "vue"
	export default (vue)=>{
        vue.prototype.$eventHub = new Vue();
    }
```

### 打包上线 ###

```js
使用`yarn build`打包指令生成dist文件夹,将dist放到wampserver的www文件夹下的项目
当我们在服务器运行项目,如果出现资源`加载不出`来的情况,很可能就是`资源的相对路径`问题:
这个时候我们找到`项目根目录`--->`config`--->`indxex.js`
找到 build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),
    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/'  ------>`找到这个,修改为"./""`
}
```

