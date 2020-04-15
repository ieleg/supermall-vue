<template>
  <div>
    <div v-for="(item,index) in items" :key="index">
      {{item}}
    </div>
  </div>
</template>

<script>
export default {
  computed:{
    items(){
      return this.$store.state.cartList
    }
  }
}
</script>

<style>

</style>