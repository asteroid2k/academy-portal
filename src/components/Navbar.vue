<template>
  <div class="navbar">
    <router-link class="link" id="active" to="/"> Home</router-link>
    <router-link class="link" to="/signup">Sign Up</router-link>
    <router-link class="link" to="/signin">Sign In</router-link>
    <router-link class="link" to="/applicationform"
      >Application Form</router-link
    >
    <router-link class="link" to="/dashboard"> Dashboard</router-link>
  </div>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-evenly;
}
</style>