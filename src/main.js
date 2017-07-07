import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
//
import order from './views/order.vue'
import orderTime from './views/orderTime.vue'
import userInfo from './views/userInfo.vue'
import pay from './views/pay.vue'


Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
      {
        path: '/order',
        component: order,
        name: '预约管理'
      },
      {
          path: '/orderTime',
          component: orderTime,
          name: '预约时间'
      },
      {
          path: '/userInfo',
          component: userInfo,
          name: '用户信息'
      },
      {
          path: '/pay',
          component: pay,
          name: '支付页面'
      }
  ]
})

// new Vue({
//   el: '#app',
//   render: h => h(App)
// })
const app = new Vue({
    el: '#app',
    template: '<App/>',
    router,
    components: { App }
})//.$mount('#app')