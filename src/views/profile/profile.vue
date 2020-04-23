<template>
  <div>
    <div>
      <div class="q1">
        <img src="~assets/img/用户.svg" alt="">
        <span>皮皮牛是个好孩子</span>
      </div>
      <div class="r1">
        <div>
          <span>4</span>
          <p>收藏夹</p>
        </div>

        <div>
          <span>12</span>
          <p>关注店铺</p>
        </div>
        <div>
          <span>72</span>
          <p>足迹</p>
        </div>
        <div>
          <span>0</span>
          <p>红包卡券</p>
        </div>
      </div>
    </div>
    <div class="q2">
      <div class="qq2">
        <div>
          <p>红包省钱卡</p>
          <p class="w1">91元红包 ></p>
        </div>

      </div>
      <img src="~assets/img/红包.svg" alt="">
      <div class="r2 qq2">
        <div>
         <p>红包签到</p>
         <p class="w1">立即领取 ></p>
        </div>
      </div>
      <img src="~assets/img/红包2.svg" alt="">
      <div>
        <p>会员中心</p>
        <p class="w1">最新会员权益 ></p>
      </div>
    </div>
    <div class="q3">
      <div class="qq">
        <span class="q31">我的订单</span><span class="q32">查看全部订单 ></span>
      </div>
      <div class="order-op">
        <div>
          <img src="~assets/img/待付款.svg" alt="">
          <p>待付款</p>
        </div>
        <div>
          <img src="~assets/img/待发货.svg" alt="">
          <p>待发货</p>
        </div>
        <div>
          <img src="~assets/img/待收货.svg" alt="">
          <p>待收货</p>
        </div>
        <div>
          <img src="~assets/img/评价.svg" alt="">
          <p>评价</p>
        </div>
        <div>
          <img src="~assets/img/售后.svg" alt="">
          <p>退款/售后</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      
    }
  }
}
</script>

<style scoped>
.qq{
  height: 30px;
  vertical-align: middle;
  border-radius: 20px 20px 0 0;
  background-color:rgba(238, 238, 238, .5);
  position: relative;
  border-bottom: solid 1px rgba(171, 183, 183, .4);
}
.q31{
  font-size: 16px;
  font-weight: bold;
  line-height: 30px;
  margin-left: 20px;
}
.q32{
  font-weight: 100;
  font-size: 10px;
  position: absolute;
  right: 20px;
  line-height: 30px;

}
.q3{
    margin: 10px 10px;

}
.order-op{
  display: flex;
  justify-content: space-around;
  font-size: 14px;
  text-align: center;
  align-items: center;
  height: 80px;
  border-radius: 0 0 20px 20px;

  background-color:rgba(238, 238, 238, .5);
}
.w1{
  margin-top: 5px;
  font-size: 10px;
  color: #f2784b ;
}
.q2 img{
  width: 30px;
  border-right: solid 1px rgba(191, 191, 191, 1);
  margin-left: -10px;
}
.r2{
  display: inline;
}

.q2{
  height: 60px;
  display: flex;
  justify-content: space-around;
  font-size: 13px;
  align-items: center;
  border-radius: 20px;
  margin: 0 10px;
  background-color:rgba(238, 238, 238, .5);
}
.q1 span{
  line-height: 50px;
  font-weight: 666;
}
.q1{
  vertical-align: middle;
  height: 50px;

}
.q1 img{
  width: 40px;
  vertical-align: middle;
  margin: 0 15px 0 10px;
}
.r1{
  display: flex;
  height: 60px;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
}
</style>