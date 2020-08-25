// 進入點 main.js

// Router 配置檔案 (前端路由)

// 分頁內容 Vue Components (**.vue)

import Vue from 'vue'
import VueRouter from 'vue-router'
// 官方的元件

// import Home from '@/components/HelloWorld';
import Page from '@/components/pages/page';
import child from '@/components/pages/child';
import child2 from '@/components/pages/child2';
import child3 from '@/components/pages/child3';
import Menu from '@/components/pages/menu';
import Dashboard from '@/components/Dashboard';
import Login from '@/components/pages/Login';
import Products from '@/components/pages/products';
import Order from '@/components/pages/order';
// import signout from '@/components/HelloWorld';
import Coupon from '@/components/pages/coupon';
import CustomerOrders from '@/components/pages/CustomerOrders';
import CustomerCheckout from '@/components/pages/CustomerCheckout';
import Home from '@/components/Home';
import Home2 from '@/components/Home2';
import shoppingCart from '@/components/pages/shoppingCart';
import productDetails from '@/components/pages/productDetails';



// 自訂的分頁元件

Vue.use(VueRouter)

export default new VueRouter({
   
    routes:[
        // 如果輸入錯誤網址 就導向login
        {
            path:'*',
            redirect:'login',
        },
        {
            name: 'Login', // 元件呈現的名稱
            path: '/login', // 對應的虛擬路徑
            component:Login,  // 對應的元件
        },
        {
            name: '首頁', // 元件呈現的名稱
            path: '/admin', // 對應的虛擬路徑  如果'/'就是直接顯示
            component:Dashboard,  // 對應的元件
            children: [
                {
                    name: 'products', // 元件呈現的名稱
                    path: 'products', // 對應的虛擬路徑
                    component:Products,  // 對應的元件
                    meta: { requiresAuth: true },  //導航守衛認證
                },
                {
                    name: 'order', // 元件呈現的名稱
                    path: 'order', // 對應的虛擬路徑
                    component:Order,  // 對應的元件
                    meta: { requiresAuth: true },  //導航守衛認證
                },
                {
                    name: 'coupon', // 元件呈現的名稱
                    path: 'coupon', // 對應的虛擬路徑
                    component:Coupon,  // 對應的元件
                    meta: { requiresAuth: true },  //導航守衛認證
                },
            ]
        },
        {
            name: '首頁', // 元件呈現的名稱
            path: '/', // 對應的虛擬路徑  如果'/'就是直接顯示
            component:Dashboard,  // 對應的元件
            // children: [
            //     {
            //         name: 'CustomerOrders', // 元件呈現的名稱
            //         path: 'customerOrders', // 對應的虛擬路徑
            //         component:CustomerOrders,  // 對應的元件
            //     },
            //     {
            //         name: 'CustomerCheckout', // 元件呈現的名稱
            //         path: 'customerOrders/:orderId', // 對應的虛擬路徑，路徑可以動態被push近來
            //         component:CustomerCheckout,  // 對應的元件
            //     },
            // ]
        },

        /*{
            name: '首頁', // 元件呈現的名稱
            path: '/Home', // 對應的虛擬路徑
            component:Home,  // 對應的元件
            children: [
                {
                    name: 'CustomerOrders', // 元件呈現的名稱
                    path: 'customerOrders', // 對應的虛擬路徑
                    component:CustomerOrders,  // 對應的元件
                },
                {
                    name: 'CustomerCheckout', // 元件呈現的名稱
                    path: '/Home/customerOrders/:orderId', // 對應的虛擬路徑，路徑可以動態被push近來
                    component:CustomerCheckout,  // 對應的元件
                },

            ]
        },
        {
            name: 'CustomerOrders', // 元件呈現的名稱
            path: '/customerOrders', // 對應的虛擬路徑
            component:CustomerOrders,  // 對應的元件
        },*/
        
        {
            name: 'Home2', // 元件呈現的名稱
            path: '/Home2', // 對應的虛擬路徑
            component:Home2,  // 對應的元件
            children:[
                {
                    name: 'Home', // 元件呈現的名稱
                    path: 'Home', // 對應的虛擬路徑
                    component:Home,  // 對應的元件
                },
                {
                    name: 'CustomerOrders', // 元件呈現的名稱
                    path: 'customerOrders', // 對應的虛擬路徑
                    component:CustomerOrders,  // 對應的元件
                },
                {
                    name: 'CustomerCheckout', // 元件呈現的名稱
                    path: '/Home2/customerOrders/:orderId', // 對應的虛擬路徑，路徑可以動態被push近來
                    component:CustomerCheckout,  // 對應的元件
                },
                {
                    name: 'shoppingCart', // 元件呈現的名稱
                    path: 'shoppingCart', // 對應的虛擬路徑
                    component:shoppingCart,  // 對應的元件
                },
                {
                    name: 'productDetails', // 元件呈現的名稱
                    path: '/Home2/productDetails/:id', // 對應的虛擬路徑，路徑可以動態被push近來
                    component:productDetails,  // 對應的元件
                },
            ]
        },




        /*{
            // name: '分頁', // 元件呈現的名稱
            path: '/page', // 對應的虛擬路徑
            // component:Page,  // 對應的元件
            components: {
                default: Page,
                menu: Menu,
            },
            children:[
                {
                    name: '卡片 1', // 元件呈現的名稱
                    path: '', // 對應的虛擬路徑
                    component:child,  // 對應的元件
                },
                {
                    name: '卡片 2', // 元件呈現的名稱
                    path: 'child2', // 對應的虛擬路徑
                    component:child2,  // 對應的元件
                },
                {
                    name: '卡片 3', // 元件呈現的名稱
                    path: 'child3', // 對應的虛擬路徑
                    component:child3,  // 對應的元件
                },
            ],
        },*/
    ]
});