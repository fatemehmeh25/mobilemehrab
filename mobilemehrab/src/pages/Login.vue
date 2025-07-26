<template>
    <section class="auth-page">
      <h1>Login</h1>
      <form @submit.prevent="submitLogin" class="auth-form">
        <label>Email</label>
        <input v-model="email" type="email" required />
  
        <label>Password</label>
        <input v-model="password" type="password" required minlength="6" />
  
        <button type="submit" class="btn btn-primary">Login</button>
      </form>
      <p>
        Don't have an account?
        <router-link to="/signup">Sign Up</router-link>
      </p>
    </section>
  </template>
  
  <script>
  export default {
    name: 'LoginPage',
    data() {
      return {
        email: '',
        password: '',
      }
    },
    methods: {
      submitLogin() {
        // Replace with real auth
        if (this.email && this.password.length >= 6) {
          alert(`Logged in as ${this.email}`)
          this.$router.push('/account')
        } else {
          alert('Please fill in all fields correctly.')
        }
      },
    },
  }
  </script>
  
  <style scoped>
  .auth-page {
    max-width: 400px;
    margin: 3rem auto;
    padding: 2rem;
    border: 1px solid #eee;
    border-radius: 8px;
  }
  
  .auth-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  input {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 1rem;
  }
  
  button {
    padding: 0.7rem;
    border: none;
    background-color: #007bff;
    color: white;
    border-radius: 6px;
    font-weight: 600;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  p {
    margin-top: 1rem;
  }
  </style>
  