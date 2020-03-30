<template>
  <div>
    <table v-for="(table,index) in itemParams.rule.tables[0]" 
    class="info-size" :key="index">
      <tr v-for="(tr,indey) in table" :key="indey">
        <td v-for="(td,indez) in tr" :key="indez">{{td}}</td>
      </tr>
    </table>
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

<style>

</style>