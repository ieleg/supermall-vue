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
      probeType:3,
      pullUpLoad:true,
      click:true
    })
    // this.bs.on('scroll',position => {
    //   // console.log(position);
    // })
    // this.bs.on('pullingUp',() => {
    //   console.log('下来加载');
    //   bs.finishPullUp();
    // })
  }
}
</script>

<style>

</style>