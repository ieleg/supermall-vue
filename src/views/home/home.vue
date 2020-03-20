<template>
  <div id="home">
    <navbar class="navbar">
      <div slot="center">购物街</div>
    </navbar>

      <scroll class="content" ref="scroll"
       @scrollon="showbacktop" 
       @pullup='pullup'>
        <homeSwiper :banner="banner" />
        <recommend :recommend='recommend' />
        <specialGood />
        <tabControl class="tabControl" :title="['流行','新款','精选']" @tabclick='changetg'/>
        <keep-alive>
          <goodList :goods="goods[currentType].list" />
        </keep-alive>
    
      </scroll>
    
     <backTop @click.native="returnTop" v-show="isShow"/>
     <!-- <ul>
       <li>a</li>
       <li>a</li>
       <li>a</li>
       <li>a</li>
       <li>a</li>
        <li>a</li>
       <li>a</li>
       <li>a</li>
       <li>a</li>
       <li>a</li>
        <li>a</li>
       <li>a</li>
       <li>a</li>
       <li>a</li>
       <li>a</li>
    
       <li>a</li>
       <li>a</li>
       <li>a</li>
       <li>a</li>
        <li>a</li>
       <li>a</li>
       <li>a</li>
       <li>a</li>
       <li>a</li>
        <li>a</li>
       <li>a</li>
       <li>a</li>
       <li>a</li>
       <li>a</li>
        <li>a</li>
       <li>a</li>
       <li>a</li>
       <li>a</li>
       <li>a</li>
        <li>a</li>
       <li>a</li>
       <li>a</li>
       <li>a</li>
       <li>a</li>

     </ul> -->
  </div>
</template>

<script>
import {getHomeMultidata,getHomeGoods} from '@/network/home'

import scroll from '@/components/common/scroll/scroll'
import navbar from '@/components/common/navbar/navbar'
import homeSwiper from './childComponent/homeSwiper'
import recommend from './childComponent/homeRecommend'
import specialGood from './childComponent/specialGood'
import tabControl from '@/components/content/tabControl/tabControl'
import goodList from '@/components/content/goods/goodList'
import backTop from '@/components/content/backtop/backtop'


export default {
  components:{
    navbar,
    homeSwiper,
    recommend,
    specialGood,
    tabControl,
    goodList,
    scroll,
    backTop
    
  },
  data(){
    return {
      banner:[],
      recommend:[],
      goods:{
        pop:{page:1,list:[]},
        new:{page:1,list:[]},
        sell:{page:1,list:[]}
      },
      currentType: 'pop',
      isShow:false
    }
  },
  mounted(){
    const refresh = this.debonce(this.$refs.scroll.refresh,1);
    this.$bus.$on('itemimgload',() => {
      // console.log('11111111111');
      // this.$refs.scroll.bs.refresh();
      refresh();
    })
  },
  methods:{
    // 防抖动函数
    debonce(func,delay){
      let timer = null;
      // console.log(func);
      return function(...args){
        // console.log(args);
        
        if(timer){
          clearTimeout(timer);
        }
        timer = setTimeout(() => {
          func.call(this,args)
        }, delay);
      }
    },
    pullup(){
      this.getHomeGood(this.currentType);
      // this.$refs.scroll.bs.refresh();
    },
    showbacktop(position){
      // console.log(position);
      
      this.isShow = (-position.y) > 800;
    },
    returnTop(){
      console.log('123');
      this.$refs.scroll.bs.scrollTo(0,-44,600);
    },
    changetg(index){
      switch(index){
        case 0: this.currentType = 'pop';break;
        case 1: this.currentType = 'sell';break;
        case 2: this.currentType = 'new';break;
      }
    },
    getHomeGood(type){
      const page = this.goods[type].page;
      getHomeGoods(type,page).then(res =>{
        console.log(res.data.data.list);

        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page++;
        //完成上拉加载更多
        this.$refs.scroll.bs.finishPullUp();
      }).catch( err =>{
        console.log(err);

      })
    },
    getHomeMultidata(){
      getHomeMultidata().then(res => {
      // console.log(res.data); 
      this.banner = res.data.data.banner.list;
      this.recommend = res.data.data.recommend.list
      console.log(this);  
    })
    }
  },
  created(){
    this.getHomeMultidata();
    this.getHomeGood('pop');
    this.getHomeGood('sell');
    this.getHomeGood('new');
  },
  

}
</script>

<style>

  .navbar{
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  .tabControl{
      position: sticky;
      top: 44px;
      /* 不被遮住 */
      z-index: 9;
  }
  #home{
    height: 100vh;
    position: relative;
  }
  .content{
    position: absolute;
    top: 44px;
    bottom: 49px;
    overflow: hidden;
  }
</style>