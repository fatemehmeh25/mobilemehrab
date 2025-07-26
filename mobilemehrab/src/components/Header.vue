<template>
    <header class="header">
      <div class="container">
        <router-link to="/" class="logo">MobileShop</router-link>
        <nav class="nav">
          <router-link to="/" class="nav-link" exact>Home</router-link>
          <router-link to="/shop" class="nav-link">Shop</router-link>
          <router-link to="/cart" class="nav-link">Cart</router-link>
        </nav>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header',
  }
  </script>
  
  <style scoped>
  .header {
    background-color: #ffffff;
    border-bottom: 1px solid #eee;
    padding: 0.75rem 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
  }
  
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1024px;
    margin: 0 auto;
  }
  
  .logo {
    font-weight: 700;
    font-size: 1.25rem;
    color: #333;
    text-decoration: none;
  }
  
  .nav {
    display: flex;
    gap: 1rem;
  }
  
  .nav-link {
    text-decoration: none;
    color: #555;
    font-weight: 500;
    transition: color 0.2s ease-in-out;
  }
  
  .nav-link:hover,
  .router-link-exact-active {
    color: #007bff;
  }
  </style>
  