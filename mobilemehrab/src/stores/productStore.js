// src/stores/productStore.js
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [
      {
        id: '1',
        name: 'iPhone 14 Pro',
        price: 999,
        description: 'A powerful smartphone from Apple.',
        image: 'https://via.placeholder.com/300x300',
      },
      {
        id: '2',
        name: 'Samsung Galaxy S22',
        price: 899,
        description: 'A flagship Android device.',
        image: 'https://via.placeholder.com/300x300',
      },
      // Add more as needed
    ]
  }),
})
