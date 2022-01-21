<script>
import Sidebar from "../../components/Sidebar.vue";

export default {
  name: "Dashboard",
  components: { Sidebar },
  data() {
    return {
      routes: [
        {
          routeName: "Dashboard",
          image: "../../../src/assets/dashboard.svg",
          routeUrl: "UserDashboard",
        },
        {
          routeName: "Assessment",
          image: "../../../src/assets/assessment.svg",
          routeUrl: "Assessment",
        },
      ],
    };
  },
};
</script>
<template>
  <div class="entire-page">
    <div><Sidebar v-bind:routes="routes" /></div>
    <div><router-view></router-view></div>
  </div>
</template>

<style scoped>
.entire-page {
  display: grid;
  grid-template-columns: auto 1fr;
}
</style>