import Vue from 'vue'
import VueResource from 'vue-resource'
import Comments from './components/Comments.vue'

Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { Comments }
})
