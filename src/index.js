import './assets/scss/main.scss'
window.Vue = require('vue')


Vue.component('mainApp', require('./app.vue').default)

const app = new Vue({
  el: '#app'
})