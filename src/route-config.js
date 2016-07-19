export function configRouter (router) {
  // normal routes
  console.log(document.location.origin)
  router.map({
    '/': {
      // the component can also be a plain string component id,
      // but a component with that id must be available in the
      // App component's scope.
      component: require('./components/Hello.vue')
    },
    '/disto': {
      // the component can also be a plain string component id,
      // but a component with that id must be available in the
      // App component's scope.
      component: require('./components/Disto.vue')
    },
    '/thecomments': {
      // the component can also be a plain string component id,
      // but a component with that id must be available in the
      // App component's scope.
      component: require('./components/Comments.vue')
    },
    '/theposts': {
      // the component can also be a plain string component id,
      // but a component with that id must be available in the
      // App component's scope.
      component: require('./components/Posts.vue')
    },
    '*': {
      // the component can also be a plain string component id,
      // but a component with that id must be available in the
      // App component's scope.
      component: require('./components/not-found.vue')
    }
  })
}
