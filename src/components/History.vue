<template>
  <div class="container">
    <div class="historys" v-for="history in historys" :key="history.id">
      <p>{{ history.batchNo }}</p>
      <p>{{ history.noOfStudents }}</p>
      <p>{{ history.appDate }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions, mapGetters } from "vuex";
import { notyf } from "../helpers";

export default {
  name: "History",
  props: { instance: Function },
  computed: {
    ...mapGetters(["batch"]),
  },
};
</script>

<style scoped>
.container {
  margin: 30px 0px;
  height: 225px;
  overflow-y: auto;
}
.historys {
  display: flex;
  text-align: center;
  justify-content: space-between;
  padding: 25px;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #4f4f4f;
}

.historys:hover {
  box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
  border-radius: 8px;
  border-left: 7px solid var(--primary);
}
</style>
