import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Prime UI
import PrimeVue from 'primevue/config'
import 'primeicons/primeicons.css'
import 'primevue/resources/themes/aura-light-green/theme.css'

// Prime Blocks
import "primeflex/primeflex.css";


// Prime Components

import SplitButton from 'primevue/splitbutton';
import Toolbar from 'primevue/toolbar';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Avatar from 'primevue/avatar'
import Card from 'primevue/card'
import Menu from 'primevue/menu'
// Directives
import Ripple from 'primevue/ripple'

// VUetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App)

app.use(PrimeVue)
app.use(router)

app.component('InputText', InputText);
app.component('Toolbar', Toolbar)
app.component('Button', Button);
app.component('SplitButton', SplitButton);
app.component('IconField', IconField)
app.component('Avatar', Avatar)
app.component('InputIcon', InputIcon)
app.component('Card', Card)
app.component('Menu', Menu)


app.directive('ripple', Ripple)
app.use(vuetify).mount('#app')
