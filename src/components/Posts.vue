<template>
  <div>
    <post :posts="posts"></post>
  </div>
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
      id: [String, Number],
      model: String
    },
    ready: function () {
      if (this.id) {
        var param = '?include=' + this.id
        console.log(param)
      } else {
        param = ''
      }
      this.$http.get('/wordpress/wp-json/wp/v2/posts' + param).then((response) => {
        this.$set('posts', response.json())
      }, (response) => {
        console.log('error with vue-resource for getting posts')
      })
    }
  }
</script>

<style>
</style>
