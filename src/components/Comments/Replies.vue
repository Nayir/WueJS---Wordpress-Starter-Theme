<template>
  <li>
    <article class="uk-comment">
      <header class="uk-comment-header">
          <img class="uk-comment-avatar" :src="" alt="">
          <h4 class="uk-comment-title">Réponse de {{ reply.author_name }}</h4>
          <div class="uk-comment-meta">Ecrit le {{ reply.date_gmt }}, {{ reply.id }} - {{ reply.parent }}</div>
      </header>
      <div class="uk-comment-body"> {{{ reply.content.rendered }}} </div>
    </article>
  </li>
  <ul>
    <replies :reply="reply" v-for="reply in byparent" ></replies>
  </ul>
</template>

<script type="text/babel">
    var _ = require('lodash')

    export default {
      name: 'replies',
      props: {
        reply: Object,
        replies: Array
      },
      computed: {
        byparent: function () {
          let bp = _.filter(this.replies, { 'parent': this.reply.id })
          return bp
        }
      }
    }
</script>

<style>

</style>
