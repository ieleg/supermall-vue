<template>
  <div>
    <navbar>
      <div slot="left" class="back">
        <img src="~assets/img/details/back.svg" alt="">
      </div>
      <div class="center" slot="center">
        <div v-for="(item,index) in mes" class="mes" :key="item" 
        :class="{active:index===currentIndex}" @click="change(index)">{{item}}</div>
      </div>
    </navbar>
  </div>
</template>

<script>
import navbar from '@/components/common/navbar/navbar'

export default {
  components:{
    navbar,
  },
  data(){
    return{
      mes:['商品','评论','推荐','参数'],
      currentIndex:0
    }
  },
  methods:{
    change(index){
      this.currentIndex = index;
    }
  }
}
</script>

<style scoped>
  .back{
    position: relative;
    height: 44px;
    text-align: center;
  }
  img{
    height: 20px;
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
  }
  .center{
    display: flex;
  }
  .mes{
    flex: 1;
    font-size: 14px;
  }
  .active{
    color:var(--color-tint);
  }
  
</style>