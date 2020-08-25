
<template>
      
    <div>

        <div class="index">
                <div>
                    <a href="#">
                        <router-link to="/Home2/Home">首頁></router-link>
                    </a>
                    <a href="#">
                        <router-link to="/Home2/CustomerOrders">產品列表></router-link>
                    </a>
                </div>
                
            </div>
      <div class="wrap">
        
        <footerx :cartNum="cartNum" :cart="cart" @goTop="top"></footerx>
        
        <div class="leftMenu">
          <ul>
                <li><a class="leftMenuA" :class="{'active':menu.all}" href="#" @click.prevent="xxx(str);
                menu.all=true;menu.chair=false;menu.table=false;menu.sofa=false;menu.bad=false;">全部商品</a></li>

                <li><a class="leftMenuA" :class="{'active':menu.chair }"href="#" @click.prevent="xxx('椅子','category');
                  menu.chair=true;menu.all=false;menu.table=false;menu.sofa=false;menu.bad=false;">椅子</a></li>
                
                <li><a class="leftMenuA" :class="{'active':menu.table}"href="#" @click.prevent="xxx('桌子','category');
                  menu.table=true;menu.chair=false;menu.all=false;menu.sofa=false;menu.bad=false;">桌子</a></li>
                
                <li><a class="leftMenuA" :class="{'active':menu.sofa}"href="#" @click.prevent="xxx('沙發','category');
                  menu.sofa=true;menu.chair=false;menu.table=false;menu.all=false;menu.bad=false;">沙發</a></li>
                
                <li><a class="leftMenuA" :class="{'active':menu.bad}"href="#" @click.prevent="xxx('床','category');
                  menu.bad=true;menu.chair=false;menu.table=false;menu.sofa=false;menu.all=false;">床</a></li>
          </ul>
        </div>






            

        <div class="main">
          
            <!---------------------------- <Navbar></Navbar>---------------------------------->
            <loading :active.sync="isLoading"></loading>
          

            <div class="search">
              <input @keyup.enter="xxx(str)" class="form-control" id="usertel" v-model="str" placeholder="搜尋">
                
              <button class="searchButton" style="border:0;"
                type="button" @click="xxx(str)" >
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                  <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                </svg>
              </button>
            </div>
            <div class="row mt-4">


            
                <div class="col-md-4 mb-4" v-for="item in products" :key="item.id">
                    <a href="#" class="card border-0 shadow-sm">
                          <div @click.prevent="getProduct(item.id)" style="height: 250px; background-size: cover; background-position: center"
                              :style="{backgroundImage: `url(${item.imageUrl})`}">
                          </div>

                          <div class="cardMenu">
                            <div class="cardMenuTitle">
                              <h5>{{ item.title }}</h5>
                            </div>
                            <div class="cardMenuPrice">
                              <h5>NT{{ item.price | currency}} 元</h5>
                            </div>
                          </div>

                          <div class="cardButton">
                            
                            <button @click.prevent="getProduct(item.id)" type="button" class="cardButton1">
                              <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i>
                              查看更多
                            </button>
                            <button @click.prevent="addtoCart(item.id)" type="button" class="cardButton2">
                              <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i>
                              加到購物車
                            </button>
                            <!--<button type="button" class="btn btn-outline-secondary btn-lg"
                                @click="getProduct(item.id)">
                                <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i>
                                查看更多
                            </button>
                            <button type="button" class="btn btn-outline-danger btn-lg ml-auto"
                                @click="addtoCart(item.id)">
                              <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i>
                              加到購物車
                            </button>-->
                          </div>



                          <!--<div @click.prevent="getProduct(item.id)" style="height: 250px; background-size: cover; background-position: center"
                              :style="{backgroundImage: `url(${item.imageUrl})`}">
                          </div>-->
                        <!--<div class="card-body">
                            <span class="badge badge-secondary float-right ml-2">{{ item.category }}</span>
                            <h5 class="card-title">
                            <a href="#" class="text-dark">{{ item.title }}</a>
                            </h5>
                            <p class="card-text">{{ item.content }}</p>
                            <div class="d-flex justify-content-between align-items-baseline">
                            <div class="h6" v-if="!item.price">{{ item.origin_price }} 元</div>
                            <del class="h6" v-if="item.price">原價 {{ item.origin_price | currency}} 元</del>
                            <div class="h6" v-if="item.price">特價 {{ item.price | currency}} 元</div>
                            </div>
                        </div>
                        <div class="card-footer d-flex">
                            <button type="button" class="btn btn-outline-secondary btn-sm"
                                @click="getProduct(item.id)">
                                <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i>
                            查看更多
                            </button>
                            <button type="button" class="btn btn-outline-danger btn-sm ml-auto"
                              @click="addtoCart(item.id)">
                            <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i>
                            加到購物車
                            </button>
                        </div>-->
                    </a>
                </div>
            </div>

    

            <div class="pagination">
              <pagination :pages="pagination" @turnPage='getProducts'></pagination>
              
            </div>

        </div>
      </div>


              <!-- 彈出式Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              成功加入購物車
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">關閉</button>
            </div>
          </div>
        </div>
      </div>




    </div>
</template>




<style scoped>
a{
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    text-decoration:none;
    color:black;    
    
}
a:hover{
}

ol, ul {
	list-style: none; 
}


.cardMenu{
  display:flex;
  justify-content:space-around;
  align-items:center;
  border:1px solid #e7eeea;
}
.cardMenuTitle{
  width:167px;
  border-right:1px solid #e7eeea;
  padding:15px;
  display:flex;
  flex-direction:row;
  justify-content:space-around;
  align-items:center;
}
.cardMenuPrice{
  width:167px;
  padding:15px;
  flex-direction:row;
  display:flex;
  justify-content:space-around;
  align-items:center;
}
.cardButton{
  display:flex;
  justify-content:space-around;
}
.cardButton button{
  width:167px;
  height:62px;
}
.cardButton1{
  border:0;
  background:#e7eeea;
  border-right:1px solid #cccccc;
  color: #37523d;
  font-size:18px;

}
.cardButton2{
  border:0;
  background:#e7eeea;
  color:#37523d;
  font-size:18px;
}
.cardButton button:hover{
  background:#37523d;
  color:white;
}


.index{
    width:1063px;
    height:40px;
    margin-left: auto ;
    margin-right: auto;
    padding:10px;
    background: #e7eeea;
    border-radius:10px;
}
.index a{
    color:#37523d;
}
.wrap{
  width:1430px;
  margin-left: auto ;
  margin-right: auto;
  display:flex;

}
.leftMenu{
  margin-top:112px;
  margin-right:30px;
  height:800px;
  background:white;
}
.leftMenu li{
  font-size: 15px;
}
.leftMenuA{
    display: block;
    /*background:#4EFEB3;*/
    width: 200px;
    height:58px;
    text-decoration:none;
    border: 1px solid #e7eeea;
    text-align: center;
    color:#37523d;
    padding-top: 17px;
}
.active{
    display: block;
    /*background:#4EFEB3;*/
    width: 200px;
    height:58px;
    text-decoration:none;
    border: 1px solid #e7eeea;
    text-align: center;
    color:white;
    background: #37523d;
    padding-top: 17px;
}
.leftMenuA:hover{
  background: #37523d;
  color:white;
}
.leftMenu p{
    text-align: center;
    padding-top: 17px;
    width: 298px;
    height:58px;
    background: #37523d;
    border: 1px solid #37523d;

    color:white;
}

.main{
  width:1063px;
  
}
.search {
  display: flex;
  margin-top:30px;
};
.searchButton {
  display:block;
  border:0;
  width:150px;
  height:50px;

}
/*.pagination{
  margin-left: auto ;
  margin-right: auto;
  width:1250px;
}*/
</style>

<script>


import $ from 'jquery';
import footerx from '../footerx';
import Pagination from '../Pagination';


export default {
  components: {
        footerx,
        Pagination,
    },
  data() {
    return {
      products: [], //取得產品資料
      product: {}, //單一產品資料
      pagination:{}, //分頁
      str:'',  //搜尋輸入框
      productsBackup:[], //搜尋備份
      Allpagination:[], //所有產品資料
      cart:[], //購物車
      cartNum:'',//購物車數量
      status: {
        loadingItem: '', //儲存item id 確認是否讀取中
      },
      form: {  //送出訂單
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
      menu: {
        all:true,
        chair:false,
        table:false,
        bad:false,
        sofa:false,
      },
      isTransform: false,
      isLoading: false, // 是否讀取中(大畫面)
      coupon_code:'',
    };
  },
  methods: {
    //   用戶端取得資料API
    getProducts(page = 1) {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products?page=${page}`;
      vm.isLoading = true;
      this.$http.get(url).then((response) => {
        vm.products = response.data.products;
        vm.productsBackup = response.data.products;//備份用
        console.log(response);
        vm.isLoading = false;
        vm.pagination = response.data.pagination;
      });
    },
    // 取得單一產品API
    getProduct(id) {
        const vm = this;
        const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/product/${id}`;
        vm.status.loadingItem = id; 
        this.$http.get(url).then((response) => {
            console.log(response);
            if(response.data.success) {
              vm.$router.push(`/Home2/productDetails/${response.data.product.id}`)
            }
            vm.product = response.data.product;
            
            vm.status.loadingItem = '';
      });
    },
    // 加購物車API
    addtoCart(id, qty = 1) {

      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
      vm.status.loadingItem = id; 
      const cart = {    //傳入參數1.物品ID 2.數量
        product_id: id,
        qty,
      };
      this.$http.post(url, { data: cart }).then((response) => {
        console.log(response);
        vm.status.loadingItem = '';
        vm.getCart();
        $('#exampleModal').modal('show');
      });
    },
    // 取得構物車
    getCart() {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
      vm.isLoading = true;
      this.$http.get(url).then((response) => {
        // vm.products = response.data.products;
        console.log(response.data.data, '取得購物車');
        vm.isLoading = false;
        vm.cart = response.data.data;
        vm.cartNum = response.data.data.carts.length;
      });
    },
    // 刪除購物車
    removeCartItem(id) {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart/${id}`;
      vm.isLoading = true;
      this.$http.delete(url).then((response) => {
        vm.getCart();  //刪除後，重新取得購物車
        console.log(response, '取得構物車');
        vm.isLoading = false;
      });
    },
    // 套用優惠卷
    addCouponCode() {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/coupon`;
      //套用優惠卷API，參數資料結構
      const coupon = {
        code: vm.coupon_code,
      };
      vm.isLoading = true;
      this.$http.post(url, { data: coupon }).then((response) => {
        vm.getCart();  //重新取得購物車
        console.log(response);
        vm.isLoading = false;
      });
    },
    //送出訂單
    createOrder() {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/order`;
      const order = vm.form;
      vm.isLoading = true;
      this.$http.post(url, { data: order }).then((response) => {
        console.log(response);
        if(response.data.success) {
          vm.$router.push(`/Home2/customerOrders/${response.data.orderId}`)
        }
        // vm.getCart();
        vm.isLoading = false;
      });
     
    },

    // 搜尋
     xxx(str,category='title') {
       
        const vm = this;
        // if(str=='桌子'){
        //   vm.menu.table =true 
          
        // }else if(str==椅子){
        //   vm.menu.chair =true 
        // }else if(str==床){
        //   vm.menu.bed  =true 
        // }else if(str==沙發){
        //   vm.menu.sofa =true 
        // }

        



        //原有產品資料清空，使用備份的productsBackup，避免二次搜尋時，原有資料被覆蓋
        vm.products = [];
        //vm.products = vm.productsBackup;

        vm.isLoading = true;
        //搜尋暫存
        //vm.products2 = [];

        console.log('0');
        vm.Allpagination.forEach(function(item,index){
          // console.log(item);
          // 如果搜尋欄位未輸入值，就重新抓取資料
          if(str == false){
            console.log('01','xxxx');
            vm.products = vm.productsBackup;
            vm.getProducts();
            return
          }

          // 如果沒有搜尋到
          else if(item[category].indexOf(str) == -1){
            console.log('3');
            return
          }
          else{
            // console.log(item.title.indexOf('測試5'));
             console.log('02',item);
             vm.products.push(item);
             //vm.Allpagination.push(item);
          }
        
        })
        //vm.products = vm.products2;
        //vm.products = vm.Allpagination;
        vm.pagination.total_pages = 1;
        vm.isLoading = false;
      },
      getAllProducts(){
        const vm = this;
        const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products/all`;
        vm.isLoading = true;
          this.$http.get(url).then((response) => {
          vm.Allpagination = response.data.products;
          console.log(response);
          vm.isLoading = false;
        });
      },
      top(){
        $("html,wrap").animate({
            scrollTop: 0
        }, 700);
      }
  },
  created() {
    this.getProducts();
    this.getCart();
    this.getAllProducts();
  },
};
</script>