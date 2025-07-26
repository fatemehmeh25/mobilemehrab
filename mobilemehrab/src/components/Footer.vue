<template>
    <footer class="footer">
      <p>&copy; {{ new Date().getFullYear() }} My Mobile Shop. All rights reserved.</p>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer',
  }
  </script>
  
  <style scoped>
  .footer {
    background-color: #f8f8f8;
    border-top: 1px solid #eee;
    text-align: center;
    padding: 1rem;
    font-size: 0.9rem;
    color: #777;
  }
  </style>
  