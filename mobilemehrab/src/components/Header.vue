<!-- src/components/Header.vue -->
<template>
    <header class="header">
      <router-link to="/" class="logo">MyMobileShop</router-link>
  
      <nav class="nav">
        <router-link to="/shop" class="nav-link">Shop</router-link>
        <router-link to="/cart" class="nav-link">Cart</router-link>
  
        <div class="auth-links">
          <template v-if="!isLoggedIn">
            <router-link to="/login" class="btn btn-outline">Login</router-link>
            <router-link to="/signup" class="btn btn-primary">Sign Up</router-link>
          </template>
          <template v-else>
            <router-link to="/account" class="nav-link">Account</router-link>
            <button class="btn btn-logout" @click="logout">Logout</button>
          </template>
        </div>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header',
    data() {
      return {
        // Replace with real auth check logic or Pinia store/state
        isLoggedIn: false,
      }
    },
    methods: {
      logout() {
        // Replace with real logout logic
        alert('Logged out!')
        this.isLoggedIn = false
        this.$router.push('/')
      },
    },
  }
  </script>
  
  <style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    align-items: center;
    background-color: #fff;
    border-bottom: 1px solid #eee;
  }
  
  .logo {
    font-weight: 700;
    font-size: 1.4rem;
    color: #007bff;
    text-decoration: none;
  }
  
  .nav {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  
  .nav-link {
    color: #333;
    text-decoration: none;
    font-weight: 500;
  }
  
  .auth-links {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
  
  .btn {
    padding: 0.4rem 1rem;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 600;
    border: none;
  }
  
  .btn-outline {
    border: 1.5px solid #007bff;
    color: #007bff;
    background: transparent;
  }
  
  .btn-outline:hover {
    background-color: #007bff;
    color: white;
  }
  
  .btn-primary {
    background-color: #007bff;
    color: white;
  }
  
  .btn-primary:hover {
    background-color: #0056b3;
  }
  
  .btn-logout {
    background: transparent;
    border: none;
    color: #d33;
    font-weight: 600;
    cursor: pointer;
  }
  
  .btn-logout:hover {
    text-decoration: underline;
  }
  </style>
  