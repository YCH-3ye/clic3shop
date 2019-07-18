import Vue from 'vue'
import {
  Message,
  MessageBox,
  Tooltip,
  Select,
  Option,
  Input,
  Loading,
  Form,
  Button,
  FormItem,
  Container,
  Header,
  Aside,
  Main
} from 'element-ui'

Vue.prototype.$message = Message
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt

Vue.use(Tooltip)
Vue.use(Select)
Vue.use(Option)
Vue.use(Input)
Vue.use(Loading)
Vue.use(Form)
Vue.use(Button)
Vue.use(FormItem)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
