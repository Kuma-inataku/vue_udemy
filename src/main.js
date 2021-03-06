import Vue from 'vue';
import App from './App.vue';
import LikeNumber from './components/LikeNumber.vue';
import router from './router';
import store from "./store";

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  console.log(to);
  console.log(from);
  next();
});

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
  store,
  render: h => h(App),
}).$mount('#app')
