import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList:[],
  },
  mutations: {
    addCount(state,payload){
      // console.log(payload);
      // console.log(this.state.cartList);
      payload.count++;
    },
    addToCart(state,payload){
      payload.checked = false;
      this.state.cartList.push(payload);  
    },
    changeChecked(state,payload){
      payload.checked = !payload.checked
    }
  },
  actions: {
    addCart(context,payload){

      //遍历键值  

      for(let item of context.state.cartList){        
        if(item.iid === payload.iid){   
          context.commit('addCount',item)
          return;
        }
      }
        payload.count = 1;
        context.commit('addToCart',payload);
      
    }
  },
  modules: {
  }
})
