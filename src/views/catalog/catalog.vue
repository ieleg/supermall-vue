<template>
  <div class="wrapp">
    <CartNavbar></CartNavbar>
    <div class="mes">
      <span>{{mesCount}}条未读消息</span>
      <img src="~assets/img/清除.svg" alt="">
      <span>清除未读消息</span>
    </div>
    <div class="card">
      <div class="wuliu">
        <img src="~assets/img/物流.svg" alt="">
        <span>交易物流</span>
      </div>
      <div class="huodong">
        <img src="~assets/img/活动.svg" alt="">
        <span>活动优惠</span>
      </div>
    </div>
  </div>
</template>

<script>
import CartNavbar from './childComponent/CartTabbar'
export default {
  data(){
    return{
      mesCount:0,
    }
  },
  components:{
    CartNavbar
  },
  methods:{

  },
  mounted(){
  }
}
</script>
<style scoped>
  .mes{
    height: 30px;
    line-height: 30px;
    font-size: 12px;
    font-weight: 200;
    margin-left: 20px;
  }
  .mes img{
    vertical-align: middle;
    margin-left: 10px;
  }
  .card{
    height: 80px;
    display: flex;
    /* align-items: center; */
    justify-content: space-around;
    border-radius: 20px;
    margin: 10px 20px;
    box-shadow: 1px 5px 1px rgba(242, 241, 239, .8);
    font-weight: bold;
    line-height: 80px;
    text-align: center;
    border: solid 2px rgba(218, 223, 225, 1);
    /* background-color: #f2f1ef; */
  }
  .card img{
    width: 20px;
    border-radius: 50%;
    vertical-align: middle;
    margin-right: 10px;
  }
</style>