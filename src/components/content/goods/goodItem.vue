<template>
  <div class="gooditem">
    <img :src="goodsitem.show.img" alt="" @load="imgUpdate">
    <div class="itemInfo">
      <p>{{goodsitem.title}}</p>
      <span class="price">{{(goodsitem.price)}}</span>
      <span class="collect">{{goodsitem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    goodsitem:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    imgUpdate(){
      this.$bus.$emit('itemimgload');
    }
  }
}
</script>

<style scoped>
  .gooditem{
    width: 32%;
    padding-bottom: 40px;
    position: relative;
  }
  .gooditem img{
    width: 100%;
    border-radius: 3px;
  }
  .itemInfo{
        font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }
  .itemInfo p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
  .itemInfo .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }
  .itemInfo .collect {
    position: relative;
  }
  .itemInfo .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>