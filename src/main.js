import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {sync} from 'vuex-router-sync'
import store from '@/store/store'

Vue.config.productionTip = false
import 'ant-design-vue/dist/antd.css'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import VueCarousel from 'vue-carousel';
import VueFormWizard from 'vue-form-wizard'

import VueSelectImage from 'vue-select-image'
require('vue-select-image/dist/vue-select-image.css')
Vue.use(VueSelectImage)

import {

  Alert,
  Avatar,
  Checkbox,
  Badge,

  Button,

  Card,
  Select,
  Col,
  Radio,
  Carousel,
  Form,
  Icon,
  Input,
  InputNumber,
  Layout,
  List,
  Popover,

  Menu,


  Tag,

} from 'ant-design-vue';

Vue.use(VueFormWizard)
Vue.use(Alert);
Vue.use(Avatar);
Vue.use(Badge);
Vue.use(Button);
Vue.use(Card);
Vue.use(Col);
Vue.use(Popover);
Vue.use(Form);
Vue.use(Icon);
Vue.use(Input);
Vue.use(InputNumber);
Vue.use(Layout);
Vue.use(List);
Vue.use(Menu);
Vue.use(Tag);
Vue.use(Carousel);
Vue.use(Radio);
Vue.use(VueCarousel);
Vue.use(Select);
Vue.use(Checkbox)
import vueCountryRegionSelect from 'vue-country-region-select'
Vue.use(vueCountryRegionSelect)
import VueSession from 'vue-session'

Vue.use(VueSession)

sync(store, router);
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
