<template>
    <section class="auth-page">
      <h1>Sign Up</h1>
      <form @submit.prevent="submitSignUp" class="auth-form">
        <label>Email</label>
        <input v-model="email" type="email" required />
  
        <label>Password</label>
        <input v-model="password" type="password" required minlength="6" />
  
        <label>Confirm Password</label>
        <input v-model="confirmPassword" type="password" required minlength="6" />
  
        <button type="submit" class="btn btn-primary">Create Account</button>
      </form>
      <p>
        Already have an account?
        <router-link to="/login">Login</router-link>
      </p>
    </section>
  </template>
  
  <script>
  export default {
    name: 'SignUpPage',
    data() {
      return {
        email: '',
        password: '',
        confirmPassword: '',
      }
    },
    methods: {
      submitSignUp() {
        if (!this.email || this.password.length < 6) {
          return alert('Please provide valid email and password.')
        }
        if (this.password !== this.confirmPassword) {
          return alert('Passwords do not match.')
        }
        alert(`Account created for ${this.email}`)
        this.$router.push('/login')
      },
    },
  }
  </script>
  
  <style scoped>
  /* same styling as Login.vue, or extract common styles to a shared CSS */
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
  