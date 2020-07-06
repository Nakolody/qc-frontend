
<template>
  <div>
    <div v-if="loggedIn === false">
      <Nav />
      <router-view />
      <Footer />
    </div>
    <div v-else>
      <AuthNav>
        <router-view />
      </AuthNav>
      <!-- <Footer /> -->
    </div>
  </div>
</template>

<script>

import Nav from "./components/Nav"
import Footer from "./components/Footer"
import AuthNav from "./components/AuthNav"
// import Dashboard from "./components/Dashboard"

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
    AuthNav
    // Dashboard
  }
}
</script>
