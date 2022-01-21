<script>
import { mapGetters } from "vuex";
import axios from "axios";
import History from "../../components/History.vue";

export default {
  name: "Admin",
  components: { History },
};
</script>

<template>
  <div class="entire-page">
    <div class="main-frame">
      <p class="heading">Dashboard</p>
      <div class="stats">
        <div>
          <p class="app-head">Current Applications</p>
          <p class="app-stats">233</p>
          <div class="line"></div>
          <p class="app-subhead">Academy 2.0</p>
        </div>
        <div>
          <p class="app-head">Total Applications</p>
          <p class="app-stats">4253</p>
          <div id="line2" class="line"></div>
          <p class="app-subhead">All entries do far</p>
        </div>
        <div>
          <p class="app-head">Academy’s</p>
          <p class="app-stats">4</p>
          <div id="line3" class="line"></div>
          <p class="app-subhead">So far</p>
        </div>
      </div>
      <div class="update-container">
        <div class="category-box">
          <p class="update-head">History</p>
          <p class="app-subhead">Last Update 18:24, 22/02/19</p>
          <History />
        </div>
        <div class="category-box" id="create-assess">
          <p class="update-head">Create Assessment</p>
          <p class="assess-description">
            Create test question for an incoming academy students
          </p>
          <router-link to="/assessment"
            ><button class="assessment">Create Assessment</button></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: content-box;
}

.heading {
  font-style: normal;
  font-weight: 300;
  font-size: 43.5555px;
  line-height: 52px;
  margin-bottom: 14px;
  letter-spacing: -0.02em;
}
.stats {
  margin: 60px 0px;
  width: 75%;
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
.app-stats {
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
  background: #00f026;
}
#line3 {
  background: #f09000;
}

.update-container {
  display: flex;
  justify-content: space-between;
}
.category-box {
  width: 55%;
  height: 307px;
  box-sizing: border-box;
  border-radius: 4px;
  font-family: Nunito Sans;
}
.update-head {
  font-weight: bold;
  font-size: 16px;
  text-align: left;
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

#create-assess {
  border: 1px solid #ececf9;
  text-align: center;
  width: 43%;
  padding: 25px 35px 100px;
}
</style>
