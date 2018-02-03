import Vue from 'vue';
import VueMaterial from 'vue-material';
import firebase from 'firebase';
import VueFire from 'vuefire';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

import App from './Fammer.vue';

Vue.use(VueMaterial);
Vue.use(VueFire);

// eslint-disable-next-line no-new
new Vue({
    el: '#app',
    render: h => h(App)
});
