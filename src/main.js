import Vue from 'vue'

//Global definition
// Vue.component('fl-component', {
//   data: () => {
//     return {
//       title: 'VueJs Component',
//       counter: 0
//     }
//   },
//   methods: {
//     increment: function() {
//       this.counter++
//     }
//   },
//   template: 
//   `<div>
//   <h1>{{ title }}</h1>
//   <button @click="increment">Clicked {{ counter }} times</button>
//   </div>`
// })

const flComponent = {
  data: () => {
    return {
      title: 'VueJs Component',
      counter: 0
    }
  },
  methods: {
    increment: function() {
      this.counter++
    }
  },
  template: 
  `<div>
  <h1>{{ title }}</h1>
  <button @click="increment">Clicked {{ counter }} times</button>
  </div>`
}

new Vue({
  //The element with id='app' is in index.html
  el: '#app',
  components: {
    'fl-component': flComponent
  }
})

new Vue({
  el: '#app2',
})
