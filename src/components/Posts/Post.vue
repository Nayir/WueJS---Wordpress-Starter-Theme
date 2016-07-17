<template>
  <div class="uk-article">
      <h1 class="uk-article-title"> {{ post.title.rendered }}</h1>
      <!-- TODO Prepare function.php for post.author_name -->
      <p class="uk-article-meta">Written by {{ post.author }} on {{ post.date }}. Posted in {{ post.cats[0].name }}</p>
      <p class="uk-article-lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <hr class="uk-article-divider">
      <p> {{{ post.excerpt.rendered }}}</p>
      <!-- TODO Fix href when routes will be ready -->
      <a v-bind:href="'posts/' + post.id">Read more</a>
  </div>
</template>

<script type="text/babel">
export default {
  props: {
    post: Object
  }
}
</script>

<style>

</style>
