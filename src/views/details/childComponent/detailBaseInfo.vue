<template>
  <div v-if="Object.keys(goods).length!==0" class="base-info">
    <div class="info-title">{{goods.desc}}</div>
    <div class="info-price">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span v-if="goods.discount" class="discount">{{goods.discount}}</span>

    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span class="service-item" v-for="index in goods.services.length-1" 
      :key="index">
        <img :src="goods.services[index-1].icon" alt="">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    goods:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .base-info{
    margin-top: 6px;
  }
  .info-title{
    font-weight: bold;
  }
  .info-price{
    position: relative;
    height: 40px;
    text-align: middle;
    box-shadow: 0 1px 1px rgba(100, 100, 100, .2);
  }
  .n-price{
    line-height: 40px;
    font-size: 22px;
    margin-right: 15px;
    color: var(--color-tint);
    margin-left: 8px;
  }
  .o-price{
    text-decoration:line-through;
    font-size: 14px;
    margin-right: 15px;
  }
  .discount{
    border-radius: 25px;
    background-color: var(--color-tint);
    display: inline-block;
    color: #ffff;
    position: absolute;
    padding: 3px 10px 3px 10px;
    top: 5px;
    height: 20px;
    
    font-size: 14px;
  }
  .info-other{
    display: flex;
    height: 30px;
    justify-content:space-between;
    /* box-shadow: 0 3px 1px rgba(100, 100, 100, .2); */
    align-items: center;
    font-weight: lighter;
    font-size: 14px;
  }
  .info-service{
    display: flex;
    justify-content:space-between;
    height: 50px;
    box-shadow: 0 2px 1px rgba(100, 100, 100, .1);
    font-size: 14px;
  }
  .info-service span{
    line-height: 50px;
  }
  .info-service img{
    width: 15px;
  }
</style>