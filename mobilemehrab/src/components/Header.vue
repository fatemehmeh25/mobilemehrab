<template>
    <header class="header">
        <button class="btn-menu" @click="$emit('toggle-sidebar')" aria-label="Toggle Sidebar">
      ☰
    </button>

      <router-link to="/" class="logo">MyMobileShop</router-link>
  
      <nav class="nav">
        <router-link to="/shop" class="nav-link">Shop</router-link>
        <router-link to="/cart" class="nav-link">Cart</router-link>
  
        <div class="account-wrapper" @click="toggleDropdown" tabindex="0" @blur="closeDropdown">
          <button class="btn-account">
            Account
            <span class="arrow" :class="{ open: dropdownOpen }">▼</span>
          </button>
  
          <div v-if="dropdownOpen" class="dropdown-menu">
            <template v-if="!isLoggedIn">
              <router-link to="/login" class="dropdown-item" @click="closeDropdown">Login</router-link>
              <router-link to="/signup" class="dropdown-item" @click="closeDropdown">Sign Up</router-link>
            </template>
            <template v-else>
              <router-link to="/account" class="dropdown-item" @click="closeDropdown">My Account</router-link>
              <button class="dropdown-item logout-btn" @click="logout">Logout</button>
            </template>
          </div>
        </div>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header',
    data() {
      return {
        isLoggedIn: false, // Replace with real auth state (Pinia, Vuex, etc.)
        dropdownOpen: false,
      }
    },
    methods: {
      toggleDropdown() {
        this.dropdownOpen = !this.dropdownOpen
      },
      closeDropdown() {
        // Delay to allow click event on dropdown items
        setTimeout(() => {
          this.dropdownOpen = false
        }, 150)
      },
      logout() {
        alert('Logged out!')
        this.isLoggedIn = false
        this.dropdownOpen = false
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
    background: white;
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
    gap: 1.5rem;
    position: relative;
  }
  
  .nav-link {
    color: #333;
    text-decoration: none;
    font-weight: 500;
  }
  
  .account-wrapper {
    position: relative;
    outline: none;
  }
  
  .btn-account {
    background: none;
    border: none;
    cursor: pointer;
    font-weight: 600;
    color: #007bff;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    font-size: 1rem;
    user-select: none;
  }
  
  .arrow {
    font-size: 0.7rem;
    transition: transform 0.2s ease;
  }
  
  .arrow.open {
    transform: rotate(180deg);
  }
  
  .dropdown-menu {
    position: absolute;
    top: 130%;
    right: 0;
    background: white;
    box-shadow: 0 4px 12px rgb(0 0 0 / 0.15);
    border-radius: 6px;
    padding: 0.5rem 0;
    width: 140px;
    z-index: 100;
  }
  
  .dropdown-item {
    display: block;
    padding: 0.5rem 1rem;
    text-decoration: none;
    color: #333;
    font-weight: 500;
    cursor: pointer;
  }
  
  .dropdown-item:hover {
    background-color: #f0f0f0;
  }
  
  .logout-btn {
    background: none;
    border: none;
    width: 100%;
    text-align: left;
    color: #d33;
    font-weight: 600;
  }
  
  .logout-btn:hover {
    background-color: #fee;
  }

  .btn-menu {
  font-size: 1.6rem;
  background: none;
  border: none;
  cursor: pointer;
  margin-right: 1rem;
  user-select: none;
}
  </style>
  