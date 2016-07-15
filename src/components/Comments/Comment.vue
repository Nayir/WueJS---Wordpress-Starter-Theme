<template>
  <li>
    <article class="uk-comment">
      <header class="uk-comment-header">
          <img class="uk-comment-avatar" :src="truc.author_avatar_urls['48']" alt="">
          <h4 class="uk-comment-title"> {{ truc.author_name }}</h4>
          <div class="uk-comment-meta"> {{ truc.date }} - {{ ip }}</div>
      </header>
      <div class="uk-comment-body">{{{ truc.content.rendered }}}</div>
    </article>
    <replies :parent="truc.id" v-for="reply in replies | filterBy truc.id in 'id'"></replies>
  </li>
</template>

<script type="text/babel">
  import Replies from './Replies.vue'

  export default {
    name: 'comment',
    components: { Replies },
    props: {
      ip: String,
      truc: Object,
      replies: Array
    },
    data () {
      return {
        comments: []
      }
    }
  }
</script>

<style>
.uk-comment {
  margin-bottom: 3em;
}
</style>
