<template>
  <div class="params-info" v-if="Object.keys(itemParams).length !== 0">
    <table class="info-size" >
      <tr v-for="(tr,indey) in itemParams.rule.tables[0]" :key="indey">
        <td v-for="(td,indez) in tr" :key="indez">{{td}}</td>
      </tr>
    </table>
    <table class="info-param">
      <tr class="tr2" v-for="(info,index) in itemParams.info.set" :key="index">
        <td class="info-param-key">{{info.key}}</td>
        <td class="param-value">{{info.value}}</td>
      </tr>
    </table>
    <div class="info-img">
      <img :src="itemParams.image" alt="">
    </div>
  </div>
</template>

<script>
export default {
  props:{
    itemParams:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
table{
  text-align: center;
  border-collapse: collapse;
  font-size: 14px;
}
.params-info{
  width: 100vw;
}
.info-size td{
  width: 25vw;
}
tr td{
    border-bottom: 1px solid  rgba(0,0,0,.1);
    height: 30px;
}
.info-param{
  width: 100%;
}
.info-param-key{
  width: 70px;
  height: 30px;

  
}
.param-value{
  color: var(--color-tint);
  
}
</style>