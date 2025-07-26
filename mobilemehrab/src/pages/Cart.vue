<template>
    <section class="cart">
      <h1 class="cart-title">Your Shopping Cart</h1>
  
      <!-- Empty cart -->
      <div v-if="cartItems.length === 0" class="empty">
        <p>Your cart is empty.</p>
        <router-link to="/shop" class="btn">Browse Products</router-link>
      </div>
  
      <!-- Cart items -->
      <div v-else>
        <CartItem
          v-for="item in cartItems"
          :key="item.id"
          :item="item"
          @remove="removeItem"
          @update="updateItemQuantity"
        />
  
        <!-- Cart Summary -->
        <div class="cart-summary">
          <p class="total">Subtotal: <strong>\${{ totalPrice.toFixed(2) }}</strong></p>
          <router-link to="/checkout" class="btn checkout-btn">Proceed to Checkout</router-link>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import CartItem from '../components/CartItem.vue'
  
  export default {
    name: 'CartPage',
    components: { CartItem },
    data() {
      return {
        cartItems: [
          {
            id: 1,
            name: 'iPhone 15 Pro',
            price: 1099.99,
            quantity: 1,
            image: '/assets/products/iphone15.jpg',
          },
          {
            id: 2,
            name: 'Wireless Charger',
            price: 29.99,
            quantity: 2,
            image: '/assets/products/charger.jpg',
          },
        ],
      }
    },
    computed: {
      totalPrice() {
        return this.cartItems.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        )
      },
    },
    methods: {
      removeItem(id) {
        this.cartItems = this.cartItems.filter(item => item.id !== id)
      },
      updateItemQuantity({ id, quantity }) {
        const item = this.cartItems.find(i => i.id === id)
        if (item) item.quantity = quantity
      },
    },
  }
  </script>
  
  <style scoped>
  .cart {
    padding: 2rem 1rem;
    max-width: 1024px;
    margin: auto;
  }
  
  .cart-title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  .empty {
    text-align: center;
    color: #666;
  }
  
  .cart-summary {
    margin-top: 2rem;
    text-align: right;
    border-top: 1px solid #eee;
    padding-top: 1rem;
  }
  
  .total {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }
  
  .btn {
    background-color: #007bff;
    color: #fff;
    padding: 0.6rem 1.2rem;
    text-decoration: none;
    border-radius: 6px;
    font-weight: 600;
    display: inline-block;
    transition: background-color 0.2s ease-in-out;
  }
  
  .btn:hover {
    background-color: #0056b3;
  }
  
  .checkout-btn {
    margin-top: 0.5rem;
  }
  </style>
  