<script>
import Sidebar from "../../components/Sidebar.vue";
import History from "../../components/History.vue";

export default {
  name: "AdminDashboard",
  components: { Sidebar, History },
  data() {
    return {
      routes: [
        {
          routeName: "Dashboard",
          image: "../../../src/assets/dashboard-icon.svg",
          routeUrl: "Admin",
        },
        {
          routeName: "Create Application",
          image: "../../../src/assets/create-app.svg",
          routeUrl: "CreateApplication",
        },
        {
          routeName: "Application Entries",
          image: "../../../src/assets/entries.svg",
          routeUrl: "ApplicationEntries",
        },
        {
          routeName: "Compose Assessment",
          image: "../../../src/assets/assessment-icon.svg",
          routeUrl: "CreateAssessment",
        },
        {
          routeName: "Assessment History",
          image: "../../../src/assets/history.svg",
          routeUrl: "AssessmentHistory",
        },
        {
          routeName: "Results",
          image: "../../../src/assets/results.svg",
          routeUrl: "Results",
        },
        //{
        //  routeName: "Settings",
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

 
