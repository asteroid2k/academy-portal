<script>
import Sidebar from "../../components/Sidebar.vue";

export default {
  name: "Dashboard",
  props: { instance: Function },
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
    <div id="view"><router-view :instance="instance"></router-view></div>
  </div>
</template>

<style scoped>
.entire-page {
  display: grid;
  grid-template-columns: auto 1fr;
}

@media screen and (max-width: 992px) {
  #view {
    margin: 120px 30px 30px;
  }

  .entire-page {
    width: 100%;
    display: block;
    grid-template-columns: none;
  }
}
</style>
