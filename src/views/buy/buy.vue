<template>
  <div>
    <navbar class="navbar"><div slot="center">购物车({{itemLength}})</div></navbar>
    <itemList></itemList>
  </div>
</template>

<script>
import navbar from '@/components/common/navbar/navbar'
import itemList from './childComponent/itemList'

export default {
  data(){
    return{

    }
  },
  components:{
    navbar,itemList,
  },
  computed:{
    itemLength(){
      return this.$store.state.cartList.length;
    }
  }
}
</script>

<style scoped>
  .navbar{
    background-color: var(--color-tint);
    color: #fff;
  }
</style>>