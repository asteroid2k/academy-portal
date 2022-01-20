<script>
import Sidebar from "../../components/Sidebar.vue";

export default {
  name: "Assessment History",
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
  <div class="entire-page">
    <div><Sidebar v-bind:routes="routes" /></div>
    <div class="main-frame">
      <p class="heading">Assessment History</p>
      <table id="assessments">
        <tr>
          <th>Batch</th>
          <th>Date Composed</th>
          <th>No of Questions</th>
          <th>Time Allocated</th>
          <th>Status</th>
        </tr>
        <tr>
          <td>Batch 1</td>
          <td>12/07/94</td>
          <td>30</td>
          <td>30 mins</td>
          <td>Taken</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<style scoped>
.entire-page {
  display: flex;
  justify-content: space-between;
}
.main-frame {
  margin: 50px;
}
.heading {
  font-style: normal;
  font-weight: 300;
  font-size: 43.5555px;
  line-height: 52px;
  letter-spacing: -0.02em;
  color: #2b3c4e;
}

#assessments {
  border-collapse: collapse;
  width: 100%;
}

#assessments tr:hover {
  background-color: #ddd;
}

#assessments th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background: #2b3c4e;
  color: white;
}
</style>