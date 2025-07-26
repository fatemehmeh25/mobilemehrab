// src/stores/cartStore.js
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: [],
  }),

  actions: {
    addToCart(product) {
      const existing = this.cartItems.find(item => item.id === product.id)
      if (existing) {
        existing.quantity += 1
      } else {
        this.cartItems.push({ ...product, quantity: 1 })
      }
    },

    removeFromCart(id) {
      this.cartItems = this.cartItems.filter(item => item.id !== id)
    },

    clearCart() {
      this.cartItems = []
    },
  },

  getters: {
    totalItems: state => state.cartItems.reduce((acc, item) => acc + item.quantity, 0),
    totalPrice: state =>
      state.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
  },
})
