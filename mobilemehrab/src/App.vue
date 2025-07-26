<template>
  <div id="app">
    <Header />
    <Sidebar />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Sidebar from './components/Sidebar.vue'

export default {
  components: {
    Header,
    Footer,
    Sidebar,
  },
}
</script>

<style>
/* Basic styling for layout */
#app {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  grid-template-columns: 200px 1fr;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

header {
  grid-area: header;
}
aside {
  grid-area: sidebar;
}
main {
  grid-area: main;
  padding: 1rem;
}
footer {
  grid-area: footer;
}
</style>

