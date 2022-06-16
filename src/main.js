import Vue from 'vue'
import App from './App.vue'
import LangFlag from 'vue-lang-code-flags';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStars } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(faStar)
library.add(faStars)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.component('lang-flag' , LangFlag);

new Vue({
  render: h => h(App),
}).$mount('#app')
