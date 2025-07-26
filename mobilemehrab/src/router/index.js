// src/router/index.js (or wherever your router is defined)
import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import Shop from '../pages/Shop.vue'
import Cart from '../pages/Cart.vue'
import Checkout from '../pages/Checkout.vue'
import Login from '../pages/Login.vue'
import SignUp from '../pages/SignUp.vue'
import Account from '../pages/Account.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/shop', component: Shop },
  { path: '/cart', component: Cart },
  { path: '/checkout', component: Checkout },
  { path: '/login', component: Login },
  { path: '/signup', component: SignUp },
  { path: '/account', component: Account },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
