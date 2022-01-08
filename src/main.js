import Vue from "vue";
import App from "./App.vue";
import {
  Button,
  Collapse,
  Result,
  Icon,
  Table,
  notification,
  Badge,
  Spin,
  Card,
} from "ant-design-vue";

Vue.config.productionTip = false;
Vue.use(Button);
Vue.use(Collapse);
Vue.use(Result);
Vue.use(Icon);
Vue.use(Table);
Vue.use(Badge);
Vue.use(Spin);
Vue.use(Card);

Vue.prototype.$notification = notification;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
