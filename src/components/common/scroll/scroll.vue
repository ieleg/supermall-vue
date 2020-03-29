<template>
  <div class="wrapper" ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  data(){
    return {
      bs:null
    }
  },  
  props:{
    pro:{
      type:Number,
      default(){
        return 1
      }
    }
  },
  mounted(){
    this.bs = new BScroll('.wrapper',{
      probeType:2,
      pullUpLoad:true,
      click:true,
      // momentumLimitDistance:10,
      swipeTime:800
      // HWCompositing:true,
      // deceleration:0.0007,
      // flickLimitTime:100,
      // momentumLimitTime:1000
    })

    this.bs.on('scroll',position => {
      this.$emit('scrollon',position)
    })    
    // 监听上拉事件 
    this.bs.on('pullingUp',() => {
      console.log('shan啦加载更多');
      this.$emit('pullup');
      
    })      
    // this.bs.on('scroll',position => {
    //   // console.log(position);
    // })
    // this.bs.on('pullingUp',() => {
    //   console.log('下来加载');
    //   bs.finishPullUp();
    // })
  },
  methods:{
    refresh(){
      console.log('图片加载');
      
      this.bs&&this.bs.refresh();
    }
  }
}
</script>

<style>

</style>