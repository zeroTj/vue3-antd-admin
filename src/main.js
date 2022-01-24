import { createApp } from 'vue';
import App from './App';
import ant from "./utils/ant";
import router from './router/index';
import {store} from './store/index'

const app = createApp(App);
app.config.errorHandler = (err, vm, info) => {
    console.log(err,vm,info,'opopo')
  }
app.use(store);
app.use(router);
app.use(ant);
app.mount('#app')
// createApp(App).use(store).use(router).use(ant).mount('#app')
