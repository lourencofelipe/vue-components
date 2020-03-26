import Vue from 'vue'

Vue.component('fl-component', {
  data: () => {
    return {
      title: 'VueJs Component'}
    },
  template: '<h1>{{ title }}</h1>'
})

new Vue({
  //The element with id='app' is in index.html
  el: '#app',
})
