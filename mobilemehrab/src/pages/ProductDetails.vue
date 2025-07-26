<!-- src/pages/ProductDetails.vue -->
<template>
    <div class="max-w-4xl mx-auto p-4">
      <div class="grid md:grid-cols-2 gap-6">
        <img :src="product.image" alt="product" class="rounded-xl w-full object-cover" />
  
        <div>
          <h1 class="text-3xl font-bold mb-2">{{ product.name }}</h1>
          <p class="text-gray-600 mb-4">{{ product.description }}</p>
          <div class="text-xl font-semibold text-green-600 mb-6">\${{ product.price }}</div>
  
          <button
            class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            @click="addToCart"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  import { useCartStore } from '@/stores/cartStore'
  import { useProductStore } from '@/stores/productStore'
  
  const route = useRoute()
  const cartStore = useCartStore()
  const productStore = useProductStore()
  
  const product = ref({})
  
  onMounted(() => {
    const id = route.params.id
    product.value = productStore.products.find(p => p.id === id) || {}
  })
  
  function addToCart() {
    cartStore.addToCart(product.value)
  }
  </script>
  