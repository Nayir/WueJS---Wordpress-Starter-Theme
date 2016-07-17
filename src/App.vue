<template>
  <div class="uk-container uk-container-center">
    <h1> Vues components</h1>
      <comments model="Post" :id="1"></comments>
  </div>

</template>

<script type="text/babel">
  import Comments from './components/Comments.vue'

  export default {
    components: { Comments }
  }
</script>
