<template>
    <div>
        <footerx :cartNum="cartNum" :cart="cart" @goTop="top"></footerx>
        <loading :active.sync="isLoading"></loading>
        
        <div class="wrap">
            <div class="index">
                <div>
                    <a href="#">
                        <router-link to="/Home2/Home">首頁></router-link>
                    </a>
                    <a href="#">
                        <router-link to="/Home2/CustomerOrders">產品列表></router-link>
                    </a>
                    <a href="#">{{ product.title }}</a>
                </div>
                
            </div>
            <h3>【{{ product.title }}】</h3>

            <div class="product">

                <div class="productImg">
                    <img  :src="product.imageUrl" class="img-fluid" alt="">
                    <div class="productRemarks">
                        <h5>商品備註</h5>
                        <ul>    
                            <li>物品狀況： 全新</li>
                            <li>物品所在地： 台灣.台北市</li>
                            <li>上架時間： 2019-05-17 15:28:10</li>
                            <li>可能會提前結束販售</li>
                        </ul>
                    </div>
                    
                </div>

                <div>
                    <div class="productManu">
                        <div class="productManu-0">
                            <h6>{{ product.content }}</h6>
                            <h6>{{ product.description }}</h6>
                        </div>
                        <div class="productManu-1">
                            <div class="originPriceX" v-if="!product.price">{{ product.origin_price | currency }} 元</div>
                            
                            <div class="originPrice" v-if="product.price">
                                <h4>原價 {{ product.origin_price | currency }} 元</h4>
                            </div>
                            <div class="price" v-if="product.price">
                                <h4>網路價 {{ product.price | currency }} 元</h4>
                            </div>
                        </div>
                        <div class="productManu-2">
                            <select name="" class="form-control mt-3" v-model="product.num">
                                <option :value="num" v-for="num in 10" :key="num">
                                    選購 {{num}} {{product.unit}}
                                </option>
                            </select>
                        </div>
                        <div class="productManu-3">
                            <h6>總計{{ product.num * product.price | currency }}元</h6>
                            <button type="button" class="btn btn-primary"
                                @click="addtoCart(product.id, product.num)">
                            <i class="fas fa-spinner fa-spin" v-if="product.id === status.loadingItem"></i>
                            加到購物車
                            </button>
                        </div>
                        
                        
                    </div>
                    <div class="productManu-4">
                        <p>優惠活動：限時！全館消費免運。</p>
                    </div>
                    <div class="productManu-5">
                        <h6>付款方式:</h6>
                        <ul>
                            <li><img src="https://upload.cc/i1/2020/08/15/Z9u1wK.png">全家取貨付款</li>
                            <li><img src="https://upload.cc/i1/2020/08/15/5cdIyr.png">7-11取貨付款</li>
                            <li>銀行或郵局轉帳</li>
                            <li>貨到付款</li>
                            
                        </ul>
                    </div>
                    <div class="productManu-5">
                        <h6>運送方式:</h6>
                        <ul>
                            <li><img src="https://upload.cc/i1/2020/08/15/Z9u1wK.png">全家取貨付款 60 元</li>
                            <li><img src="https://upload.cc/i1/2020/08/15/5cdIyr.png">7-11取貨付款 60 元</li>
                            <li>宅配/快遞 100 元</li>
                            <li>貨到付款 130 元</li>
                            
                        </ul>
                        <div class="productManu-5Button">
                        <router-link to="/Home2/shoppingCart">
                            <button type="button" class="btn btn-primary">
                                <i class="fas fa-spinner fa-spin" v-if="product.id === status.loadingItem"></i>
                                查看購物車
                            </button>
                        </router-link>
                        </div>
                        
                    </div>
                </div>
                

                
                
            </div>

            <div class="Popular">
                <h5>熱銷商品</h5>
            </div>
            <div class="center-1-flex" >
                <div v-for="item in products">    
                    <a href="#" @click="getProduct(item.id)" >
                        <img :src="item.imageUrl" class="d-block w-100" alt="..." v-if="!isLoading">
                        <h6>{{ item.title }}</h6>
                    </a>
                </div>    
                    
            </div>
            

                <!--
              <div class="modal-dialog" role="document">
                  <div class="modal-content">
                      <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">{{ product.title }}</h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                          </button>
                      </div>
                      <div class="modal-body">
                          <img :src="product.imageUrl" class="img-fluid" alt="">
                          <blockquote class="blockquote mt-3">
                          <p class="mb-0">{{ product.content }}</p>
                          <footer class="blockquote-footer text-right">{{ product.description }}</footer>
                          </blockquote>
                          <div class="d-flex justify-content-between align-items-baseline">
                          <div class="h4" v-if="!product.price">{{ product.origin_price }} 元</div>
                          <del class="h6" v-if="product.price">原價 {{ product.origin_price }} 元</del>
                          <div class="h4" v-if="product.price">現在只要 {{ product.price }} 元</div>
                          </div>
                          <select name="" class="form-control mt-3" v-model="product.num">
                          <option :value="num" v-for="num in 10" :key="num">
                              選購 {{num}} {{product.unit}}
                          </option>
                          </select>
                      </div>
                      <div class="modal-footer">
                          <div class="text-muted text-nowrap mr-3">
                          小計 <strong>{{ product.num * product.price }}</strong> 元
                          </div>
                          <button type="button" class="btn btn-primary"
                            @click="addtoCart(product.id, product.num)">
                          <i class="fas fa-spinner fa-spin" v-if="product.id === status.loadingItem"></i>
                          加到購物車
                          </button>
                      </div>
                  </div>
              </div>
              -->


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
    </div>
</template>
<style scoped>
ul, li{
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}
ol, ul {
    list-style: none;
}
.index{
    height:40px;
    padding:10px;
    background: #e7eeea;
    border-radius:10px;
    margin-bottom:15px;
}
.index a{
    color:#37523d;
}
.wrap{
    
    width:1063px;
    margin-left: auto ;
    margin-right: auto;
}
.product{
    display:flex;
    justify-content:space-around;
}
.product img{
    box-shadow:0px 0px 9px #e7eeea;
}
.productRemarks{
    margin-top:20px;
}
.productRemarks h5{
    padding-left:10px;
}
.productRemarks li{
    margin-top:10px;
    padding-left:10px;
}
.productManu{
    margin-left:20px;
    border-radius:10px;
    width:600px;
    background: #e7eeea;
    padding:15px;
}
.productManu-0{
    display:flex;
    justify-content:space-between;
    
}
.productManu-1{
    display:flex;
    justify-content:space-between;
    margin-top:10px;
    
}
.originPriceX{
    
}
.originPrice{
    text-decoration:line-through;
}
.productManu-2{
    width:150px;
}

.productManu-3{
    display:flex;
    justify-content:flex-end;
    margin-top:20px;
}
.productManu-3 h6{
    margin:10px;
}

.productManu-4{
    margin-left:20px;
    margin-top:10px;
    border-bottom:1px solid #cccccc;
}
.productManu-5{
    display:flex;
    margin-top:20px;
    margin-left:20px;
}
.productManu-5 img{
    width:20px;
    height:20px;
}
.productManu-5 li{
    padding-left:10px;
    margin-bottom:10px;
}
.productManu-5Button{
    margin-left:auto;
    margin-top:auto;
}

.Popular h5{
    margin-top:30px;
    padding-top:15px;
    border-top: 1px solid #cccccc;
    text-align:center;
}
.center-1-flex {
    display:flex;
    margin-left: auto;
    margin-right: auto;
}

.center-1-flex a{
    
    display:block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom:50px;
    padding:5px;
}
.center-1-flex img{
    box-shadow:0px 0px 9px #e7eeea;
}
.center-1-flex h6{
    font-size:13px;
    color:#37523d;
    text-align:center;
}
</style>

<script>
import $ from 'jquery';

import footerx from '../footerx';
export default {
    components: {
        footerx,
    },
    data() {
        return {
            id: '',
            product:[],
            products:[],
            pagination:[],
            cart:[],
            cartNum:'',
            status: {
                loadingItem: '', //儲存item id 確認是否讀取中
            },
            isLoading: false,
        }
    },
    methods:{
        // 取得資料
        getProducts(page = 1){
          // ?page=page 要取得的頁數
            const api = `${process.env.APIPATH}/API/${process.env.CUSTOMPATH}/products?page=${page}`;
            // console.log(process.env.APIPATH, process.env.CUSTOMPATH);
            // 使用main.js載入的AJAX套件來載入AJAX
            const vm = this;
            vm.isLoading = true; //資料讀取中
            this.$http.get(api).then((response) =>{
              console.log(response.data)
              vm.isLoading = false;  //資料讀取結束
              vm.products = response.data.products;
              vm.pagination = response.data.pagination; //取得資料時把pagination存起來
              console.log(vm.products[0].imageUrl);

            });
        },

        // 取得單一產品API
        getProduct(id) {
            const vm = this;
            const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/product/${id}`;
            vm.status.loadingItem = id; 
            vm.isLoading = true;
            this.$http.get(url).then((response) => {
                console.log(response);
                if(response.data.success) {
                    vm.$router.push(`/Home2/productDetails/${response.data.product.id}`)
                }
                vm.isLoading = false;
                vm.product = response.data.product;
                //$('#productModal').modal('show');
                
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
        top(){
        $("html,wrap").animate({
            scrollTop: 0
        }, 700);
      },
      
    },

    created() {
        this.id = this.$route.params.id;  //動態取得route上id
        this.getProduct(this.id);
        this.getCart();
        this.getProducts();
        this.top();
    },
}
</script>