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
          image: "../../../src/assets/dashboard-icon.png",
          routeUrl: "/dashboard",
        },
        {
          routeName: "Assessment",
          image: "../../../src/assets/assessment-icon.png",
          routeUrl: "/assessment",
        },
      ],
    };
  },
};
</script>
<template>
  <Sidebar v-bind:routes="routes" />
</template>