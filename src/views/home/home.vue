<template>
  <div id="home">
    <navbar class="navbar">
      <div slot="center">购物街</div>
    </navbar>
     <homeSwiper :banner="banner" />
     <recommend :recommend='recommend' />
     <specialGood />
     <tabControl class="tabControl" :title="['流行','新款','精选']"/>
     <goodList :goods="goods['new'].list" />
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

import navbar from '@/components/common/navbar/navbar'
import homeSwiper from './childComponent/homeSwiper'
import recommend from './childComponent/homeRecommend'
import specialGood from './childComponent/specialGood'
import tabControl from '@/components/content/tabControl/tabControl'
import goodList from '@/components/content/goods/goodList'

export default {
  components:{
    navbar,
    homeSwiper,
    recommend,
    specialGood,
    tabControl,
    goodList
  },
  data(){
    return {
      banner:[],
      recommend:[],
      goods:{
        pop:{page:1,list:[]},
        new:{page:2,list:[]},
        sell:{page:3,list:[]}
      }
    }
  },
  methods:{
    getHomeGood(type){
      const page = this.goods[type].page;
      getHomeGoods(type,page).then(res =>{
        console.log(res.data.data.list);

        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page++;
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
  }

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
  }
</style>