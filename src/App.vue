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
        timeout: 10000,
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
  width: 26px;
}
::-webkit-scrollbar-track {
  background-color: #cdcfd6;
  border-radius: 17px;
  border: 10px solid transparent;
  background-clip: content-box;
}
::-webkit-scrollbar-thumb {
  background-color: rgba(3, 17, 49, 0.7);
  border-radius: 17px;
  border: 10px solid transparent;
  background-clip: content-box;
  /* change border color to blue to match the background */
}
</style>
