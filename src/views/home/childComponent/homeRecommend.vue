<template>
  <div class="recommend">
    <div class="recommendItem" v-for="item in recommend" :key="item.image">
      <a :href='item.link'>
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    recommend:{
      type: Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style>
  .recommend{
    display: flex;
    width: 100%;
    /* margin:0 auto; */
    text-align: center;
    font-size: 12px;
    padding-top: 8px;
    padding-bottom: 15px;
    box-shadow: 5px 0 3px rgba(100, 100, 100, 0.8c);
  }
  .recommendItem{
    flex: 1;
    /* margin:0 auto; */
  }
  .recommend img{
    width: 68px;
    height: 68px;
    margin-bottom: 8px;
  }
</style>