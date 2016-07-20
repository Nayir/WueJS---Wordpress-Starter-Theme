<template>
  <div id="app">
    <h1>{{ $route.title }}</h1>
      <router-view></router-view>
  </div>
</template>

<script type="text/babel">
  import Comments from './components/Comments.vue'
  import Posts from './components/Posts.vue'
  import Page from './components/Page.vue'

  export default {
    components: {
      Comments,
      Posts,
      Page
    }
  }
</script>
