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
          routeUrl: "/dashboard",
        },
        {
          routeName: "Assessment",
          image: "../../../src/assets/assessment.svg",
          routeUrl: "/assessment",
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
      <p class="heading">Dashboard</p>
      <p class="description">
        Your Application is currently being review, you wil be notified if
        successful
      </p>
      <div class="stats">
        <div class="app-date">
          <p class="app-head">Date of Application</p>
          <p class="date">09.09.19</p>
          <div class="line"></div>
          <p class="app-subhead">4 days since applied</p>
        </div>
        <div class="app-date">
          <p class="app-head">Application Status</p>
          <p class="date">Pending</p>
          <div id="line2" class="line"></div>
          <p class="app-subhead">We will get back to you</p>
        </div>
      </div>
      <div class="update-container">
        <div class="app-update">
          <p class="update-head">Updates</p>
          <Update />
        </div>
        <div class="app-update">
          <p class="update-head">Take Assessment</p>
          <div id="centerdiv">
            <p class="assess-description">
              We have 4 days left until the next assessment
              <br />Watch this space
            </p>
            <router-link to="/assessment"
              ><button class="assessment">Take Assessment</button></router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: content-box;
}
.entire-page {
  display: flex;
  font-family: Lato;
}
.main-frame {
  margin: 50px 60px;
  width: 100%;
}
.heading {
  font-style: normal;
  font-weight: 300;
  font-size: 43.5555px;
  line-height: 52px;
  margin-bottom: 14px;
  letter-spacing: -0.02em;
}
.description {
  font-style: italic;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
}

.stats {
  margin: 60px 0px;
  width: 50%;
  display: flex;
  justify-content: space-between;
}

.app-head {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #4f4f4f;
}
.date {
  font-style: normal;
  font-weight: 300;
  font-size: 48px;
  margin: 10px 0px 20px;
  line-height: 58px;
  color: #2b3c4e;
}
.app-subhead {
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  margin-top: 10px;
  color: #4f4f4f;
}
.line {
  width: 148px;
  height: 4px;
  background: #006df0;
  border-radius: 4px;
}

#line2 {
  background: #f09000;
}
.update-container {
  display: flex;
  justify-content: space-between;
}
.app-update {
  width: 45%;
  height: 453px;
  overflow-y: auto;
  padding: 25px 35px 100px;
  border: 1px solid #ececf9;
  box-sizing: border-box;
  border-radius: 4px;
}
.update-head {
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.02em;
  margin: 10px 0px;
  color: #2b3c4e;
}
.assessment {
  background: #b1b1b1;
  border-radius: 4px;
  padding: 10px 40px;
  color: var(--accent-color);
}

.assess-description {
  padding: 22px 0px;
}

#centerdiv {
  text-align: center;
  margin: 100px auto 0px;
}
</style>