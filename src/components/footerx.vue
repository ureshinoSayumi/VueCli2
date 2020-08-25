<template>
    <div>
        <div class="footer">
                <img @click="top" src="https://upload.cc/i1/2020/08/15/AqLZ9i.png">
                <div>

                    


                    <div class="cart">

                    <div class="btn-group dropup">
                            
                            <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-cart-fill" fill="white" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                                </svg>
                                <div class="cart-1">
                                    <p> {{ cartNum }} </p>   
                                </div>
                                        
                            </button>
                            <div class="dropdown-menu" >
                                <div class="menuTitle">
                                    <h3>購物車清單</h3>
                                </div>
                                
                                <div class="menuMenu"  v-for="item in cart.carts">

                                    <div class="menuMenuNum0">
                                        {{ item.product.title }}
                                    </div>
                                    <div class="menuMenuNum1">
                                        {{ item.qty }} {{ item.product.unit }}
                                    </div>
                                    <div class="menuMenuNum2">
                                        {{ item.product.price | currency}} 元
                                    </div>
                                     
                                </div>
                                <router-link to="/Home2/shoppingCart">
                                    <button type="button" class="btn btn-primary">
                                        查看購物車
                                    </button>
                                </router-link>
                                <!-- Dropdown menu links -->
                            </div>
                        </div>

                        
                        
                    </div>

                    
                </div>
        </div>
    </div>
</template>
<style scoped>
.footer{
    position: fixed;
    right: 30px;
    top: 500px;
    z-index:10;
}
.footer img{
    width: 50px;
    height: 50px;
    margin-bottom:10px;
    margin-left:15px;
}
.border{
    width:300px;
    border-top:1px solid black;
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
    top:5px;
    left:30px;
    border-radius:999em;
}
.cart-1 p{
    color:white;
    padding-right:0px;
    font-size:15px;
}
/*.cart p {
    font-size:10px;
    padding-left:5px;
}*/
.btn{
    background:#37523d;;
    margin:5px;
    /*background-color:white;opacity:0.1;
    */border:1px white none;
    /*width:40px;
    height:40px;
    
*/}
.dropdown-menu{
    width:300px;
    padding:15px;
}
.menuTitle{
    border-bottom:1px solid #cccccc;
}
.menuTitle h3{
    font-size:20px;
    text-align:center;

}
.menuMenu{
    display:flex;
    justify-content:space-between;
    border-bottom:1px solid #cccccc;
    padding:5px;


}
.menuMenuNum0{
    width:100px;
}
.menuMenuNum2{
    width:100px;
}
.menuMenuNum1{
    width:50px;
}
</style>

<script>
export default {
     // 定義傳入元件資料
    name:"footerx",   
    props: ["cartNum","cart"],
    data() {
        return {
      
            isTransform: false,
            isLoading: false, // 是否讀取中(大畫面)
        }
    },
    methods: {
       
        // $emit可以用來處發實體上的物件v-on:turnPage
        // 第二格可以放入參數  
        top() {
        this.$emit("goTop");
        }
    },
    created() {
        
  },  
}
</script>