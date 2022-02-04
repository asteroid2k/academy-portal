<script>
import { mapGetters, mapActions } from "vuex";
import axios from "axios";
import Navbar from "./components/Navbar.vue";
import { notyf } from "./helpers";

export default {
  async mounted() {
    await this.fetchBatch();
  },
  name: "App",
  components: {
    Navbar,
  },
  computed: {
    ...mapGetters(["token"]),
    instance() {
      return axios.create({
        baseURL: "http://localhost:3009/api",
        timeout: 15000,
        headers: { Authorization: `token ${this.token}` },
      });
    },
  },
  methods: {
    ...mapActions(["storeBatch"]),
    async fetchBatch() {
      try {
        let resp = await this.instance.get("/batch?ongoing=true");
        if (resp.data) {
          const { data } = resp;
          if (data.batches[0]) {
            this.storeBatch(data.batches[0]);
          }
        }
      } catch (error) {
        if (error.response) {
          if (error.response.status === 401 || error.response.status === 403) {
            this.$router.push({ name: "Logout" });
            notyf.open({ type: "purp", message: "Session expired" });
          }
          const { errors, message } = error.response.data;
          if (errors) {
            notyf.error(Object.values(errors)[0]);
          } else if (message) {
            notyf.error(message);
          }
        }
      }
    },
  },
};
</script>

<template>
  <router-view :instance="instance"></router-view>
  <!-- <Navbar /> -->
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
