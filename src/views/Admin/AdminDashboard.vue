<script>
import Sidebar from "../../components/Sidebar.vue";

export default {
  name: "AdminDashboard",
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
          routeName: "Create Application",
          image: "../../../src/assets/create-app.png",
          routeUrl: "/create-application",
        },
        {
          routeName: "Application Entries",
          image: "../../../src/assets/entries.png",
          routeUrl: "/application-entries",
        },
        {
          routeName: "Compose Assessment",
          image: "../../../src/assets/assessment-icon.png",
          routeUrl: "/compose-assessment",
        },
        {
          routeName: "Assessment History",
          image: "../../../src/assets/history.png",
          routeUrl: "/assessment-history",
        },
        {
          routeName: "Results",
          image: "../../../src/assets/results.png",
          routeUrl: "/results",
        },
        {
          routeName: "Settings",
          image: "../../../src/assets/Setting.png",
          routeUrl: "/settings",
        },
      ],
    };
  },
};
</script>
<template>
  <Sidebar v-bind:routes="routes" />
</template>