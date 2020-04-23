<template>
  <navbar>
    <div slot="left" class="left">消息</div>
    <div slot="center" class="center">  
    <input id="q"
     v-model="input1"
     placeholder="请输入内容"
     :class="{focus:isFocus}">
    </div>
    <div slot="right" class="right">
      <img src="~assets/img/plus.svg" alt="">
      <img src="~assets/img/user plus.svg" alt="">
    </div>
  </navbar>
</template>

<script>
import navbar from '@/components/common/navbar/navbar'
export default {
  components:{
    navbar,
  },
  data(){
    return{
      input1:'  ',
      isFocus:false,
    }
  },
  methods:{
    focus(){
      this.focus==!this.focus;
    }
  }
}
</script>

<style scoped>
  .right {
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .left{
    font-weight: lighter;
    font-size: 20px;
  }
  #q:focus{
    border-color: #f2784b;
  }
  #q{
    width: 80%;
    background: url(~assets/img/search.svg) 10px no-repeat;
    border-radius: 20px;
    padding:5px 30px;
    border-style: none;
    border: solid 2px #e8e8e8;
    font-size: 14px;
  }
  .center{

  }
  .icom-search{
   display: inline;
  }
</style>