<script>
import Sidebar from "../../components/Sidebar.vue";
import Update from "../../components/Update.vue";

export default {
  name: "Dashboard",
  components: { Sidebar, Update },
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
  display: flex;
  font-family: Lato;
}
</style>