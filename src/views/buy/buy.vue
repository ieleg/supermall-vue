<template>
  <div id="buy">
    <navbar class="navbar"><div slot="center">购物车({{itemLength}})</div></navbar>
    <scroll :pro='1' class="content">
      <itemList></itemList>
    </scroll>
    <allSelect @click.native="selectAll"></allSelect>
  </div>
</template>

<script>
import navbar from '@/components/common/navbar/navbar'
import itemList from './childComponent/itemList'
import scroll from '@/components/common/scroll/scroll'
import allSelect from './childComponent/allSelect'
export default {
  data(){
    return{
      checked:false,
    }
  },
  methods:{
    selectAll(){
      this.$store.state.cartList.forEach(item => {
        item.checked = !this.checked;
      })
    }
  },
  components:{
    navbar,itemList,scroll,allSelect,
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
    width: 100vw;
    top:44px;
    bottom: 79px;
    overflow: hidden;
  }
  .navbar{
    background-color: var(--color-tint);
    color: #fff;
  }
</style>>