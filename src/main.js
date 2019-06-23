import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {sync} from 'vuex-router-sync'
import store from '@/store/store'

Vue.config.productionTip = false
import 'ant-design-vue/dist/antd.css'
import {

  Alert,
  Avatar,

  Badge,

  Button,

  Card,

  Col,


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


Vue.use(Alert);
Vue.use(Avatar);
Vue.use(Badge);
Vue.use(Button);
Vue.use(Card);
Vue.use(Col);
Vue.use(Popover)
Vue.use(Form);
Vue.use(Icon);
Vue.use(Input);
Vue.use(InputNumber);
Vue.use(Layout);
Vue.use(List);
Vue.use(Menu);
Vue.use(Tag);
import VueSession from 'vue-session'

Vue.use(VueSession)

sync(store, router);
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
