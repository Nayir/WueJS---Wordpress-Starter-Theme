<template>
  <div>
    <div class="comments">
      <ul class="uk-comment-list">
        <comment :comment="comment" :replies="replies" v-for="comment in comments" track-by="id" transition="stagger" stagger="100"></comment>
      </ul>
    </div>
  </div>
</template>

<script type="text/babel">
  import Comment from './Comments/Comment.vue'

  export default {
    data () {
      return {
        comments: [],
        replies: []
      }
    },
    name: 'comments',
    components: { Comment },
    props: {
      id: Number,
      model: String,
      crsf: String,
      comment: Object,
      ip: String
    },
    ready: function () {
      // GET first parent comments
      this.$http.get('/wordpress/wp-json/wp/v2/comments').then((response) => {
        this.$set('comments', response.json())
      }, (response) => {
        console.log('error with vue-resource')
      })
      // GET replies of comments
      this.$http.get('/wordpress/wp-json/wp/v2/comments?parent_exclude=0').then((response) => {
        this.$set('replies', response.json())
      }, (response) => {
        console.log('error with vue-resource')
      })
    }
  }
</script>
