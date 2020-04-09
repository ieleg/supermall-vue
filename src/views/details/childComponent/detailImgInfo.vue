<template>
  <div class="goods-info">
    <div class="info-desc clear-fix">
      <div class="start"></div>
      <div class="desc">{{info.desc}}</div>
      <div class="end"></div>
    </div>

    <div v-for="item in info.detailImage" :key="item.key">
      <div class="info-key">{{item.key}}</div>
      <div class="info-list">
        <img v-for="(item,index) in item.list" :key="index" :src="item" alt="" @load="imgLoad">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    info:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    imgLoad(){
      this.$bus.$emit('detailItemimgload');
      console.log('imgInfo');
      
    },
  }, 
}
</script>

<style scoped>
  .goods-info{
    padding: 20px 0;
    border-bottom: 5px solid #f2f5f8;
  }
  .start,.end{
    width: 90px;
    height: 1px;
    background-color: #a3a3a5;
    position: relative;
  }
  .start{
    float: left;
  }
  .end{
    float: right;
  }
  .start::before,.end::after{
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: #333;
    bottom: 0;
  }
  .end::after{
    right: 0;
  }
  .desc{
    padding: 20px 0;
    font-size: 14px;
  }
  .info-key{
    color: #000;
  }
  img{
    width: 100%;
  }
</style>