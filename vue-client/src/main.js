import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'


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
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Password from 'primevue/password';
import Checkbox from 'primevue/checkbox';
import Message from 'primevue/message'

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
app.use(vuetify)
app.use(store)

app.component('InputText', InputText);
app.component('Toolbar', Toolbar)
app.component('Button', Button);
app.component('SplitButton', SplitButton);
app.component('IconField', IconField)
app.component('Avatar', Avatar)
app.component('InputIcon', InputIcon)
app.component('Card', Card)
app.component('Menu', Menu)
app.component('TabView', TabView)
app.component('TabPanel', TabPanel)
app.component('Password', Password)
app.component('Checkbox', Checkbox)
app.component('Message', Message)


app.directive('ripple', Ripple)
app.mount('#app')
