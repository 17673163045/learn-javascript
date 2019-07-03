### 获取当前元素

```js
1.获取当前元素
  利用e.target即可
```

```html
<div id="app">
    <ul>
       <li v-for="item in list" @click=fn(a,$event)></li>
     </ul>
</div>
//在循环数据并动态创建元素后,我们需要在点击当前元素获取当前元素对象,可以利用事件对象e或者$event
```

```js
new Vue({
    el:"#app",
    data:{
        list:{...}
    },
    methods:{
        fn(a,e){
            console.log(e.target); //e.target即当前元素对象
        }
    }
})
```

### 获取自定义属性

```js
1.获取当前元素的自定义属性
  for循环的时候设置data-xxx=".."利用e.target.dataset.xxx即可
```

```html
<div id="app">
    <ul>
       <li v-for="item in list" @click=fn($event) data-id=item></li>
     </ul>
</div>
//在循环数据并动态创建元素后,我们需要在点击当前元素获取当前元素对象,可以利用事件对象e或者$event
```

```js
new Vue({
    el:"#app",
    data:{
        list:{...}
    },
    methods:{
        fn(e){
            console.log(e.target.dataset.id); //e.target.dataset.id即获取当前元素的自定义属性
        }
    }
})
```

