<template>
  <post :post="post" v-for="post in posts" track-by="id" transition="stagger" stagger="100" ></post>
</template>

<script type="text/babel">
  import Post from './Posts/Post.vue'

  export default {
    data () {
      return {
        posts: []
      }
    },
    name: 'posts',
    components: { Post },
    props: {
      id: Number,
      model: String,
      crsf: String,
      comment: Object,
      ip: String
    },
    ready: function () {
      // GET first parent comments
      this.$http.get('/posts').then((response) => {
        this.$set('posts', response.json())
      }, (response) => {
        console.log('error with vue-resource for getting posts')
      })
    }
  }
</script>

<style>
</style>
