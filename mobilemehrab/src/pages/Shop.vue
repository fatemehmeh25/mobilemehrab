<template>
    <section class="shop">
      <h1 class="shop-title">Shop Products</h1>
  
      <!-- Optional category filter display -->
      <p v-if="categorySlug !== 'all'" class="category-label">
        Showing: <strong>{{ categorySlug }}</strong>
      </p>
  
      <div class="product-grid">
        <router-link :to="`/product/${product.id}`">
            <Product
          v-for="product in filteredProducts"
          :key="product.id"
          :product="product"
          @add-to-cart="addToCart"
        />
    </router-link>

      </div>
    </section>
  </template>
  
  <script>
  import Product from '../components/Product.vue'
  
  export default {
    name: 'ShopPage',
    components: { Product },
    data() {
      return {
        products: [
          {
            id: 1,
            name: 'iPhone 15 Pro',
            price: 1099.99,
            image: '/assets/products/iphone15.jpg',
            category: 'smartphones',
          },
          {
            id: 2,
            name: 'Samsung Galaxy S23',
            price: 999.99,
            image: '/assets/products/s23.jpg',
            category: 'smartphones',
          },
          {
            id: 3,
            name: 'Wireless Charger',
            price: 29.99,
            image: '/assets/products/charger.jpg',
            category: 'accessories',
          },
          {
            id: 4,
            name: 'Apple Watch Series 9',
            price: 399.99,
            image: '/assets/products/watch.jpg',
            category: 'wearables',
          },
        ],
      }
    },
    computed: {
      categorySlug() {
        return this.$route.query.category || 'all'
      },
      filteredProducts() {
        if (this.categorySlug === 'all') return this.products
        return this.products.filter(p => p.category === this.categorySlug)
      },
    },
    methods: {
      addToCart(product) {
        this.$emit('add-to-cart', product) // Optionally bubble to App or global store
        alert(`${product.name} added to cart!`)
      },
    },
  }
  </script>
  
  <style scoped>
  .shop {
    padding: 2rem 1rem;
    max-width: 1024px;
    margin: auto;
  }
  
  .shop-title {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
  
  .category-label {
    font-size: 0.95rem;
    color: #666;
    margin-bottom: 1rem;
  }
  
  .product-grid {
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  }
  </style>
  