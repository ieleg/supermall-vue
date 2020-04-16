<template>
  <div class="checkButton" :class="{Checked:isChecked}">
    <img src="~assets/img/buy/check.svg" alt="">
  </div>
</template>

<script>
export default {
  props:{
    isChecked:{
      type:Boolean,
      default(){
        return false
      }
    }
  }
}
</script>

<style>
  .checkButton{
    background-color:#e6e6e6;
    border-radius: 50%;
    /* border: 1px solid #aaa; */
  }
  .checkButton img{
    width: 18px;
  }
  .Checked{
    background-color: var(--color-tint);
  }
</style>