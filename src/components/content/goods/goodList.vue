<template>
  <div class="goods">
    <goodItem v-for="(item,index) in goods"  :goodsitem="item" :key="index"></goodItem>
  </div>
</template>

<script>
import goodItem from './goodItem'
export default {
  components:{
    goodItem
  },
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style>
.goods{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2px;
  /* z-index: 9; */
}

  
</style>