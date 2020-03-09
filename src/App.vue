<template>
  <div id="app">
    <mainTabbar></mainTabbar>
    <router-view></router-view>
  </div>
</template>
<script>
import mainTabbar from '@/components/content/mainTababr/mainTabbar'

export default {
  name: 'App',
  components:{
    mainTabbar
  }
}
</script>
<style>
  @import 'assets/css/base.css'
</style>
