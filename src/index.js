import About from './Dashboard.vue';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#dashboard',
  template: '<Dashboard/>',
  components: { Dashboard }
});
