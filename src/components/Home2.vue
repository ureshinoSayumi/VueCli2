<template>
  <div>

       
        <div class="top">
                    
                    <router-link to="/Home2/Home">
                        <img src="https://upload.cc/i1/2020/08/12/J7xUKn.jpg" alt="">
                    </router-link>
                <ul>
                    <li>
                        <a href="" target="_blank">
                            <router-link to="/Home2/Home">Home</router-link>
                        </a>
                    </li>
                    <li>
                        <a href="" target="_blank">
                            <router-link to="/Loge">登入</router-link>
                        </a>
                    </li>
                    <li>
                        <a href="" target="_blank">
                            <router-link to="/Home2/CustomerOrders">產品列表</router-link>
                        </a>
                    </li>
                    
                </ul>
        </div>


    
        <router-view></router-view>



        <div class="border"></div>

        <div class="bottomCommunity">
            <ul>
                <li><h3>社群:</h3></li>
                    <li>
                        <a href="#">
                            <img src="https://upload.cc/i1/2020/08/12/ybhwVv.png">
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <img src="https://upload.cc/i1/2020/08/12/AHd5hf.png">
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <img src="https://upload.cc/i1/2020/08/12/m6XSDE.png">
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <img src="https://upload.cc/i1/2020/08/12/uW4aQZ.png">
                        </a>
                    </li>

            </ul>
        </div>


        <div class="bottom">
            <ul>
                <li>
                    <a href="" target="_blank">
                        <router-link to="/Home2/Home">Home</router-link>
                    </a>
                </li>
                <li>
                    <a href="" target="_blank">
                        <router-link to="/Loge">登入</router-link>
                    </a>
                </li>
                <li>
                    <a href="" target="_blank">
                        <router-link to="/Home2/CustomerOrders">產品列表</router-link>
                    </a>
                </li>
                
            </ul>
        </div>
            

   
  </div>
</template>
<style scoped>
ol, ul {
	list-style: none; 
}
.footer{
    position: fixed;
    
    right: 50px;
    top: 500px;
    z-index:10;
}
.footer img{
    width: 50px;
    height: 50px;
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
    margin-top: 5px;
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
    background: #e7eeea;
    color:#37523d;
}
.cart{
    position:relative;
}
.cart-1{
    width:20px;
    height:20px;
    background:red;
    z-index:9;
    position:absolute;
    top:15px;
    right:40px;
    border-radius:999em;
}
.cart-1 p{
    color:white;
    font-size:15px;
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
.bottomCommunity li{
    margin-left: auto;
    margin-right: auto;
}
.bottomCommunity img{
    width:50px;
    height:50px;
}


.bottom{
    margin-top:20px;
    background: #37523d;
    height: 60px;
    /* width:50px; */

}
.bottom ul{
    display:flex;
    margin-left: auto;
    margin-right: auto;
    margin-top: 15px;
    width: 400px;
    height: 60px;
    /* border: 1px solid black; */
 
}
.bottom li{
    /* border: 1px solid black; */
    margin:auto;
    
}
.bottom a{
    font-family:sans-serif;
    text-decoration:none;
    text-align: center;

    color: white;
    font-size: 18px;
    display: block;
    width: 100px;
    height: 25px;

}
.bottom a:hover{
    background:#e7eeea;

}

</style>

<script>
// jQuery是Bootstrap其下的套件 雖然在main.js已經載入Bootstrap
// 如果要使用JQ 必須在這個元件下注入
import $ from 'jquery';
import Home from './Home';
import Navbar from './Navbar';
import footerx from './footerx';
// import Pagination from './Pagination';


//default export（預設匯出）
//default export 匯出時不需要預先賦予名稱，
//可以在 import 時另外賦予，但要特別注意 export default 每個檔案僅能有一個。
export default {
  components: {
    Home,
    Navbar,
    footerx,
    // Pagination,
  },
  data() {
    return {
      
      cart:[], //購物車
      cartNum:'',//購物車數量
      
      isTransform: false,
      isLoading: false, // 是否讀取中(大畫面)
    };
  },
    methods:{
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
        // 向上滑動
        top() {
            $("html,wrap").animate({
            scrollTop: 0
            }, 700);
        }
    },
 

    created() {
        this.getCart();
  },  
};
</script>