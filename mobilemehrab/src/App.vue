<template>
  <div id="app" class="app-container">
    <!-- Header always visible -->
    <Header />

    <div class="layout">
      <!-- Sidebar (collapsible or hidden on mobile) -->
      <Sidebar v-if="showSidebar" class="sidebar" />

      <!-- Main content injected from routes -->
      <main class="main-content">
        <router-view />
      </main>
    </div>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Sidebar from './components/Sidebar.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Sidebar,
  },
  data() {
    return {
      windowWidth: window.innerWidth,
    }
  },
  computed: {
    showSidebar() {
      return this.windowWidth >= 768 // Show sidebar on tablet/desktop
    },
  },
  created() {
    window.addEventListener('resize', this.handleResize)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth
    },
  },
}
</script>

<style scoped>
/* Layout wrapper */
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f8f8f8;
}

/* Layout: Sidebar + Main */
.layout {
  display: flex;
  flex: 1;
}

/* Sidebar styling */
.sidebar {
  width: 220px;
  background-color: #ffffff;
  border-right: 1px solid #e0e0e0;
}

/* Main content */
.main-content {
  flex: 1;
  padding: 1rem;
  background-color: #fff;
}

/* Mobile optimizations */
@media (max-width: 767px) {
  .sidebar {
    display: none;
  }

  .main-content {
    padding: 0.75rem;
  }
}
</style>


