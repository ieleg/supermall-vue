<template>
  <div id="details">
    <detailNavbar></detailNavbar>
    <detailSwiper :topimg="topImg"></detailSwiper>
    <detailBaseInfo :goods='goodsInfo'></detailBaseInfo>

  </div>
</template>

<script>
import detailNavbar from './childComponent/detailNavbar'
import detailSwiper from './childComponent/detailSwiper'
import detailBaseInfo from './childComponent/detailBaseInfo'
import {getDetail,goods} from '@/network/details'
export default {
  name:'details',
  components:{
    detailNavbar,detailSwiper,detailBaseInfo
  },
  data(){
    return {
      iid:{},
      topImg:[],
      goodsInfo: {}
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
      this.goodsInfo = new goods(res.result.columns,res.result.itemInfo,res.result.shopInfo.services)
      console.log(this.goodsInfo);
      
    })
   

  }

}
</script>

<style>

</style>