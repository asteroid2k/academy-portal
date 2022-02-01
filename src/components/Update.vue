<script>
import { formatDistanceToNow } from "date-fns";

export default {
  async mounted() {
    await this.fetchDetails();
  },
  name: "Update",
  props: { instance: Function },
  data() {
    return {
      updates: [],
    };
  },

  methods: {
    formatDays(date) {
      if (!date) {
        return "09.09.22";
      }
      return formatDistanceToNow(new Date(date));
    },

    async fetchDetails() {
      try {
        let resp = await this.instance.get("/user");
        if (resp.data) {
          console.log(resp.data);
          this.updates = resp.data.user.updates;
        }
      } catch (error) {
        if (error.response) {
          const { errors, message } = error.response.data;
          if (errors) {
            notyf.error(Object.values(errors));
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
  <div class="container">
    <div class="updates" v-for="data in updates" :key="data.id">
      <div v-if="data.text.includes('declined')">
        <p class="head">We are sorry but your application is declined</p>
        <div class="flex">
          <p>{{ data.text }}</p>
          <p>{{ formatDays(data.created_at) }}</p>
        </div>
      </div>
      <div v-else>
        <p class="head">Congratulations &#127881;🥳🎊</p>
        <div class="flex">
          <p class="body">{{ data.text }}</p>
          <p class="time">
            {{ formatDays(data.created_at) }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.updates {
  font-family: Nunito Sans;
  border-bottom: 1px solid #cecece;
  padding: 20px;
  text-align: center;
}

.container {
  overflow-y: auto;
  height: 350px;
}

.head {
  font-size: 16px;
  font-weight: 600;
  text-align: left;
}

.flex {
  font-size: 10px;
  margin: 15px 0px;
  justify-content: space-between;
  text-align: left;
}
</style>
