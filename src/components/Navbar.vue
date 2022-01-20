<template>
  <div class="navbar">
    <router-link class="link" id="active" to="/"> Home</router-link>
    <router-link class="link" to="/signup">Sign Up</router-link>
    <router-link class="link" to="/signin">Sign In</router-link>
    <router-link class="link" to="/apply/46546">Application Form</router-link>
    <router-link class="link" to="/forgotpassword">
      Forgot Password</router-link
    >

    <router-link class="link" to="/dashboard"> Dashboard</router-link>
    <router-link class="link" to="/admin-dashboard"
      >Admin Dashboard</router-link
    >
  </div>
</template>

<style scoped>
.navbar {
  position: absolute;
  top: 35%;
  right: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
</style>
