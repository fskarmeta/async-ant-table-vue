import Vue from "vue";
import App from "./App.vue";
import { Button, Collapse, Result, Icon } from "ant-design-vue";

Vue.config.productionTip = false;
Vue.use(Button);
Vue.use(Collapse);
Vue.use(Result);
Vue.use(Icon);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
