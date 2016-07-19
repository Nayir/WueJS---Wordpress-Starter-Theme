import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App'
import { configRouter } from './route-config'

Vue.use(VueResource)
// install router
Vue.use(VueRouter)
Vue.config.devtools = true

// create router
const router = new VueRouter({
  history: true,
  saveScrollPosition: true
})

// configure router
configRouter(router)

router.start(App, '#app') // don't forget to have id="app" container in HTML
