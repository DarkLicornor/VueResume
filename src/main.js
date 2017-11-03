// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueScrollTo from 'vue-scrollto'
import App from './App'
import En from './components/En.vue'
import Es from './components/Es.vue'
import Cat from './components/Cat.vue'
import Fr from './components/Fr.vue'

Vue.config.productionTip = false
Vue.use(VueScrollTo)
Vue.use(VueRouter)

const routes = [
  { path: '/', component: En },
  { path: '/en', component: En },
  { path: '/es', component: Es },
  { path: '/cat', component: Cat },
  { path: '/fr', component: Fr }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App, En, Cat, Es, Fr }
})
