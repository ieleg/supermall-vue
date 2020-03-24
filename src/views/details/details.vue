<template>
  <div id="details">
    <detailNavbar></detailNavbar>
  </div>
</template>

<script>
import detailNavbar from './childComponent/detailNavbar'
export default {
  components:{
    detailNavbar,
  },
  data(){
    return {
      iid:{}
    }
  },
  created(){
    console.log(this.$route);
    this.iid = this.$route.params.iid;
  }

}
</script>

<style>

</style>