<template>
  <tabbar class="tabbar">
      <tabbarItem path='/home' >
        <img slot='img' src="~assets/img/tabbar/home.svg" alt="">
        <img slot='img-active' src="~assets/img/tabbar/home-active.svg" alt="">
        <div slot='text'>首页</div>
      </tabbarItem>
      <tabbarItem path='/catalog' >
        <img slot='img' src="~assets/img/tabbar/catalog.svg" alt="">
        <img slot='img-active' src="~assets/img/tabbar/catalog-active.svg" alt="">

        <div slot='text'>消息</div>
      </tabbarItem>
      <tabbarItem path='/buy'>
        <img slot='img' src="~assets/img/tabbar/buy.svg" alt="">
        <img slot='img-active' src="~assets/img/tabbar/buy-active.svg" alt="">

        <div slot='text'>购物车</div>
      </tabbarItem>
      <tabbarItem path='/profile'>
        <img slot='img' src="~assets/img/tabbar/profile.svg" alt="">
        <img slot='img-active' src="~assets/img/tabbar/profile-active.svg" alt="">

        <div slot='text'>我的</div>
      </tabbarItem>
    </tabbar>
</template>

<script>
  import tabbar from '@/components/common/tabbar/tabbar.vue'
  import tabbarItem from '@/components/common/tabbar/tabbarItem.vue'

export default {
  components:{
    tabbar,
    tabbarItem
  }
}
</script>

<style>

</style>