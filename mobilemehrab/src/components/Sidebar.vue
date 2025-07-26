<!-- Sidebar.vue -->
<template>
    <aside :class="{ open: visible }" class="sidebar">
      <button class="btn-close" @click="$emit('close')" aria-label="Close Sidebar">×</button>
  
      <h3>Categories</h3>
      <ul>
        <li><router-link to="/shop?category=phones" @click="$emit('close')">Phones</router-link></li>
        <li><router-link to="/shop?category=tablets" @click="$emit('close')">Tablets</router-link></li>
        <li><router-link to="/shop?category=accessories" @click="$emit('close')">Accessories</router-link></li>
      </ul>
    </aside>
  </template>
  
  <script>
  export default {
    name: 'Sidebar',
    props: {
      visible: Boolean,
    },
  }
  </script>
  
  <style scoped>
  .sidebar {
    position: fixed;
    top: 0;
    left: -250px; /* hidden by default */
    width: 250px;
    height: 100vh;
    background: #f8f8f8;
    box-shadow: 2px 0 8px rgba(0, 0, 0, 0.15);
    padding: 1rem;
    transition: left 0.3s ease;
    z-index: 1000;
  }
  
  .sidebar.open {
    left: 0;
  }
  
  .btn-close {
    font-size: 1.5rem;
    background: none;
    border: none;
    cursor: pointer;
    margin-bottom: 1rem;
    user-select: none;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    margin-bottom: 1rem;
  }
  a {
    color: #333;
    text-decoration: none;
    font-weight: 600;
  }
  a:hover {
    text-decoration: underline;
  }
  </style>
  