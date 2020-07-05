
<template>
  <div>
    <div v-if="loggedIn === false">
      <Nav />
      <router-view />
      <Footer />
    </div>
    <div v-else>
      <Dashboard >
      <router-view />
      </Dashboard>
      <Footer />
    </div>
  </div>
</template>

<script>

import Nav from "./components/Nav"
import Footer from "./components/Footer"
import Dashboard from "./components/Dashboard"

export default {
  name: 'App',
  data () {
    return {
      loggedIn: true
    }
  },
  components: {
    Nav,
    Footer,
    Dashboard
  }
}
</script>
