<template>

    <div>

        <!---------------------------載入元件---------------------------------->
        <footerx :cartNum="cartNum" :cart="cart" @goTop="top"></footerx>

        <div class="wrap">
            <!---------------------------最新消息---------------------------------->
            <div class="banner">
                <h4>最新消息</h4>
                <img src="https://upload.cc/i1/2020/08/09/WmSna5.png">
                <h5>開幕優惠! 優惠卷即刻領取，數量有限，要搶要快!</h5>
            </div>

            <div class="center">
                
                <!---------------------------bs輪播---------------------------------->
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-interval="1000">

                    
                        <a href="">
                        <router-link to="/Home2/CustomerOrders">
                        <img src="https://upload.cc/i1/2020/08/12/deRJHl.bmp" class="d-block w-100" alt="...">
                        
                        </router-link>
                        </a>
                        
                        </div>
                        <div class="carousel-item" data-interval="1000">
                        <img src="https://upload.cc/i1/2020/08/11/ZJTFMD.jpg" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item" data-interval="1000">
                        <img src="https://upload.cc/i1/2020/08/11/5XhRF2.jpg" class="d-block w-100" alt="...">
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
 
            </div>

                
            <div class="border"></div>
            
            <!---------------------------熱銷商品---------------------------------->
            <div class="center-1">

                <div>
                    <h1 class="centerTitle">熱銷商品</h1>
                </div>

                <div class="center-1-flex">

                    <router-link to="/Home2/productDetails/-MEgehvtQaiXwxJygsgR">
                        <h5>{{ products[0].title }}</h5>
                        <i class="fas fa-spinner fa-spin fa-10x" v-if="isLoading"></i>
                        <img :src="products[0].imageUrl" class="d-block w-100" alt="..." v-if="!isLoading">
                    </router-link>

                    <router-link to="/Home2/productDetails/-MEgeY-fpt8JByL8Uw0r">
                        <h5>{{ products[1].title }}</h5>
                        <i class="fas fa-spinner fa-spin fa-10x" v-if="isLoading"></i>
                        <img :src="products[1].imageUrl" class="d-block w-100" alt="..." v-if="!isLoading">
                    </router-link>

                    <router-link to="/Home2/productDetails/-MEgeI9pvhhvQBAsKrJT">
                        <h5>{{ products[2].title }}</h5>
                        <i class="fas fa-spinner fa-spin fa-10x" v-if="isLoading"></i>
                        <img :src="products[2].imageUrl" class="d-block w-100" alt="..." v-if="!isLoading">
                    </router-link>
                    
                </div>
                <div class="center-1-flex">
                    <router-link to="/Home2/productDetails/-MEgdz-IDlDFJlyBnC-u">
                        <h5>{{ products[3].title }}</h5>
                        <i class="fas fa-spinner fa-spin fa-10x" v-if="isLoading"></i>
                        <img :src="products[3].imageUrl" class="d-block w-100" alt="..." v-if="!isLoading">
                    </router-link>

                    <router-link to="/Home2/productDetails/-MEZ1s1U2rCJfTN6XEGO">
                        <h5>{{ products[4].title }}</h5>
                        <i class="fas fa-spinner fa-spin fa-10x" v-if="isLoading"></i>
                        <img :src="products[4].imageUrl" class="d-block w-100" alt="..." v-if="!isLoading">
                    </router-link>

                    <router-link to="/Home2/productDetails/-MEZ1eI7L1h9wpgH1_5W">
                        <h5>{{ products[5].title }}</h5>
                        <i class="fas fa-spinner fa-spin fa-10x" v-if="isLoading"></i>
                        <img :src="products[5].imageUrl" class="d-block w-100" alt="..." v-if="!isLoading">
                    </router-link>
                </div>
                
            </div>
           
            
            <div class="border"></div>


            <!---------------------------北歐風 3 大重點---------------------------------->
            <div>
                <h1 class="centerTitle">北歐風 3 大重點！</h1>
            </div>

            <div class="center-1-explanation">
                <div class="center-1-explanation-text">
                    <h5>寬敞明亮高採光｜放大居家視野</h5>
                    <p>
                        北歐風格對於採光有高度的要求，所以在設計中，除了善用留白空間，大量運用採光也是一大設計重點。運用大片的落地窗納入陽光，營造舒適環境氛圍；高採光空間使之寬敞明亮，帶來清爽、乾淨的舒適空間與無壓力的自在感。
                    </p>
                </div>
                <img src="https://decomyplace.com/img/blog/170424_nordic_4.jpg">
            </div>

            <div class="center-1-explanation">
                
                <img src="https://decomyplace.com/img/blog/170424_nordic_3.jpg">
                <div class="center-1-explanation-text">
                    <h5>木質傢俱最自然｜如沐春風生活</h5>
                    <p>
                        北歐人熱愛大自然，而這一點也充分運用到生活設計中。北歐風格中往往會用到大量的木質裝潢，並適度搭配綠植栽，使居家空間營建出自然、舒服的氣氛。而木頭材質給人溫馨、溫暖的感覺，並適時的運用地毯、布沙發與抱枕等豐富的軟裝，營造北歐風格氛圍，讓你生活在無束縛感的空間。
                    </p>
                </div>
            </div>

            <div class="center-1-explanation">
                <div class="center-1-explanation-text">
                    <h5>提升空間通透感｜溫暖簡潔設計</h5>
                    <p>
                        北歐風格另一個特點就是營造溫暖、活潑的空間，採用簡潔、開放式格局，善用充足的採光來提升空間通透感。在設計方面，適切的留白並使用跳色牆面，或是使用大地色、文化石牆面，使得空間視野變大。
                    </p>
                </div>
                <img src="https://decomyplace.com/img/blog/170424_nordic_7.jpg">
            </div>
        

            <div class="border"></div>


            <!---------------------------優惠碼---------------------------------->
            <div class="center-1-coupon">
                <div class="center-1-coupon-flex">
                    <h3>優惠碼:</h3>
                    <h3>XIANHDLDYQ618573184</h3>
                </div>
            </div>



        </div>
          
    </div>
</template>



<style scoped>
ol, ul {
	list-style: none; 
}

.wrap{
    background: #ffffff;
    /* justify-content:space-between; */

}
.top{
    /*position: fixed;
    top:0;
    right:0;
    left:0;
    z-index:10;*/
    margin-bottom:20px;
    background:#37523d;
    height:70px;
    display: flex;
    justify-content: space-between;
    
}
.top img{
    margin-left: 30px;
    margin-top: 10px;
    height: 60px;
    /* margin-top: 10px; */
}
.top ul{
    font-family:sans-serif;
    display:flex;
    margin: 15px;

}
.top li{
    /* margin-right: 15px; */
  
}
.top a{
    text-decoration:none;
    font-size: 20px;
    color: white;
    display: block;
    text-align: center;
    padding-top:3px;
    width: 120px;
    height:40px;
}
.top a:hover{
    background: #37523d;
    color:white;
}


.banner{
    width:1100px;
    margin-bottom:5px;
    margin-left: auto ;
    margin-right: auto;
    display:flex;
}
.banner h4{
    font-size:20px;
    color: black;
}
.banner h5{
    font-size:15px;
    font: inherit;
    padding-top:2px;
}
.banner img{
    margin-top:3px;
    height:21px;
    width:21px;
}
.center{
    /* display:flex; */
    width:1300px;
    margin-left: auto ;
    margin-right: auto;
    /* background: pink; */

}

.center h2{
    font-family:sans-serif;
    font-size: 25px;
}
.center h3{
    font-family:sans-serif;
    font-size: 22px;
    margin-bottom: 15px;
    margin-top: 15px;

}

.center-1{
    margin-left: auto ;
    margin-right: auto;
}
.centerTitle{
    font-size: 35px;
    padding-bottom:10px;
    text-align: center;
    color:#37523d;
    font-family:cursive;
}
.center-1-flex{
    
    width:1250px;
    display:flex;
    /*background:black;*/
    margin-left: auto;
    margin-right: auto;
}

.center-1-flex a{
    
    display:block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom:50px;
    width:385px;
}
.center-1-flex img{
    width:385px;
}
.center-1-flex h5{
    color:#37523d;
    text-align:center;
}

.border{
    margin:50px;
    border-top:1px #cccccc solid;
}
.bottomCommunity{
}
.bottomCommunity h3{
    font-size:20px;
    padding-top:10px;
}
.bottomCommunity ul{
    display:flex;
    margin-left: auto;
    margin-right: auto;
    width: 400px;
    height:50px;
}
.bottomCommunity a{
    margin-left: auto;
    margin-right: auto;
}
.bottomCommunity img{
    width:50px;
    height:50px;
}


.center-1-coupon{
    width:1250px;
    margin-left: auto;
    margin-right: auto;
    background:#e7eeea;
}
.center-1-coupon-flex{
    display:flex;
    justify-content:center;
    align-items:center;
    padding:30px;
}
.center-1-explanation{
    display:flex;
    width:1250px;
    margin-left: auto;
    margin-right: auto;
    background:white;
    margin-bottom:20px;
}
.center-1-explanation-text{
    padding:40px 20px 20px 20px;
    color:#37523d;
}
.center-1-explanation-text h5{
    line-height: 24px;
    letter-spacing: 3px;
    padding-bottom:50px;
}
.center-1-explanation-text p{
    line-height: 34px;
    letter-spacing: 3px;
}

</style>
<script>
import $ from 'jquery';
import footerx from './footerx';

export default {
    components: {
        footerx,
    },
    data() {
        return {
            products:[],
            cart:[],
            cartNum:'',
            pagination:'',
            xx:[],
            order: {
                user:{},
            },
            orderId: '',
            isLoading: false,
        }
    },

     methods: {
        // 取得資料
        getProducts(page = 1){
          // ?page=page 要取得的頁數
            const api = `${process.env.APIPATH}/API/${process.env.CUSTOMPATH}/products?page=${page}`;
           
            const vm = this;
            vm.isLoading = true; //資料讀取中
            this.$http.get(api).then((response) =>{
              console.log(response.data)
              vm.isLoading = false;  //資料讀取結束
              vm.products = response.data.products;
              vm.pagination = response.data.pagination; 
              console.log(vm.products[0].imageUrl);

              vm.xx.push(vm.products[0].imageUrl);
              vm.xx.push(vm.products[1].imageUrl);
              vm.xx.push(vm.products[2].imageUrl);
              vm.xx.push(vm.products[3].imageUrl);
              vm.xx.push(vm.products[4].imageUrl);
              vm.xx.push(vm.products[5].imageUrl);
            });
        },
        getCart() {
            const vm = this;
            const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
            vm.isLoading = true;
            this.$http.get(url).then((response) => {
                console.log(response.data.data, '取得購物車');
                vm.isLoading = false;
                vm.cart = response.data.data;
                vm.cartNum = response.data.data.carts.length;
            });
        },
        top() {
            $("html,wrap").animate({
            scrollTop: 0
            }, 700);
        },
    
    },
    created() {
        this.getProducts();
        this.getCart();
        
    },
}
</script>