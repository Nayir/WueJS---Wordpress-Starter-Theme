<template>
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
    <!-- TODO post.link -->
    <a v-bind:href="''">Read more</a>
  </div>
</template>

<script type="text/babel">
export default {
  data () {
    return {
    }
  },
  props: {
    post: Object
  }
}
</script>

<style>
.uk-article-title {
  background: rgba(0, 0, 0, 0.5);
  font-size: 50px;
  line-height: 75px;
  padding: 0 40px;
  color: #fff;
}
</style>
