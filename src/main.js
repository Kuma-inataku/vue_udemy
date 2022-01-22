import Vue from 'vue';
import App from './App.vue';
import LikeNumber from './components/LikeNumber.vue';
import router from './router';

Vue.config.productionTip = false
Vue.component("LikeNumber", LikeNumber);
Vue.filter("upperCase", function (value) {
  return value.toUpperCase();
})
Vue.mixin({
  created() {
    // console.log("global.mixin!!!");
  }
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
