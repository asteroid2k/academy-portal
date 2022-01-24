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
        {
          routeName: "Assessment History",
          image: "history.svg",
          routeUrl: "AssessmentHistory",
        },
        {
          routeName: "Results",
          image: "results.svg",
          routeUrl: "Results",
        },
        {
          routeName: "Settings",
          image: "Setting.svg",
          routeUrl: "Settings",
        },
      ],
    };
  },
};
</script>
<template>
  <section class="main">
    <section class="w-fit"><Sidebar :routes="routes" /></section>
    <section class="mx-[50px] my-12"><router-view></router-view></section>
  </section>
</template>

<style scoped>
.main {
  display: grid;
  grid-template-columns: auto 1fr;
}
</style>
