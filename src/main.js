// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios' //主要AJAX套件
import VueAxios from 'vue-axios' //將它轉為 VUe的套件
import Loading from 'vue-loading-overlay'; // 增加使用者體驗 - 讀取中效果製作
import 'vue-loading-overlay/dist/vue-loading.css';  // 增加使用者體驗 - 讀取中效果製
import 'bootstrap';



// --------------vee-validate------------------------
// https://hao1229.github.io/2019/08/09/EcommercePractice8/

//建立訂單，驗證是否輸入表單
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
// 本地化
import { localize } from 'vee-validate'
import TW from 'vee-validate/dist/locale/zh_TW.json'
localize('zh_TW', TW)


// Add a rule，此範例中添加了一個名為'secret'的規則，若 value 值不為 'example'，就會回饋 message 裡的文字。
extend('min', {
  validate (value, args) {
    return value.length >= args.length    
  },
  params: ['length'],
  message: '長度不夠'
})
// Register it globally
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);


// email 規則驗證
import { required, email } from 'vee-validate/dist/rules'

extend('email', email)

extend('required', { // 這邊可以改寫我們 email 告知使用者是必填欄位的提示文字
  ...required,
  message: '必填'
})
// --------------vee-validate------------------------






import App from './App'
import router from './router'
import './bus'; //錯誤訊息
import currencyFilter from './Filters/currency'; //千分號
import dateFilter from './Filters/date'; //日期轉換


Vue.use(VueAxios, axios)
Vue.config.productionTip = false

// 增加使用者體驗，用全域的方式來啟用元件，這樣就不用在每個元件都載入
Vue.component('Loading', Loading); // 增加使用者體驗 - 讀取中效果製作
Vue.filter('currency', currencyFilter); //千分號。 參數:1.自訂名稱 2.import的名稱
Vue.filter('date', dateFilter); //日期轉換。 參數:1.自訂名稱 2.import的名稱


//登入 API 補充說明 (跨域)
axios.defaults.withCredentials = true;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
});


// Vue Router 導航守衛
// 再切換頁面的時候觸發
// to: Route: 即将要进入的目标 路由对象

// from: Route: 当前导航正要离开的路由

// next: Function: 到達下一個頁面
router.beforeEach((to, from, next) => {
  console.log(to, from, next);
  // 如果要去的頁面有requiresAuth 就不直接放行
  // 執行確認登入API
  if(to.meta.requiresAuth){
    console.log('這裡需要驗證');
    //   驗證登入 API 
    const api = `${process.env.APIPATH}/api/user/check`;
    // 這邊不能直接使用this.$http 這個只能在元件中使用
    //改直接使用axios
    axios.post(api).then((response) =>{
    // console.log(response.data);
    // 如果持續登入驗證成功 就直接通行
    if (response.data.success){
      next();
      console.log('驗證已登入');
    }else{ //否就回到登入的頁面
      next({
        path: '/login',
      });
      console.log('未登入');
    }
    });
  }else{  //否的話就直接放行
    next();
  }
})