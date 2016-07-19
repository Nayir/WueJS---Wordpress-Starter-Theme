<template>
  <div id="app">
    <h1>Application</h1>
      <router-view></router-view>
  </div>
</template>

<script type="text/babel">
  import Comments from './components/Comments.vue'
  import Posts from './components/Posts.vue'

  export default {
    components: {
      Comments,
      Posts
    }
  }
</script>
