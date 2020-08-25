import Vue from 'vue';

// 把bus掛載在Vue的原型下，這樣在哪都可以直接呼叫
Vue.prototype.$bus = new Vue();


// Message
// vm.$bus.$emit('messsage:push', message, status);
// message(String): 訊息內容
// status(String): Alert 的樣式