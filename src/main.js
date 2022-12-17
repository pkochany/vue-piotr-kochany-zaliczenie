import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import $ from 'jquery'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Popper from 'vue-popperjs';
import 'vue-popperjs/dist/vue-popper.css';

export default {
    components: {
      'popper': Popper
    },
  }

const app = createApp(App)

app.use(router)

app.mount('#app')
