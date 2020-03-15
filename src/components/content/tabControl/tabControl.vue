<template>
  <div class="tabControl"> 
    <div class="item" v-for="(item,index) in title" :key="item" :class="{active:index===currentIndex}"
    @click="change(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      currentIndex:0
    }
  },
  methods:{
    change(index){
      this.currentIndex=index;
    }
  },
  props:{
    title:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style>
  .active span{
    color: var(--color-tint);
    padding:0 5px 8px 5px;
    border-bottom: 3px solid var(--color-tint);

  }
  .item{
    flex:1;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
  }
  .tabControl{
    margin-top: 10px;
    display: flex;
    text-align: center;
    font-size: 14px;
    /* position: sticky 44px; */
  }
  /* .tabControl span{
    
  } */
</style>