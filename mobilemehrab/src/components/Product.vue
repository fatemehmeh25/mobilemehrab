<template>
    <div class="product-card">
      <img :src="product.image" :alt="product.name" class="product-image" />
  
      <div class="product-info">
        <h2 class="product-name">{{ product.name }}</h2>
        <p class="product-price">\${{ product.price.toFixed(2) }}</p>
  
        <button
          class="add-button"
          @click="$emit('add-to-cart', product)"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Product',
    props: {
      product: {
        type: Object,
        required: true,
      },
    },
  }
  </script>
  
  <style scoped>
  .product-card {
    border: 1px solid #eee;
    border-radius: 10px;
    padding: 1rem;
    background: #fff;
    display: flex;
    flex-direction: column;
    text-align: center;
    transition: box-shadow 0.2s ease;
  }
  
  .product-card:hover {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  }
  
  .product-image {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 6px;
    margin-bottom: 0.75rem;
  }
  
  .product-name {
    font-size: 1rem;
    font-weight: 600;
    margin: 0.5rem 0;
  }
  
  .product-price {
    color: #333;
    font-weight: 500;
    margin-bottom: 1rem;
  }
  
  .add-button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
  }
  
  .add-button:hover {
    background-color: #0056b3;
  }
  </style>
  