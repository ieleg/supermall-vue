<template>
  <div class="nav-bar">
    <div class="left"><slot name='left'></slot></div>
    <div class="center"><slot name='center'></slot></div>
    <div class="right"><slot name='right'></slot></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .nav-bar{
    display: flex;
    /* 导航的高度一般都为44 */
    /* height: 44px; */
    line-height: 44px;
    height: 44px;
    text-align: center;
    box-shadow: 0 1px 1px 1px rgba(100, 100, 100, 0.1);
  }
  .left, .right{
    width: 60px;
    /* background-color: #e08d8d; */
  }
  /* center将剩余部分全部占据 */
  .center{
    flex:1;
    /* background-color: #0525f5; */
  }
</style>