<template>
  <div id="details">
    <detailNavbar></detailNavbar>
    <scroll :pro='1' class="content">
      <detailSwiper :topimg="topImg"></detailSwiper>
      <detailBaseInfo :goods='goodsInfo'></detailBaseInfo>
      <detailShopInfo :shop='shop'></detailShopInfo>
    </scroll>
  </div>
</template>

<script>
import detailNavbar from './childComponent/detailNavbar'
import detailSwiper from './childComponent/detailSwiper'
import detailShopInfo from './childComponent/detailShopInfo'

import detailBaseInfo from './childComponent/detailBaseInfo'
import scroll from '@/components/common/scroll/scroll'

import {getDetail,goods} from '@/network/details'
export default {
  name:'details',
  components:{
    detailNavbar,detailSwiper,detailBaseInfo,scroll,detailShopInfo
  },
  data(){
    return {
      iid:{},
      topImg:[],
      goodsInfo: {},
      shop: {}
    }
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
      this.shop = res.result.shopInfo;
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