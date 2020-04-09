<template>
  <div id="details">
    <detailNavbar @titleClick="returnPosiation"></detailNavbar>
    <scroll :pro='1' class="content" ref="scroll">
      <detailSwiper :topimg="topImg"></detailSwiper>
      <detailBaseInfo :goods='goodsInfo'></detailBaseInfo>
      <detailShopInfo :shop='shop'></detailShopInfo>
      <detailImgInfo :info='detailImgInfo'></detailImgInfo>
      <detailParams ref="detailParams" :item-params='itemParams'></detailParams>
      <comments ref="comments" :comment='commentInfo'></comments>
      <goodList ref="goodList" :goods='recommend'></goodList>
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
import comments from './childComponent/comments'
import goodList from '@/components/content/goods/goodList'
 


import scroll from '@/components/common/scroll/scroll'

import {getDetail,goods,getRecommend} from '@/network/details'
import {request2} from '@/network/request'
export default {
  name:'details',
  components:{
    detailNavbar,detailSwiper,detailBaseInfo,scroll,detailShopInfo,detailImgInfo,detailParams,comments,
    goodList
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
    returnPosiation(index){
      this.$refs.scroll.bs.scrollTo(0,-this.titleYs[index],100);
    }
  },
  data(){
    return {
      iid:{},
      topImg:[],
      goodsInfo: {},
      shop: {},
      detailImgInfo: {},
      itemParams:{},
      commentInfo:{},
      recommend:[],
      titleYs:[0],
    }
  },
  // methods:{

  // },
  mounted(){
    //延时初步解决
    setTimeout(() => {
    this.titleYs.push(this.$refs.comments.$el.offsetTop);
    this.titleYs.push(this.$refs.goodList.$el.offsetTop);
    this.titleYs.push(this.$refs.detailParams.$el.offsetTop);
    }, 200);
    console.log(this.titleYs);
    

    const refresh = this.debonce(this.$refs.scroll.refresh,50);
    this.$bus.$on('detailItemimgload',() => {
      // console.log('11111111111');
      // this.$refs.scroll.bs.refresh();
      refresh();     
    })
    setTimeout(() => {
    }, 200); 
    // console.log(request2());
    
    
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
      // 取出评论信息,只取一条
      if(res.result.rate.cRate !== 0) {
        this.commentInfo = res.result.rate.list[0]; 
      }
      console.log(this.commentInfo); 
    })
   // 请求推荐数据
   getRecommend().then(res => {
     console.log(res);
     this.recommend = res.data.list
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