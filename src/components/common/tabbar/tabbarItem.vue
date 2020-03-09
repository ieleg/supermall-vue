<template>
  <div class="tab-item" @click="itemClick">
    <div v-if="isActive">
      <slot name='img'></slot>
    </div>
    <div v-else>
      <slot name='img-active'></slot>
    </div>
    <div :style='activeStyle'>
      <slot name="text"></slot>
    </div>    
  </div>
</template>

<script>
export default {
  data(){
    return {
    
    }
  },
  computed:{
    isActive(){
      //不包含this.path,返回true
      return this.$route.path.indexOf(this.path) == -1
    },
    activeStyle(){
      return !this.isActive? {color:this.activeColor}:{};
    }
  },
  props:{
    path: String,
    activeColor:{
      type: String,
      default: '#f96db3'
    }
  },
  methods:{
    itemClick(){
      this.$router.push(this.path);
    }
  }
}
</script>

<style>

  .tab-item{
    flex: 1;
    text-align: center;
    height: 49px;
  }
  .tab-item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
  }
</style>