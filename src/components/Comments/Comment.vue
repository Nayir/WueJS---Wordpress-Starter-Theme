<template>
  <li>
    <article class="uk-comment">
      <header class="uk-comment-header">
          <img class="uk-comment-avatar" :src="" alt="">
          <h4 class="uk-comment-title"> Commentaire de {{ comment.author_name }} </h4>
          <div class="uk-comment-meta"> Ecrit le {{ comment.date_gmt }} dont l'id est {{ comment.id }}</div>
      </header>
      <div class="uk-comment-body"> {{{ comment.content.rendered }}}</div>
    </article>
    <ul>
      <replies :reply="reply" v-for="reply in byparent" :replies="replies"></replies>
    </ul>
  </li>
</template>

<script type="text/babel">
  import Replies from './Replies.vue'
  var _ = require('lodash')

  export default {
    data () {
      return {
        a: 1
      }
    },
    components: { Replies },
    props: {
      comment: Object,
      replies: Array
    },
    computed: {
      byparent: function () {
        let bp = _.filter(this.replies, { 'parent': this.comment.id })
        return bp
      }
    }
  }
</script>

<style>
.uk-comment {
  margin-bottom: 3em;
}
</style>
