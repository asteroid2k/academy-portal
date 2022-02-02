<script>
import { mapActions, mapGetters } from "vuex";
import Update from "../../components/Update.vue";
import { notyf } from "../../helpers";
import { formatDistanceToNow } from "date-fns";

export default {
  async mounted() {
    await this.fetchApplication();
  },
  name: "User",
  props: { instance: Function },
  components: { Update },
  computed: {
    ...mapGetters(["user"]),
    formatDate() {
      if (!this.user.created_at) {
        return "09.09.22";
      }
      return this.user.created_at
        .substring(2, 10)
        .split("-")
        .reverse()
        .join(".");
    },
    formatDays() {
      if (!this.user.created_at) {
        return "09.09.22";
      }
      return formatDistanceToNow(new Date(this.user.created_at));
    },
    approvedColor() {
      if (!this.user.isApproved) {
        return "09.09.22";
      }
      return this.user.isApproved;
    },
  },
  methods: {
    ...mapActions(["storeUser"]),
    async fetchApplication() {
      try {
        let resp = await this.instance.get("/applications/user");
        if (resp.data) {
          const { data } = resp;
          this.storeUser(data.application);
        }
      } catch (error) {
        if (error.response) {
          if (error.response.status === 401 || error.response.status === 403) {
            this.$router.push({ name: "Logout" });
            notyf.open({ type: "purp", message: "Session expired" });
          }
          if (error.response.status === 404) {
            this.$router.push({ name: "Apply" });
            notyf.open({ type: "purp", message: "Create an application" });
            return;
          }
          const { errors, message } = error.response.data;
          if (errors) {
            notyf.error(Object.values(errors)[0]);
          } else if (message) {
            notyf.error(message);
          }
        }
      }
    },
  },
};
</script>
<template>
  <div class="main-frame">
    <p class="heading">Dashboard</p>
    <p class="description">
      Your Application is currently being review, you wil be notified if
      successful
    </p>
    <div class="stats">
      <div class="app-date" id="box-1">
        <p class="app-head">Date of Application</p>
        <p class="date">
          {{ formatDate }}
        </p>
        <div class="line"></div>
        <p class="app-subhead">{{ formatDays }} since applied</p>
      </div>
      <div class="app-date" id="box-2">
        <p class="app-head">Application Status</p>
        <p class="date" v-if="user.isApproved == 'approved'">Approved</p>
        <p class="date" v-else-if="user.isApproved == 'pending'">Pending</p>
        <p class="date" v-else>Declined</p>

        <div class="line" :class="approvedColor"></div>
        <p class="app-subhead" v-if="user.isApproved == 'approved'">
          Congratulations, you have been approved
        </p>
        <p class="app-subhead" v-else-if="user.isApproved == 'pending'">
          We will get back to you
        </p>
        <p class="app-subhead" v-else>
          Sorry, your application has been declined
        </p>
      </div>
    </div>
    <div class="indicator">
      <a href="#box-1">•</a>
      <a href="#box-2">•</a>
    </div>
    <div class="update-container">
      <div class="app-update">
        <p class="update-head">Updates</p>
        <Update :instance="instance" />
      </div>
      <div class="app-update">
        <p class="update-head">Take Assessment</p>
        <div id="centerdiv">
          <p class="assess-description" v-if="user.isApproved == 'approved'">
            You have been approved. You are eligible to take the assessment
          </p>
          <p
            class="assess-description"
            v-else-if="user.isApproved == 'pending'"
          >
            Your application is been reviewed. Upon approval, You will be
            notified on the next assessment
          </p>
          <p class="assess-description" v-else>
            You have been declined. You cannot take this assessment
          </p>
          <router-link to="/assessment"
            ><button class="assessment">Take Assessment</button></router-link
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

.main-frame {
  margin: 50px 60px;
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
  width: 55%;
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
}

.app-subhead {
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  margin-top: 10px;
  color: #4f4f4f;
}
.indicator {
  display: none;
}
.line {
  width: 148px;
  height: 4px;
  background: #006df0;
  border-radius: 4px;
}

.approved {
  background: green;
}

.pending {
  background: #f09000;
}

.declined {
  background: red;
}

.update-container {
  display: flex;
  justify-content: space-between;
}
.app-update {
  width: 45%;
  height: 453px;
  padding: 25px 10px 100px 35px;
  border: 1px solid #ececf9;
  box-sizing: border-box;
  border-radius: 4px;
}
.update-head {
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.02em;
  margin: 20px 0px;
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

@media screen and (max-width: 992px) {
  .main-frame {
    margin: 0;
  }
  .app-date p {
    color: #ffffff;
  }
  .app-date {
    text-align: center;
    background: #7557d3;
    padding: 20px 0px;
    border: none;
  }
  .line {
    width: 300px;
    border-radius: none;
  }
  .stats {
    width: 100%;
    justify-content: none;
    background: #7557d3;
    height: fit-content;
    overflow: auto;
    overflow-x: hidden;
    scroll-snap-type: x mandatory;
    margin: 60px auto 0px;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    border-radius: 20px;
  }

  .indicator {
    display: block;
    width: 100%;
    text-align: center;
    margin: 10px 0px;
  }
  .indicator a {
    color: #7557d3;
    opacity: 0.4;
    font-size: 30px;
    margin: 0px 10px;
  }
  .indicator a:focus,
  .indicator a:hover {
    color: #7557d3;
    opacity: 1;
  }
  .update-container {
    justify-content: space-around;
    flex-direction: column-reverse;
  }

  .app-update {
    width: 100%;
    margin: 0px 0px 40px;
  }
}
</style>
