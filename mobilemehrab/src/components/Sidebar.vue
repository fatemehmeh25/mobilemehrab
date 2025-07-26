<template>
    <aside class="sidebar">
      <nav>
        <h2 class="title">Categories</h2>
        <ul class="category-list">
          <li v-for="category in categories" :key="category.slug">
            <router-link
              :to="`/shop?category=${category.slug}`"
              class="category-link"
              active-class="active"
            >
              {{ category.name }}
            </router-link>
          </li>
        </ul>
      </nav>
    </aside>
  </template>
  
  <script>
  export default {
    name: 'Sidebar',
    data() {
      return {
        categories: [
          { name: 'All', slug: 'all' },
          { name: 'Smartphones', slug: 'smartphones' },
          { name: 'Tablets', slug: 'tablets' },
          { name: 'Accessories', slug: 'accessories' },
          { name: 'Wearables', slug: 'wearables' },
          { name: 'Chargers', slug: 'chargers' },
        ],
      }
    },
  }
  </script>
  
  <style scoped>
  .sidebar {
    background-color: #fafafa;
    padding: 1.5rem 1rem;
    border-right: 1px solid #eee;
    height: 100%;
    width: 100%;
  }
  
  .title {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #333;
  }
  
  .category-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .category-link {
    display: block;
    padding: 0.5rem 0;
    color: #444;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s ease-in-out;
  }
  
  .category-link:hover {
    color: #007bff;
  }
  
  .active {
    color: #007bff;
    font-weight: 600;
  }
  </style>
  