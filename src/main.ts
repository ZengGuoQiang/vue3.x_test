import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './common/store/countStore';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/tabs.css';
import 'element-ui/lib/theme-chalk/tab-pane.css';
import 'element-ui/lib/theme-chalk/menu.css';
import 'element-ui/lib/theme-chalk/menu-item.css';
import 'element-ui/lib/theme-chalk/menu-item-group.css';
import 'element-ui/lib/theme-chalk/row.css';
import 'element-ui/lib/theme-chalk/upload.css';
// import ElementUI from "element-ui"
//按需引入
import { 
    Tabs 
    ,MenuItem 
    ,TabPane 
    ,Menu 
    ,MenuItemGroup 
    ,Row 
    ,Col 
    ,Footer
    ,Container
    ,Header
    ,Aside
    ,Main
    ,Button
    ,ButtonGroup
    ,Form
    ,FormItem
    ,Input
    ,InputNumber
    ,Upload
} from "element-ui"
// import store from './common/store'

//使用全局所有的elementUI
// Vue.use(ElementUI)
//按需要求引入elementui
Vue.use(Header)
Vue.use(Container)
Vue.use(Main)
Vue.use(Aside)
Vue.use(Footer)
Vue.use(Row);//el-row
Vue.use(Col);//el-col
Vue.use(Button)
Vue.use(ButtonGroup)
Vue.use(Tabs);//el-tabs
Vue.use(TabPane);//el-tab-pane
Vue.use(Menu);//el-item
Vue.use(MenuItem);//el-menu-item
Vue.use(MenuItemGroup);//el-menu-item-group
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(InputNumber)
Vue.use(Upload)
Vue.prototype.$ELEMENT = {size:"samll",zIndex:3000}

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
