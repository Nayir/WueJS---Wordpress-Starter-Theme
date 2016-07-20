export function configRouter (router) {
  // normal routes
  router.map({
    // Home
    '/': {
      component: require('./components/Hello.vue'),
      title: 'Home'
    },
    // Pages
    '/:id': {
      component: require('./components/Page.vue')
    },
    // Comments
    '/comments': {
      component: require('./components/Comments.vue'),
      title: 'List of all Comments'
    },
    // All Posts
    '/posts': {
      component: require('./components/Posts.vue'),
      title: 'List of all Posts'
    },
    // Single Post
    '/posts/:id': {
      component: require('./components/SinglePost.vue')
    },
    // Page Test - Better Priority than :id on Pages
    '/disto': {
      component: require('./components/Disto.vue'),
      title: 'Disto'
    },
    // 404 Error
    '*': {
      component: require('./components/not-found.vue'),
      title: 'Error 404'
    }
  })
}
