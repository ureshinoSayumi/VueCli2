<template>
  <div id="app">

    <!---<nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
           <li class="nav-item">
            <router-link class="nav-link" :to="{ name: '首頁' }">Home</router-link>
          </li>
           <li class="nav-item">
            <router-link class="nav-link" to="/Loge">Loge</router-link>
          </li>
        </ul>
      </div>
  </nav>------>
  
  <router-view name="menu"></router-view>
  <router-view></router-view>
  <div class="container">
  
    
    
  </div>
    
  </div>
</template>

<script>
export default {
  name: 'App',
  // created() {
  //   // API伺服器路徑
  //   // 所申請的APIPath
  //   const api = `${process.env.APIPATH}/API/${process.env.CUSTOMPATH}/products`;
  //   // console.log(process.env.APIPATH, process.env.CUSTOMPATH);
  //   // 使用main.js載入的AJAX套件來載入AJAX
  //   this.$http.get(api)
  //   .then((response) =>{
  //     console.log(response.data)
  //   });
  // }
}
</script>

<style lang="scss">
@import "./assets/all";


</style>


