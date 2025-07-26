<template>
  <div id="app">
    <!-- Header emits toggle-sidebar event -->
    <Header @toggle-sidebar="sidebarOpen = !sidebarOpen" />

    <!-- Sidebar visibility controlled by sidebarOpen -->
    <Sidebar :visible="sidebarOpen" @close="sidebarOpen = false" />

    <!-- Overlay for mobile when sidebar is open -->
    <div
      v-if="sidebarOpen"
      class="overlay"
      @click="sidebarOpen = false"
      aria-hidden="true"
    ></div>

    <!-- Main content area -->
    <main :class="{ 'with-sidebar': sidebarOpen }">
      <router-view />
    </main>

    <!-- Footer always at the bottom -->
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: { Header, Sidebar, Footer },
  data() {
    return {
      sidebarOpen: false,
    }
  },
}
</script>

<style>
/* Root app container uses flex layout */
#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-x: hidden;
  position: relative;
}

/* Header and footer have fixed height, main fills rest */
header,
footer {
  flex-shrink: 0;
}

/* Main content grows and scrolls */
main {
  flex-grow: 1;
  padding: 1rem;
  overflow-y: auto;
  transition: margin-left 0.3s ease;
}

/* When sidebar open on desktop, shift main content */
.with-sidebar {
  margin-left: 250px; /* width of sidebar */
}

/* Sidebar is fixed positioned, so app layout ignores it */
/* Overlay to darken background on mobile when sidebar is open */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  z-index: 900; /* less than sidebar's 1000 */
}

/* Responsive: on small screens sidebar overlays content, no margin */
@media (max-width: 768px) {
  .with-sidebar {
    margin-left: 0;
  }
}
</style>
