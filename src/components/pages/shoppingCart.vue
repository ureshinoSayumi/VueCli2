<template>
    <div class="wrap">
      <footerx :cartNum="cartNum" :cart="cart" @goTop="top"></footerx>
        <div class="index">
                <div>
                    <a href="#">
                        <router-link to="/Home2/Home">首頁></router-link>
                    </a>
                    <a href="#">
                        <router-link to="/Home2/CustomerOrders">產品列表></router-link>
                    </a>
                    <a href="#">購物車清單</a>
                </div>
                
            </div>
        <loading :active.sync="isLoading"></loading>

        <!----------------------------購物車列表---------------------------------->
        <table class="table">
          <thead>
            <th></th>
            <th>縮圖</th>
            <th>品名</th>
            <th>數量</th>
            <th>單價</th>
          </thead>
          <tbody>
            <tr v-for="item in cart.carts">
              <td class="align-middle">
                <button type="button" class="btn btn-outline-danger btn-sm"
                 @click="removeCartItem(item.id)">
                  <i class="far fa-trash-alt"></i>
                </button>
              </td>
              <td class="align-middle">
                <img :src="item.product.imageUrl" >
              </td>
              <td class="align-middle">
                {{ item.product.title }}
                <div class="text-success" v-if="item.coupon">
                  已套用優惠券
                </div> 
              </td>
              <td class="align-middle">{{ item.qty }}/{{ item.product.unit }}</td>
              <td class="align-middle text-right">{{ item.final_total }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3" class="text-right">總計</td>
              <td class="text-right">{{ cart.total }}</td>
            </tr>

            <!-----------------折扣價不等於總計時，才顯示折扣價---------------------------->
            <tr v-if="cart.final_total !== cart.total">
              <td colspan="3" class="text-right text-success">折扣價</td>
              <td class="text-right text-success">{{ cart.final_total }}</td>
            </tr>
          </tfoot>
        </table>
        <div class="input-group mb-3 input-group-sm">
          <input type="text" class="form-control" v-model="coupon_code" placeholder="請輸入優惠碼">
          <div class="input-group-append">
            <button class="btn btn-outline-secondary"  type="button" @click="addCouponCode" >
              套用優惠碼
            </button>
          </div>
        </div>
      


      <div class="my-5 row justify-content-center">
        <form class="col-md-6" @submit.prevent="createOrder">
          <div class="form-group">
            <label for="useremail">Email</label>
            <ValidationProvider name="email" rules="required|email" v-slot="{ errors }">

              <input type="email" class="form-control" name="email" id="useremail"
                v-model="form.user.email" placeholder="請輸入 Email" required>
              <span class="text-danger">{{ errors[0] }}</span>
              
            </ValidationProvider>
            
          </div>


    <!-----------------透過引用 component 的方式來使用它，rules 對應的就是我們在main.js自定的規則---------------------------->
    <!-----------------errors[0] 則代表驗證錯誤的話就會顯示該規則底下定義的 messages---------------------------->
    <!-----------------"min:3" 3是傳入的參數，未超過3個字串就顯示錯誤訊息---------------------------->
      
          <div class="form-group">
            <label for="username">收件人姓名</label>

            <ValidationProvider rules="min:3" v-slot="{ errors }">
              <input type="text" class="form-control" name="name" id="username"
                v-model="form.user.name" placeholder="輸入姓名" required
                :class="{'is-invalid' : errors[0]}">
              <span class="text-danger" v-if="!form.user.name">姓名必須輸入</span> 
              <span class="text-danger" v-if="form.user.name">{{ errors[0] }}</span>  
            </ValidationProvider>   
          </div>
        
          <div class="form-group">
            <label for="usertel">收件人電話</label>
            <input type="tel" class="form-control" id="usertel" v-model="form.user.tel" placeholder="請輸入電話">
          </div>
        
          <div class="form-group">
            <label for="useraddress">收件人地址</label>
            <input type="text" class="form-control" name="address" id="useraddress" v-model="form.user.address"
              placeholder="請輸入地址">
            <span class="text-danger" v-if="!form.user.address">地址欄位不得留空</span>
          </div>
        
          <div class="form-group">
            <label for="comment">留言</label>
            <textarea name="" id="comment" class="form-control" cols="30" rows="10" v-model="form.message"></textarea>
          </div>
          <div class="text-right">
            <button class="btn btn-danger">送出訂單</button>
          </div>
        </form>
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
              成功刪除產品
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
    width:1063px;
    margin-left: auto ;
    margin-right: auto;
}
.align-middle img{
  width:192.5;
  height:125px;
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
        cart:[], //購物車
        cartNum:'',
        form: {  //送出訂單
            user: {
            name: '',
            email: '',
            tel: '',
            address: '',
            },
            message: '',
        },
        isLoading: false, // 是否讀取中(大畫面)
        coupon_code:'',
        };
    },


    methods: {
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
            $('#exampleModal').modal('show');
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
      top(){
        $("html,wrap").animate({
            scrollTop: 0
        }, 700);
      },
    },
    created() {
      this.getCart();
      this.top();
  },
}
</script>