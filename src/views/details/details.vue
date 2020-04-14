<template>
  <div id="details">
    <detailNavbar @titleClick="returnPosiation" ref="navbar"></detailNavbar>
    <scroll :pro='1' class="content" ref="scroll" @scrollon="showbacktop">
      <detailSwiper :topimg="topImg"></detailSwiper>
      <detailBaseInfo :goods='goodsInfo'></detailBaseInfo>
      <detailShopInfo :shop='shop'></detailShopInfo>
      <detailImgInfo :info='detailImgInfo' @detailItemimgload="detailItemimgload"></detailImgInfo>
      <detailParams ref="detailParams" :item-params='itemParams'></detailParams>
      <comments ref="comments" :comment='commentInfo'></comments>
      <goodList ref="goodList" :goods='recommend'></goodList>
    </scroll>   
    <backTop @click.native="returnTop" v-show="isShow"/>  
    <detailButtonBar @addCart="addCart"></detailButtonBar>  
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
import backTop from '@/components/content/backtop/backtop'
import detailButtonBar from './childComponent/detailButtonBar'


import scroll from '@/components/common/scroll/scroll'

import {getDetail,goods,getRecommend} from '@/network/details'
import {request2} from '@/network/request'
export default {
  name:'details',
  components:{
    detailNavbar,detailSwiper,detailBaseInfo,scroll,detailShopInfo,detailImgInfo,detailParams,comments,
    goodList,backTop,detailButtonBar,
  },
  methods:{
    addCart(){
      const obj = {};
      obj.title = this.goodsInfo.title;
      obj.price = this.goodsInfo.newPrice;
      obj.img = this.topImg[0];
      obj.iid = this.iid;
      obj.count = 1;

      //通过mutation修改state
      this.$store.commit('addCart',obj);
    },
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
    },
    //图片加载后
    detailItemimgload(){
      //防抖刷新
      this.newFresh();
      //防抖获取位置
      this.getThemeTop();
    },
    showbacktop(position){
      // console.log(position);
      
      this.isShow = (-position.y) > 800;
      // 动态显示标题
      if(-position.y>=this.titleYs[1]&&-position.y<this.titleYs[2]){
        this.$refs.navbar.currentIndex = 1;
      }else if(-position.y>=this.titleYs[2]&&-position.y<this.titleYs[3]){
        this.$refs.navbar.currentIndex = 2;
      }else if(-position.y>=this.titleYs[3]){
        this.$refs.navbar.currentIndex = 3;
      }else{
        this.$refs.navbar.currentIndex = 0;
      }
      
    },
    returnTop(){
      this.$refs.scroll.bs.scrollTo(0,0,600);
    },
  
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
      titleYs:[],
      getThemeTop:null,
      newFresh:null,
      isShow: false,
    }
  },
  // methods:{

  // },
  mounted(){
    
  },
  updated(){

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
   //防抖获得位置
    this.getThemeTop = this.debonce(() => {
    this.titleYs = [];
    this.titleYs.push(0);
    this.titleYs.push(this.$refs.detailParams.$el.offsetTop);
    this.titleYs.push(this.$refs.comments.$el.offsetTop);
    this.titleYs.push(this.$refs.goodList.$el.offsetTop);
    console.log(this.titleYs);
    },100);
    this.newFresh = this.debonce(() => {
    this.$refs.scroll.refresh();
    },100);

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
    bottom: 49px;
    overflow: hidden;
  }
</style>