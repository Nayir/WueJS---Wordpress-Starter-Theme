<template>
  <div v-for="post in singlepost">
    <h1>Ceci est un post unique </h1>
      <div class="uk-article">
        <div class="uk-cover-background uk-position-relative" v-bind:style="{ height: '300px', backgroundImage: 'url(' + post.fi_medium + ')' }">
          <img class="uk-invisible" :src="post.fi_medium" width="" height="" alt="">
          <div class="uk-position-cover uk-flex uk-flex-center uk-flex-middle">
            <h1 class="uk-article-title"> {{ post.title.rendered }}</h1>
          </div>
        </div>
      <!-- TODO Prepare function.php for post.author_name -->
      <p class="uk-article-meta">Written by {{ post.author }} on {{ post.date }}. Posted in {{ post.cats[0].name }}</p>
      <p class="uk-article-lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <hr class="uk-article-divider">
      <p> {{{ post.excerpt.rendered }}}</p>
      <!-- TODO singlepost.link -->
      <a v-bind:href="''">Read more</a>
      </div>
  </div>
</template>

<script type="text/babel">
  export default {
    data () {
      return {
        singlepost: [],
        routeparam: this.$route.params.id
      }
    },
    name: 'singlepost',
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
      this.$http.get('/wp-json/wp/v2/posts' + param).then((response) => {
        console.log('/wp-json/wp/v2/posts' + param)
        this.$set('singlepost', response.json())
      }, (response) => {
        this.$route.router.go('/posts')
      })
    }
  }
</script>

<style>
</style>
