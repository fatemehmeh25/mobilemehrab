<template>
    <section class="home">
      <div class="hero">
        <h1 class="headline">Welcome to My Mobile Shop</h1>
        <p class="subtext">Find the best smartphones, accessories, and deals.</p>
        <router-link to="/shop" class="cta-button">Shop Now</router-link>
      </div>
  
      <div class="features">
        <div class="feature-card" v-for="feature in features" :key="feature.title">
          <img :src="feature.icon" :alt="feature.title" class="feature-icon" />
          <h2 class="feature-title">{{ feature.title }}</h2>
          <p class="feature-description">{{ feature.description }}</p>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'HomePage',
    data() {
      return {
        features: [
          {
            title: 'Free Shipping',
            description: 'Get free shipping on orders over $100.',
            icon: '/assets/icons/shipping.svg',
          },
          {
            title: '24/7 Support',
            description: 'We’re here to help anytime you need us.',
            icon: '/assets/icons/support.svg',
          },
          {
            title: 'Secure Payments',
            description: 'All transactions are encrypted and secure.',
            icon: '/assets/icons/secure.svg',
          },
        ],
      }
    },
  }
  </script>
  
  <style scoped>
  .home {
    padding: 2rem 1rem;
    background-color: #fefefe;
    max-width: 1024px;
    margin: 0 auto;
  }
  
  /* Hero Section */
  .hero {
    text-align: center;
    padding: 2rem 1rem;
    margin-bottom: 3rem;
  }
  
  .headline {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  
  .subtext {
    font-size: 1rem;
    color: #666;
    margin-bottom: 1.5rem;
  }
  
  .cta-button {
    display: inline-block;
    background-color: #007bff;
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    transition: background-color 0.2s ease-in-out;
  }
  
  .cta-button:hover {
    background-color: #0056b3;
  }
  
  /* Feature Section */
  .features {
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    padding: 1rem 0;
  }
  
  .feature-card {
    background-color: #fff;
    border-radius: 12px;
    padding: 1rem;
    text-align: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    transition: transform 0.2s ease-in-out;
  }
  
  .feature-card:hover {
    transform: translateY(-4px);
  }
  
  .feature-icon {
    width: 48px;
    margin-bottom: 0.75rem;
  }
  
  .feature-title {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0.25rem;
  }
  
  .feature-description {
    font-size: 0.95rem;
    color: #555;
  }
  </style>
  