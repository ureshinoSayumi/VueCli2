<template>
  <div class="hello">
    <a href="#" @click.prevent="signout">登出</a>
  </div>
</template>

<script>
//default export（預設匯出）
//default export 匯出時不需要預先賦予名稱，
//可以在 import 時另外賦予，但要特別注意 export default 每個檔案僅能有一個。
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    };
  },
  methods:{
    signout(){
      const api = `${process.env.APIPATH}/logout`;
      const vm = this;
      // 使用main.js載入的AJAX套件來載入AJAX
      // 登入API須丟入兩個參數 1.API路徑 2.帳號密碼物件
      this.$http.post(api)
      .then((response) =>{
        console.log(response.data)
        // 如果登入成功 就把路徑改回到login
        if (response.data.success){
            vm.$router.push('/login');
          }
        });
      },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only 
加上"scoped" 把CSS限制在此元件下-->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
