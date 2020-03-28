<template>
  <div class='shop-info'>
    <div class="shop-top">
      <img :src="shop.shopLogo" alt="">
      <span class="title">{{shop.name}}</span>
    </div>
    <div class="shop-middle">
      <div class="item-left">
        <div class="left">
          <span>{{shop.cSells|toWan}}</span>
          <p>总销量</p>
        </div>
        <div class="left">
          <span>{{shop.cGoods }}</span>
          <p>全部宝贝</p>
        </div>
      </div>
      <div class="item-right">
        <table>
          <tr class="righ" v-for="item in shop.score" :key="item.name">
            <td class="t1">{{item.name}}</td>
            <td class="t2" :class="{clr2:!item.isBetter}">{{item.score}}</td>
            <td class="t3" :class="{clr3:!item.isBetter}">{{item.isBetter?'高':'低'}}</td>
          </tr>
        </table>
      </div>
  
    </div>
     <div class="item-bottom">
        <span>进店逛逛</span>
    </div>   
  </div>
</template>

<script>
export default {
  props:{
    shop:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  filters:{
    toWan(value){
      // let result = value
      if(value>10000){
        return (value/10000).toFixed(1)+'万'
      }
    }
  }
}
</script>

<style scoped>
  .shop-info{
    padding-bottom: 20px;
    box-shadow: 0px 3px 1px rgba(100, 100, 100, .2);
  }
  .shop-top{
    display: flex;
    height: 60px;
    align-items: center;
  }
  .title{
    font-size: 20px;
    margin-left: 30px;
  }
  .shop-top img{
    margin-left: 15px;
    width: 50px;
  }
  .shop-middle{
    position: relative;
    height: 70px;
    display: flex;
    align-items: center;  
  }
  .item-left{
    width: 50%;
    position: absolute;
    display: flex;
    left: 0;
    box-shadow: 1px 0px 1px rgba(100, 100, 100, .2);
    
  }
  .left{
    flex: 1;
    text-align: center;
  }
  .left span{
    font-size: 20px;
  }
  .left p{
    font-size: 14px;
    margin-top: 10px;
  }
  .item-right{
    width: 50%;
    position: absolute;
    right: 0;
    font-size: 14px;
  }
  td{
    height: 20px;
  }
  .t1{
    width: 80px;
    text-align: center;
  }
  .t2 {
    width:50px;
    color: #c23f3f;
    /* text-align: left;  */
  }
  .t3{
    background-color: #c23f3f;
    color: #ffffff;

  }
  .righ{
    display: flex;
  }
  .item-bottom{
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 30px;
    margin: 0 auto;
    background-color: var(--color-tint);
    border-radius: 10px;
    color: black;
    box-shadow: 0px 1px 1px rgba(100, 100, 100, .2);
  }
  .clr2{
    color: rgb(116, 158, 73);
  }
  .clr3{
    color: #ffffff;
    background-color: rgb(116, 158, 73);
  }
</style>