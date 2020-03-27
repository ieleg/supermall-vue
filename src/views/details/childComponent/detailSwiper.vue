<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="item in topimg" :key="item">
        <img  :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
    import Swiper from '@/components/common/swiper/swiper';
    import SwiperItem from '@/components/common/swiper/swiperItem';
export default {
  props:{
    topimg:{
      type:Array,
      default(){
        return [];
      }
    }
  },
  components:{
    Swiper,SwiperItem
  },
  methods:{

  }

}
</script>

<style scoped>
.detail-swiper{
  height: 300px;
  overflow: hidden;
}

</style>