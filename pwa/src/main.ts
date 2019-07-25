import Vue from 'vue';
import App from './App.vue';
import firebase from 'firebase';
import router from './router';
import store from './store';
import './registerServiceWorker';

const config: any = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  messagingSenderId: 'YOUR_MESSAGING_SEND_ID',
};

config.authDomain = config.projectId + '.firebaseapp.com';
config.databaseURL = 'https://' + config.projectId + '.firebaseio.com';
config.storageBucket = config.projectId + '.appspot.com';

firebase.initializeApp(config);

Vue.config.productionTip = false;

store.commit('EDIT_HOST', window.location.origin === 'http://localhost:8080'
    ? 'http://localhost:3000'
    : window.location.origin);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
