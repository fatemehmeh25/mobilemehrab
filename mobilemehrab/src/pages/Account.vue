<template>
    <section class="account-page">
      <h1>My Account</h1>
  
      <div v-if="user">
        <p><strong>Email:</strong> {{ user.email }}</p>
        <button class="btn btn-logout" @click="logout">Logout</button>
      </div>
  
      <div v-else>
        <p>You are not logged in.</p>
        <router-link to="/login" class="btn btn-primary">Login</router-link>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'AccountPage',
    data() {
      return {
        // For demo, store user info here or use global store
        user: { email: 'user@example.com' }, // replace with real auth state
      }
    },
    methods: {
      logout() {
        alert('Logged out!')
        this.user = null
        this.$router.push('/')
      },
    },
  }
  </script>
  
  <style scoped>
  .account-page {
    max-width: 400px;
    margin: 3rem auto;
    padding: 2rem;
    border: 1px solid #eee;
    border-radius: 8px;
  }
  
  .btn-logout {
    background: transparent;
    border: none;
    color: #d33;
    font-weight: 600;
    cursor: pointer;
    margin-top: 1rem;
  }
  
  .btn-logout:hover {
    text-decoration: underline;
  }
  
  .btn-primary {
    background-color: #007bff;
    color: white;
    padding: 0.7rem;
    border: none;
    border-radius: 6px;
    font-weight: 600;
    cursor: pointer;
    margin-top: 1rem;
    display: inline-block;
    text-align: center;
    text-decoration: none;
  }
  
  .btn-primary:hover {
    background-color: #0056b3;
  }
  </style>
  