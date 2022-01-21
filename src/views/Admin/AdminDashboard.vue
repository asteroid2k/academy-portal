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
          image: "dashboard-icon.svg",
          routeUrl: "Admin",
        },
        {
          routeName: "Create Application",
          image: "create-app.svg",
          routeUrl: "CreateApplication",
        },
        {
          routeName: "Application Entries",
          image: "entries.svg",
          routeUrl: "ApplicationEntries",
        },
        {
          routeName: "Compose Assessment",
          image: "assessment-icon.svg",
          routeUrl: "CreateAssessment",
        },
        // {
        //   routeName: "Assessment History",
        //   image: "../../../src/assets/history.png",
        //   routeUrl: "/assessment-history",
        // },
        // {
        //   routeName: "Results",
        //   image: "../../../src/assets/results.png",
        //   routeUrl: "/results",
        // },
        // {
        //   routeName: "Settings",
        //   image: "../../../src/assets/Setting.png",
        //   routeUrl: "/settings",
        // },
      ],
    };
  },
};
</script>
<template>
  <section class="main">
    <section class="w-fit"><Sidebar :routes="routes" /></section>
    <section class="mx-[60px] my-12"><router-view></router-view></section>
  </section>
</template>

<style scoped>
.main {
  display: grid;
  grid-template-columns: auto 1fr;
}
</style>
