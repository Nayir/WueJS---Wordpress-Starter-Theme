<template>
  <div class="uk-container uk-container-center">
    <h1> Vues components</h1>
    <div>
      <input v-model="currentView" debounce="1000">
    </div>

      <component :is="currentView" model="Post" :id="1"></component>
  </div>

</template>

<script type="text/babel">
  import Comments from './components/Comments.vue'
  import Posts from './components/Posts.vue'

  export default {
    data () {
      return {
        currentView: 'Comments'
      }
    },
    components: {
      Comments,
      Posts
    }
  }
</script>
