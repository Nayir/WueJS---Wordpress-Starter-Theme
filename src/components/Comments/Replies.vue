<template>
  <li>
    <article class="uk-comment">
      <header class="uk-comment-header">
          <img class="uk-comment-avatar" :src="" alt="">
          <h4 class="uk-comment-title"> {{ reply.author_name }}</h4>
          <div class="uk-comment-meta">parent : {{ reply.date }}</div>
      </header>
      <div class="uk-comment-body"></div>
    </article>
  </li>
</template>

<script type="text/babel">
    export default {
      name: 'comment',
      props: {
        ip: String,
        truc: Object,
        parent: Number
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
