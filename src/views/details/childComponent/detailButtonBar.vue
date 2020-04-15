<template>
  <div class="buttonBar">
    <div class="qleft">
      <div>
        <img src="~assets/img/details/店铺.svg" alt="">
        <p>店铺</p>
      </div>
      <div>
        <img src="~assets/img/details/客服.svg" alt="">
        <p>客服</p>
      </div>
      <div>
        <img src="~assets/img/details/收藏.svg" alt="">
        <p>收藏</p>
      </div>
    </div>
    <div class="qright">
      <div class="q1" @click="addCart">加入购物车</div>
      <div class="q2">立即购买</div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    addCart(){
      this.$emit("addCart");
    }
  }

}
</script>

<style scoped>
  .buttonBar{
    height: 49px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #ffffff;
    display: flex;
    
  }
  .qleft{
    display: flex;
    font-size: 8px;
    align-items: center;
    justify-content: space-around;
    width: 40%;
   text-align: center;

  }
  .qleft img{
    width: 75%;
  }
  .qleft p{
    margin-top: 2 px;
  }

  .qright{
    display: flex;
    width: 60%;
    align-items: center;


     /* flex-wrap: nowrap; */
  }
  .q1,.q2{
    padding: 5px 13px;
    color: #fff;
    line-height: 35px;
  }
  .q1{
 
    font-size: 15px;
    background-image: linear-gradient(to left,#f1828d, #ec644b);
    border-radius: 25px 0 0 25px;

  }
  .q2{
    background-image: linear-gradient(to left,#ff9478,#e9d460);
    border-radius: 0 25px 25px 0;
  }


</style>