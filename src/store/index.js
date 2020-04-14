import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList:[],
  },
  mutations: {
    addCart(state,payload){

      //遍历键值  
      for(let item of this.state.cartList){        
        if(item.iid === payload.iid){   
          item.count++;
          return;
        }
      }
      this.state.cartList.push(payload);
     
    }
  },
  actions: {
  },
  modules: {
  }
})
