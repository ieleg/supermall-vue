<template>
  <div class="all-select">
    <div class="left">
      <CheckButton @click.native="selectAll" class="a1" :isChecked="this.$store.state.cartList.allChecked"></CheckButton>
      <span class="a2">全选</span>
    </div>
    <div class="middle">
      <span>￥:{{totalPrice}}</span>
    </div>
    <div class="right">
      <span>结算({{selectedItem}})</span>
    </div>
  </div>
</template>

<script>
import CheckButton from '@/components/content/checkButton/checkButton'

export default {
  data(){
    return{
      
    }
  },
  components:{
    CheckButton,
  },
  computed:{

    
  },
  methods:{
    selectAll(){
      if(this.$store.state.cartList.allChecked){
        this.$store.state.cartList.allChecked = false;
        this.$store.state.cartList.forEach(item => {
          item.checked = false;
        })
      }else{
        this.$store.state.cartList.allChecked = true;
        this.$store.state.cartList.forEach(item => {
          item.checked = true;
        })
      }
      for(let i of this.$store.state.cartList){
        console.log(i.checked);
        
      }
      console.log(this.$store.state.cartList);
      
    }    
  },
  computed:{
    totalPrice(){
      let price = this.$store.state.cartList.reduce((pre,cur) => {
        if(cur.checked){
          return pre + cur.count*cur.price
        }else{
          return pre
        }
      },0)
      return price.toFixed(2)
    },
    selectedItem(){
      return this.$store.state.cartList.filter((item) => item.checked).length
    }
  }

}
</script>

<style scoped>
  .all-select{
    position: absolute;
    bottom: 49px;
    height: 30px;
    left: 0;
    right: 0;
    background-color: #fff;
    display: flex;
    align-items: center;
    border-top: 1px solid #eee;
  }
  .left{
    display: flex;
    align-items: center;
    width: 60px;
    margin-left: 5px;
  }
  .a1{
    width: 18px;
    height: 18px;
    margin-right: 10px;
  }
  .middle{
    flex: 1;
    text-align: center;
  }
  .right{
    width: 100px;
    line-height: 30px;
    text-align: center;
    border-radius: 25px;
    background-image: linear-gradient(#f62459,#f9690e);
    color: #fff;
    margin: 0 5px 0 5px;
  }

</style>