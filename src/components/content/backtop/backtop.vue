<template>
  <div class="backTop" >
    <img src="~assets/img/common/back-top2.svg" alt="">
  </div>
</template>

<script>
export default {
  // methods:{
  //   backClick(){
  //     console.log('我是内部的');
  //     this.$emit('text')
  //   }
  // }
}
</script>

<style scoped>
  .backTop{
    height: 32px;
    position: fixed;
    right: 10px;
    bottom: 60px;
    background-color: #fff;
    box-shadow: 2px 2px 3px 2px rgba(100, 100, 100, 0.5);
    border-radius: 100%;
  }
  .backTop:active{
    background-color: var(--color-tint);
  }
</style>