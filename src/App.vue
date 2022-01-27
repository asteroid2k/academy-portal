<script>
import { mapGetters } from "vuex";
import axios from "axios";
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
  computed: {
    ...mapGetters(["token"]),
    instance() {
      return axios.create({
        baseURL: "http://localhost:3009/api",
        timeout: 3000,
        headers: { Authorization: `token ${this.token}` },
      });
    },
  },
};
</script>

<template>
  <router-view :instance="instance"></router-view>
  <Navbar />
</template>

<style>
::-webkit-scrollbar {
  width: 20px;
}
::-webkit-scrollbar-track {
  background: #ffffff;
  border-radius: 17px;
}
::-webkit-scrollbar-thumb {
  background: #031131;
  opacity: 0.7;
  border-radius: 17px;
  border: 8px solid #ffffff;
  /* change border color to blue to match the background */
}
</style>