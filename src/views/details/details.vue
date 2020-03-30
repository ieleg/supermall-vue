<template>
  <div id="details">
    <detailNavbar></detailNavbar>
    <scroll :pro='1' class="content" ref="scroll">
      <detailSwiper :topimg="topImg"></detailSwiper>
      <detailBaseInfo :goods='goodsInfo'></detailBaseInfo>
      <detailShopInfo :shop='shop'></detailShopInfo>
      <detailImgInfo :info='detailImgInfo'></detailImgInfo>
      <detailParams :item-params='itemParams'></detailParams>
    </scroll>
  </div>
</template>

<script>
import detailNavbar from './childComponent/detailNavbar'
import detailSwiper from './childComponent/detailSwiper'
import detailShopInfo from './childComponent/detailShopInfo'
import detailBaseInfo from './childComponent/detailBaseInfo'
import detailImgInfo from './childComponent/detailImgInfo'
import detailParams from './childComponent/detailParams'


import scroll from '@/components/common/scroll/scroll'

import {getDetail,goods} from '@/network/details'
export default {
  name:'details',
  components:{
    detailNavbar,detailSwiper,detailBaseInfo,scroll,detailShopInfo,detailImgInfo,
    detailParams
  },
  methods:{
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
  },
  data(){
    return {
      iid:{},
      topImg:[],
      goodsInfo: {},
      shop: {},
      detailImgInfo: {},
      itemParams:{}
    }
  },
  mounted(){
    const refresh = this.debonce(this.$refs.scroll.refresh,50);
    this.$bus.$on('itemimgload',() => {
      // console.log('11111111111');
      // this.$refs.scroll.bs.refresh();
      refresh();
    })
    setTimeout(() => {
    }, 200);    
  },

  created(){
    // console.log(this.$route);
    //1保存传入的iid
    this.iid = this.$route.params.iid;
    //2得到商品信息
    getDetail(this.iid).then(res => {
      console.log(res);
      this.topImg = res.result.itemInfo.topImages;
      // console.log(this.topImg);
       // 3创建商品对象
      this.goodsInfo = new goods(res.result.columns,res.result.itemInfo,res.result.shopInfo.services);
      // 4取出店铺信息
      this.shop = res.result.shopInfo;
      // 5取出商品图片详情信息
      this.detailImgInfo = res.result.detailInfo;
      // 6取出参数信息
      this.itemParams = res.result.itemParams;
      console.log(this.goodsInfo);
      
    })
   

  }

}
</script>

<style scoped>
  #details{
    height: 100vh;
    position: relative;
    z-index: 1;
    background-color: #fff;
  }
  .content{
    position: absolute;
    top:44px;
    bottom: 0px;
    overflow: hidden;
  }
</style>