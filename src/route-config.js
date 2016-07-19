export function configRouter (router) {
  // normal routes
  router.map({
    '/': {
      // the component can also be a plain string component id,
      // but a component with that id must be available in the
      // App component's scope.
      component: require('./components/Hello.vue'),
      title: 'Admin panel'
    },
    '/disto': {
      // the component can also be a plain string component id,
      // but a component with that id must be available in the
      // App component's scope.
      component: require('./components/Disto.vue'),
      title: 'Disto'
    },
    '/thecomments': {
      // the component can also be a plain string component id,
      // but a component with that id must be available in the
      // App component's scope.
      component: require('./components/Comments.vue'),
      title: 'List of all Comments'
    },
    '/theposts': {
      // the component can also be a plain string component id,
      // but a component with that id must be available in the
      // App component's scope.
      component: require('./components/Posts.vue'),
      title: 'List of all Posts'
    },
    '*': {
      // the component can also be a plain string component id,
      // but a component with that id must be available in the
      // App component's scope.
      component: require('./components/not-found.vue'),
      title: 'Error 404'
    }
  })
}
