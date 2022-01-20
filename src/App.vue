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
  <!-- <Navbar /> -->
</template>

<style></style>
