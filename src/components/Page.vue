<template>
  <div v-for="post in page">
      <h2>Ceci est la page d'id {{ $route.params.id }}</h2>
      <div v-cloak>
        <div>
          <p>Current route path: {{$route.path}}</p>
          <p>Current route params: {{{ post.content.rendered }}}</p>
        </div>
      </div>
  </div>
</template>

<script type="text/babel">
  import Post from './Posts/Post.vue'

  export default {
    data () {
      return {
        page: [],
        routeparam: this.$route.params.id
      }
    },
    name: 'posts',
    components: { Post },
    props: {
      id: [String, Number],
      model: String
    },
    ready: function () {
      var param
      if (typeof this.routeparam === 'number') {
        param = '/' + this.routeparam
        console.log('by id : ' + param)
      } else if (typeof this.routeparam === 'string') {
        param = '?filter[name]=' + this.routeparam
        console.log('by slug : ' + param)
      } else {
        param = ''
        console.log('by nothing')
      }
      this.$http.get('/wp-json/wp/v2/pages' + param).then((response) => {
        this.$set('page', response.json())
      }, (response) => {
        this.$route.router.go('/')
      })
    }
  }
</script>

<style>
</style>
