<template>
  <div id="buy">
    <navbar class="navbar"><div slot="center">购物车({{itemLength}})</div></navbar>

      <itemList></itemList>

  </div>
</template>

<script>
import navbar from '@/components/common/navbar/navbar'
import itemList from './childComponent/itemList'
import scroll from '@/components/common/scroll/scroll'

export default {
  data(){
    return{

    }
  },
  components:{
    navbar,itemList,scroll,
  },
  computed:{
    itemLength(){
      return this.$store.state.cartList.length;
    }
  }
}
</script>

<style scoped>
  #buy{
    height: 100vh;
    position: relative;
  }
  .content{
    position: absolute;
    top:44px;
    bottom: 49px;
    overflow: hidden;
  }
  .navbar{
    background-color: var(--color-tint);
    color: #fff;
  }
</style>>