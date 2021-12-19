import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import mock from './mock-data.js'
import animalData from "./animalData";

Vue.config.productionTip = false;

let data = {
  products: mock,
  animals: animalData,
  cart: [],
  length: 3
}

new Vue({
  data,
  router,
  render: h => h(App)
}).$mount('#app')
