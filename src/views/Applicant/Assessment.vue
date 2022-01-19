<script>
import Sidebar from "../../components/Sidebar.vue";
import Header from "../../components/Header.vue";

export default {
  name: "Assessment",
  components: { Sidebar, Header },
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
      pagedetails: [
        {
          title: "Take Assessment",
          description:
            "Click the button below to start assessment, you have limited time for this test",
          timerMin: "00",
          timerSec: "000",
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
      <Header v-bind:pagedetails="pagedetails" />
      <div class="assessment-frame">
        <figure class="hourglass-img">
          <img src="../../assets/hourglass.png" />
        </figure>
        <p class="description-text">
          We have 4 days left until the next assessment
          <br />Watch this space
        </p>
        <button class="assessment">Take Assessment</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.entire-page {
  display: flex;
}
.assessment-frame {
  margin: 150px auto;
  text-align: center;
}

.hourglass-img {
  width: 72px;
  height: 72px;
  margin: auto;
}

.assessment {
  background: #b1b1b1;
  border-radius: 4px;
  padding: 10px 40px;
  color: var(--accent-color);
}

.description-text {
  padding: 22px 0px;
}
</style>