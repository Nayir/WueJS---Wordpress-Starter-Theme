<template>
  <li>
    <article class="uk-comment">
      <header class="uk-comment-header">
          <img class="uk-comment-avatar" :src="" alt="">
          <h4 class="uk-comment-title">Ici il y a un commentaire</h4>
          <div class="uk-comment-meta"> {{ reply.author_name }} - {{ reply.id }} - {{ reply.parent }}</div>
      </header>
      <div class="uk-comment-body"> {{{ reply.content.rendered }}} </div>
    </article>
  </li>
  <replies :reply="reply" v-for="reply in byparent"></replies>
</template>

<script type="text/babel">
    var _ = require('lodash')

    export default {
      name: 'replies',
      props: {
        reply: Object
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
