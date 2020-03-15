<template>
  <div id='tab'>
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  #tab{
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f6f6f6;
    box-shadow: 0 -5px 1px rgba(146, 171, 173, 0.2);
    z-index: 9;
  
  }
</style>