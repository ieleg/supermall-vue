<template>
  <div id="home">
    <navbar class="navbar">
      <div slot="center">购物街</div>
    </navbar>
     <homeSwiper :banner="banner" />
  </div>
</template>

<script>
import {getHomeMultidata} from '@/network/home'
import navbar from '@/components/common/navbar/navbar'
import homeSwiper from './childComponent/homeSwiper'
export default {
  components:{
    navbar,
    homeSwiper
  },
  data(){
    return {
      banner:[],
      recommend:[]
    }
  },
  created(){
    getHomeMultidata().then(res => {
      // console.log(res.data); 
      this.banner = res.data.data.banner.list;
      this.recommend = res.data.data.recommend.list
      console.log(this.banner);
      
    })
  }
}
</script>

<style>
  .navbar{
    background-color: var(--color-tint);
    color: #fff;
  }
</style>