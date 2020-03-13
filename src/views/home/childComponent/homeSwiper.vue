<template>
  <swiper class="home-swiper">
    <swiper-item v-for="item in banner" :key="item.image">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
    import Swiper from '@/components/common/swiper/swiper';
    import SwiperItem from '@/components/common/swiper/swiperItem';
    export default {
        name: "HomeSwiper",
        props: {
            banner:{
                type:Array,
                default() {
                    return []
                }
            }
        },
        components:{
            Swiper,SwiperItem
        }
    }
</script>

<style scoped>
</style>