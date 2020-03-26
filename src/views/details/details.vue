<template>
  <div id="details">
    <detailNavbar></detailNavbar>
    <detailSwiper :topimg="topImg"></detailSwiper>

  </div>
</template>

<script>
import detailNavbar from './childComponent/detailNavbar'
import detailSwiper from './childComponent/detailSwiper'
import {getDetail} from '@/network/details'
export default {
  name:'details',
  components:{
    detailNavbar,detailSwiper
  },
  data(){
    return {
      iid:{},
      topImg:[]
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
      
      
    })
  }

}
</script>

<style>

</style>