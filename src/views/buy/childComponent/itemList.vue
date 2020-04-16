<template>
  <div>
    <itemBlock v-for="(item,index) in items" :key="index" :itemInfo="item">
 
    </itemBlock>
  </div>
</template>

<script>
import itemBlock from './itemBlock'
export default {
  components:{
    itemBlock,
  },
  computed:{
    items(){
      return this.$store.state.cartList
    }
  }
}
</script>

<style>

</style>