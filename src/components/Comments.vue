<template>
  <div class="comments">
    <ul class="uk-comment-list">
      <comment :truc="truc" :replies="replies" v-for="truc in comments" track-by="id" transition="stagger" stagger="100"></comment>
    </ul>
  </div>
</template>

<script type="text/babel">
  import Comment from './Comments/Comment.vue'

  export default {
    data () {
      return {
        comments: [],
        replies: [],
        truc: {
          1: 'oui',
          2: 'non'
        }
      }
    },
    components: { Comment },
    props: {
      id: Number,
      model: String,
      ip: String
    },
    ready: function () {
      // GET first parent comments
      this.$http.get('/comments').then((response) => {
        this.$set('comments', response.json())
      }, (response) => {
        console.log('error with vue-resource')
      })
      // GET replies of comments
      this.$http.get('/comments?parent_exclude=0').then((response) => {
        this.$set('replies', response.json())
      }, (response) => {
        console.log('error with vue-resource')
      })
    }
  }
</script>
