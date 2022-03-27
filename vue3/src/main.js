import { createApp } from 'vue';
import App from './App.vue';
import router from './code/router';
import store from './store/store';
import Icon from './components/Icon.vue';

const app = createApp(App).use(router);

app.component('Icon', Icon);
app.use(store);

app.mount('#app');
