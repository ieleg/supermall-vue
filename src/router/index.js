import Vue from 'vue'
import Router from 'vue-router'
//懒加载导入
const home = () =>import('@/views/home/home.vue');
const catalog = () =>import('../views/catalog/catalog.vue');
const buy = () =>import('../views/buy/buy.vue');
const profile = () =>import('../views/profile/profile.vue');
Vue.use(Router)
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}
export default new Router({
  routes: [
    {
      path: '',
      redirect:'/home'  
    },
    {
      path:'/home',
      component:home
    },
    {
      path:'/catalog',
      component:catalog
    },
    {
      path:'/buy',
      component:buy
    },
    {
      path:'/profile',
      component:profile
    }
  ],
  mode:'history'
})
