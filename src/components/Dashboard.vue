<template>
  <div>
    
    <Alert/>
    <Navbar/>
    <div class="container-fluid">
      <div class="row">
        <Sidebar></Sidebar>
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
          <router-view></router-view>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Alert from './AlertMessage';
// import Pagination from './Pagination';


//default export（預設匯出）
//default export 匯出時不需要預先賦予名稱，
//可以在 import 時另外賦予，但要特別注意 export default 每個檔案僅能有一個。
export default {
  components: {
    Sidebar,
    Navbar,
    Alert,
    // Pagination,
  },
};
</script>