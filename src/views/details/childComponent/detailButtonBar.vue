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
    z-index: 9;

    
  }
  .qleft{
    display: flex;
    font-size: 8px;
    align-items: center;
    justify-content: space-around;
    width: 45%;
    text-align: center;

  }
  .qleft div{
    flex: 1;
  }
  .qleft img{
    max-width: 40%;
  }
  .qleft p{
    margin-top: 2 px;
  }

  .qright{
    position: absolute;
    left: 50% ;
    display: flex;
    width: 50%;
    align-items: center;
    line-height: 49px;


     /* flex-wrap: nowrap; */
  }
  .q1,.q2{
    flex: 1;
    margin: 3px 0;
    color: #fff;
    text-align: center;
    
 
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