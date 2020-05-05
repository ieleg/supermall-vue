# 项目开发

### css文件引入

github引入normalize.css

--font-size: 14px;是css定义变量的写法

color: var(--color-text); 使用变量

### 起别名

在根目录新建vue.config.js文件

在html模板里用别名前要加~

我搞了半天起别名还是失败了,只用一个别名吧

@指向src目录类似这样 

 import tabbarItem from '@/components/common/tabbar/tabbarItem.vue'

### 网页上的小图标改变

### 首页导航栏封装

导航栏分左中右留三个slot，根的display为flex，

导航栏的基本组件放在components的common里

然后以子组件添加到views的home

### 请求首页的多个数据

用axios进行网络请求，在network下针对首页创建home.js，里面是关于首页的全部request，然后在view的home里调用它们，在生命周期created后调用，返回请求到的数据

### 轮播图

<swiper>

​	<item></item>

​	<item></item>

​	<item></item>

</swiper>

在common里封装组件swiper和swiperitem，再在view的home里封装业务的组件homeswiper

### 推荐信息展示

长宽都为65px

text-align:center;是使标签的内容居中：

margin:0 auto;是使自身在浏览器内居中，需要配合宽度使用：

### special的封装

截了一张图 盒子模型从外到内是margin(白色部分) border padding 

### tabcontrol的封装

再多个页面使用，所以放在content里，一个独立组件的业务组件

如果只是文字不一样就不一定非要用插槽；

滚到下面时position变为fixed

垂直居中是：

height: 40px;

 line-height: 40px;

粘性定位

​    position: sticky;

​    top: 44px;二者一起用，当达到top的位置时，它内部会自动把position改为fixed

### 保存商品的数据结构

商品的数据结构为

```js
goods:{

	pop:{page:0,list[]},

	new:{page:0,list[]},

	sell:{page:0,list[]},

}
```

接口目前不知道,如果自己写的话,我靠太烦了,先空着吧

```js
export function getHomeGoods(type,page){
  return request({
    url:'api',
    params:{
      type,page
    }
  })
}
```

```js
    getHomeGood(type){
      const page = this.goods[type].page;
      getHomeGoods(type,page).then(res =>{
        console.log(res);
		//将数组放入另一个数组中
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page++;
      }).catch( err =>{
        console.log(err);
      })
    }
```

type是个变量所以访问的时候是goods[type]

### 商品列表展示

这个也是一个组件，想想淘宝那个痕迹

如何设成两列

用flex布局

在父元素设置display ：flex flex warp：wrap

然后在子元素设置宽度，超过body的宽度会自动换行



tmd为什么我的图片老是塞在一起

img属于行内替换元素。height/width/padding/margin均可用。效果等于块元素。
行内非替换元素，例如*, height/width/padding top、bottom/margin top、bottom均无效果。只能用padding left、right和padding left、right改变宽度。*

原来我在control设置了item样式，然后和这个重名了，是它盒子的高度固定为40px，所以图片压在一起了

绝对定位要相对于父元素的定位，父元素相对绝对都行

justify-content一种对齐方式

### 点击切换商品

因为要监听点击，tabcontrol要向外面传数据，子组件向父传的话要用

发射自定义事件(不支持驼峰写法哦),第二个参数是要传的参数

this.$emit('tabclick', index)

在父组件里用 @tabclick=‘自定义的函数名’使用



### better-scroll安装和使用

移动端滚动更丝滑

cnpm install better-scroll --save

然后再import BSscroll from ‘better-scroll’

但是在实际用的时候要把这个第三方库封装的，为了安全

###### 生命周期

created:在模板渲染成html前调用，即通常初始化某些属性值，然后再渲染成视图。

mounted:在模板渲染成html后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作。

绿色部分为 wrapper，也就是父容器，它会有**固定的高度**。黄色部分为 content，它是父容器的**第一个子元素**，它的高度会随着内容的大小而撑高。那么，当 content 的高度不超过父容器的高度，是不能滚动的，而它一旦超过了父容器的高度，我们就可以滚动内容区了，这就是 better-scroll 的滚动原理。

**最后还有个弹簧效果哦**

### better-scroll基本使用解析

想要监听用户滚动到哪个位置；

默认情况下bscroll是不能实时监听滚动位置

probeType为0和1时都是不侦测

2手指滚动时侦测，手指离开后的惯性滚动过程不侦测

3只要是滚动都侦测

```js
    const bs = new BS('.wrapp',{
      probeType:2
    });
```

###### click好像失效了

- 类型：Boolean
- 默认值：false
- 作用：better-scroll 默认会阻止浏览器的原生 click 事件。当设置为 true，better-scroll 会派发一个 click 事件，我们会给派发的 event 参数加一个私有属性 `_constructed`，值为 true。

### pullUpLoad

- 类型：Boolean | Object

- 默认值：false

- 作用：这个配置用于做上拉加载功能，默认为 false。当设置为 true 或者是一个 Object 的时候，可以开启上拉加载，例如：

  ```js
  pullUpLoad: {
    threshold: 50
  }
  ```

但是发现只能拉一次，怎么解决呢？

答：bs.finishPullUp();

### ref-vue中获取dom元素

一般来讲，获取DOM元素，需document.querySelector（".input1"）获取这个dom节点，然后在获取input1的值。

但是用ref绑定之后，我们就不需要在获取dom节点了，直接在上面的input上绑定input1，然后$refs里面调用就行。

```xml
<div id="app">
    <input type="text" ref="input1"/>
    <button @click="add">添加</button>
</div>
```

```js
<script>
new Vue({
    el: "#app",
    methods:{
    add:function(){
        this.$refs.input1.value ="test"; //this.$refs.input1  减少获取dom节点的消耗
        }
    }
})
</script>
```

​	ref绑定在组件中，this.$refs.rename获取到的就是组件对象

​	ref绑定在元素中，this.$refs.rename获取到的就是元素对象

### scope作用

防止样式名一样的类影响其他组件的样式

### better-scroll在vue项目的使用

现在common里封装bs组件

在scroll标签里放内容，scroll本身是一个组件是一个wrapper，他要定义高度，高度要小于内容，而且位置要合适

![scroll的位置](E:\浮生记\web前端\learnVue-V2\scroll的位置.png)

```css
  #home{
    //viewpoint height，视窗高度，1vh=视窗高度的1%
    height: 100vh;
    position: relative;
  }
  .content{
    position: absolute;
    top: 44px;
    bottom: 49px;
    overflow: hidden;
  }
```

### 问题：sticky在overflow hidden失效

### backtop组件封装

位置时fixed

回到最顶部组件，首先组件内部的点击事件要通过emit发射出去？这种方法太麻烦了

组件能不能直接监听click事件呢，我第一次试是不行的

要用native

修饰符.native可以监听组件的原生事件，比如

<backTop @click.native="returnTop" />



回到顶部this.$refs.scroll.bs.scrollTo(0,-44);

### backtop的显示和隐藏

要监听scroll的position，但home需要实时监听，有些页面不需要实时监听

### 上拉加载更多

scroll发射事件，然后

```js
pullup(){
      this.getHomeGood(this.currentType);
    },
```

### bug

下拉时有时拉不动，因为scroll的height没有更新

解决方法治标：this.$refs.scroll.bs.refresh(); 

解决方法治本：每张图片加载完之后refresh一下，

在gooditem组件中发射事件给home调用scroll组件里的方法

但是gooditem与home隔了两个组件的关系，直接发射要发射两次，所以用公共bus来处理

1、在mainjs里Vue.prototype.$bus = new Vue()

2、在gooditem里

```
    imgUpdate(){
      this.$bus.$emit('itemimgload');
    }
```

img便签用@load='imgUpdate'

3、home里

```js
  mounted(){
    this.$bus.$on('itemimgload',() => {
      console.log('11111111111');
      this.$refs.scroll.bs.refresh();
      
    })
  }
```

但是还有bug，就是切换回首页时有vue warn

### 防抖函数处理	

如果我们直接执行refresh，那么refresh函数会被执行30次

通过防抖函数，可以将refresh函数传入到函数中，

当持续触发事件时，一定时间段内没有再触发事件，事件处理函数才会执行一次，如果设定的时间到来之前，又一次触发了事件，就重新开始延时。

```js
debonce(func,delay){
      let timer = null;
      console.log(func);
      
      return function(...args){
        if(timer){
          clearTimeout(timer);
        }
        timer = setTimeout(() => {
          func.call(this,args)
        }, delay);
      }
    },
```

### tabcontrol的吸顶

之前因为被父元素的hidden给搞掉了，现在如何实现它呢？

1 必须滚动到多少时有吸顶效果

首先要拿到tabcontrol的offsettop，在home里直接用ref绑定组件，然后同过$el来绑定它的原生元素

**this.$refs.tabcontrol.$el.offsettop**

但是这个值不准，因为tabcontrol上面图片还没加载完的时候，他就开始计算了

一般情况下，轮播图加载的比较慢

1要监听轮播图是否加载完成在发射事件

2this.isTabFixed = (-position.y > this.tabControlOffsetTop)然后在动态绑定样式

3 吸顶效果又被scroll给吃了？下面的商品内容会突然上移

**解决方法：**

复制一个tabcontrol在scroll上面，navbar下面，定义它的v-show，使得this.isTabFixed为真时，显示出来，起到偷梁换柱的效果。

但又出现了一个问题：

两个tabcontrol的按钮不一样

**解决方法**：

```js
      this.$refs.tabControl0.currentIndex = index;

      this.$refs.tabControl.currentIndex = index;
```

### home离开时记录位置

在app组件那加一层keep-alive

在home里离开时记录y，激活时scollto到y

```js
  activated(){
    this.$refs.scroll.bs.scrollTo(0,this.saveY,2000);
  },
  deactivated(){
    this.saveY = this.$refs.scroll.bs.y;
    console.log(this.saveY);
  },
```

### 滑动效果

swipeTime

- 类型：Number
- 默认值：2500（单位ms，不建议修改）
- 作用：设置 momentum 动画的动画时长。

这个值改小一点

### 详情页

在gooditem里面跳转，在路由里添加路径

```
    {
      path: '/details/:iid',
      component:details
    }
```

```
    imgClick(){
      this.$router.push('/details/'+this.goodsitem.iid);
    }
```

注意这有个bug，详情页在keep-alive里，它的iid没有销毁一直是第一个点击的

#### 详情页navbar封装

用之前的左中右插槽，分别插入back，和商品评论推荐参数。

这里图片用了垂直水平居中，是在父元素定义relative，子元素定位absolute，然后top50,left50

然后transform里translate(-50%,-50%)

#### 轮播图bug

点进去只有一张图片，不轮播

解决：在swiper组件里

```js
    mounted: function () {
      // 1.操作DOM, 在前后添加Slide
      setTimeout(() => {
        this.handleDom();
        // 2.开启定时器
        this.startTimer();
      }, 200)
        //100改为200，可以加长
```

#### 商品基本信息展示

标题、价格、销量、收藏、打折、延误必赔等信息

将这些东西保存在一个class对象里面

service遍历时只要前四个，

用v-for index in number，遍历数字来

#### 详情页隐藏tabbar

设置z-index比tabbar高

#### 店铺信息展示

过滤器用法--

54646数字变成5.5万

{{ message | capitalize }}

然后在组件里	

filters: {
capitalize: function (value) {
if (!value) return ''
value = value.toString()
return value.charAt(0).toUpperCase() + value.slice(1)
}
}

#### 取出商品详情信息

图片滚动的bug，用防抖刷新来解决

#### 参数信息展示

表格标签的使用

#### *商品评论

bug dom里出现不了  原来没导入一个js文件，时间格式化	

#### 推荐信息展示	

用了之前在home里goodlist组件

但在home里图片位置在goodsitem.show.img

在detail了图的位置在goodsitem.image

解决方法：

```
  computed:{
    imgPath(){
      return this.goodsitem.image?this.goodsitem.image:this.goodsitem.show.img

    }
  },
```

图片iid跳转不了

#### bug修复

如果有一个操作数是布尔值，则在比较相等性之前先将其转换为数值——false转换为0，而true转换为1；-1会转成true，但是-1==true是false

#### flutter

#### 点击标题滚动到对应主题

主要是获取每个位置的offsettop

在哪个钩子里得到呢，created、mounted直接试了一下是不行的

还是用了防抖，在created里把获取位置的动作放在防抖函数里，然后再method里图片加载的方法中使用它，只有图片一加载就可以触发防抖函数

#### 滚动到对应标题标题改变

通过监听scroll滚动，来动态改变navbar的标题，通过refs传值

```js
 if(-position.y>=this.titleYs[1]&&-position.y<this.titleYs[2]){
        this.$refs.navbar.currentIndex = 1;
      }else if(-position.y>=this.titleYs[2]&&-position.y<this.titleYs[3]){
        this.$refs.navbar.currentIndex = 2;
      }else if(-position.y>=this.titleYs[3]){
        this.$refs.navbar.currentIndex = 3;
      }else{
        this.$refs.navbar.currentIndex = 0;
      }
```

#### 底部栏

模仿淘宝底部

圆角：border-radius **四个值:** 第一个值为左上角，第二个值为右上角，第三个值为右下角，第四个值为左下角。

线性颜色：linear-gradient(left,#ff9478,#e9d460);

### 购物车

任何修改state中状态的操作要通过mutation来操作，

现在底部栏监听click，有则emit到详情页，详情页新建一个对象保存改商品的一些信息，然后通过

this.$store.commit('addCart',obj);让mutation操作,再在mutation的addcart方法中push obj对象

同一商品添加：for of遍历键值，如果iid有一样的，count++，否则就push新payload

#### *vuex重构

mutation里一般放简单的操作

含逻辑的，异步的，复杂的最好放到action里去

bug state里的数据不随改变

#### 购物车navbar

scoped的独特标识没有出现，玄学

vuex可以对store定义getters，可以暴露出一些属性，但是我觉得直接在组件里用计算属性更简单一点。。

z-index越高出现越前

#### 选择框	

是否被选择这个状态应该保存在vuex中，

响应式，

#### 封装一个全选的底部框

bug 点击全选可以选择，但是再点无法取消，state中的状态没有改变，计算属性props传不过去

解决：在每一个item选中时判断cartList的全选状态，!this.$store.state.cartList.some(item => !item.checked，在全选栏中点击时判断全选状态，真则取假，假则取真

#### 购物车弹窗toast

action映射mapActions,vuex自带的

普通封装

插件封装 this.$toast.show(res,2000)



### 一些细节

#### 图片懒加载

vue-lazyload

使用：

1在main.js里import VueLazyload from 'vue-lazyload'

2 Vue.use(VueLazyload)

3在:src处修改为v-lazy="..."

​       

### 项目部署

1 npm run build

##### 服务器问题

服务器--一台电脑(没有显示器\主机)24小时开着,为用户提供服务

主机->操作系统->windows/linux

#### 让自己电脑做服务器

1 下载nginx,点击exe,浏览器输入localhost,出现welcome界面则成功

2 复制dist文件到nginx目录,配置nginx,在root里改为dist并重启nginx

#### 远程部署

yum install nginx //安装

systemctl start nginx.service //开启nginx服务
systemctl enable nginx.service//跟随系统启动



主要还是centos版本问题，版本太高部署nginx老是出错

bug:nginx 修改js文件，客户端没有更新