<template>
    <section class="checkout">
      <h1 class="title">Checkout</h1>
  
      <form @submit.prevent="submitOrder" class="checkout-form">
        <!-- Shipping Info -->
        <h2 class="section-title">Shipping Information</h2>
        <div class="form-group">
          <label>Full Name</label>
          <input v-model="form.name" type="text" required />
        </div>
  
        <div class="form-group">
          <label>Email</label>
          <input v-model="form.email" type="email" required />
        </div>
  
        <div class="form-group">
          <label>Address</label>
          <input v-model="form.address" type="text" required />
        </div>
  
        <!-- Payment Info (simulated) -->
        <h2 class="section-title">Payment</h2>
        <div class="form-group">
          <label>Card Number</label>
          <input v-model="form.card" type="text" maxlength="16" required />
        </div>
  
        <!-- Confirm Order -->
        <button type="submit" class="btn submit-btn">Place Order</button>
      </form>
    </section>
  </template>
  
  <script>
  export default {
    name: 'CheckoutPage',
    data() {
      return {
        form: {
          name: '',
          email: '',
          address: '',
          card: '',
        },
      }
    },
    methods: {
      submitOrder() {
        // In a real app, validate and send to server
        alert('Order placed successfully!')
        this.$router.push('/')
      },
    },
  }
  </script>
  
  <style scoped>
  .checkout {
    padding: 2rem 1rem;
    max-width: 600px;
    margin: auto;
  }
  
  .title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  .section-title {
    font-size: 1.1rem;
    margin: 1.5rem 0 0.75rem;
    color: #333;
  }
  
  .checkout-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
  }
  
  label {
    font-weight: 500;
    margin-bottom: 0.25rem;
  }
  
  input {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 1rem;
  }
  
  input:focus {
    outline: none;
    border-color: #007bff;
  }
  
  .btn.submit-btn {
    background-color: #007bff;
    color: white;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 6px;
    font-weight: 600;
    cursor: pointer;
    margin-top: 1rem;
  }
  
  .btn.submit-btn:hover {
    background-color: #0056b3;
  }
  </style>
  