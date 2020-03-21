<template>
  <swiper class="home-swiper">
    <swiper-item v-for="item in banner" :key="item.image">
      <a :href="item.link">
        <img @load="imgUpdate" :src="item.image" alt="">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
    import Swiper from '@/components/common/swiper/swiper';
    import SwiperItem from '@/components/common/swiper/swiperItem';
    export default {
        name: "HomeSwiper",
        data(){
          return{
            isLoad : false
          }
        },
        methods:{
          imgUpdate(){
            // 只发射一次
            if(!this.isLoad){
              console.log('轮播图加载完成');
              this.$emit('swiperupdate');
              this.isLoad = true;
            }
          }
        },
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
  .home-swiper{
    margin-top: 44px;
  }
</style>