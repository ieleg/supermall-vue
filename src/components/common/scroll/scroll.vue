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
  mounted(){
    this.bs = new BScroll('.wrapper',{
      probeType:2,
      pullUpLoad:true,
      click:true
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
      console.log('shuaxin');
      
      this.bs&&this.bs.refresh();
    }
  }
}
</script>

<style>

</style>