import { createApp } from 'vue'
import App from './App.vue'

import './assets/style.css'

import 'highlight.js/styles/stackoverflow-light.css'
import hljs from 'highlight.js/lib/core';
import hljsVuePlugin from "@highlightjs/vue-plugin";

import javascript from 'highlight.js/lib/languages/javascript';
import css from 'highlight.js/lib/languages/css';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('css', css);


const app = createApp(App)
app.use(hljsVuePlugin)


app.mount('#app')
