<script>
import { ref } from "vue";

export default {
  name: "History",
  setup() {
    // make historys variable reactive with the ref() function
    const historys = ref([
      {
        batchNo: "Academy Batch 1",
        noOfStudents: "15 students",
        appDate: "started 11/09/15",
      },
      {
        batchNo: "Academy Batch 1",
        noOfStudents: "15 students",
        appDate: "started 11/09/15",
      },
      {
        batchNo: "Academy Batch 1",
        noOfStudents: "15 students",
        appDate: "started 11/09/15",
      },
      {
        batchNo: "Academy Batch 1",
        noOfStudents: "15 students",
        appDate: "started 11/09/15",
      },
      {
        batchNo: "Academy Batch 1",
        noOfStudents: "15 students",
        appDate: "started 11/09/15",
      },
      {
        batchNo: "Academy Batch 1",
        noOfStudents: "15 students",
        appDate: "started 11/09/15",
      },
    ]);

    return {
      historys,
    };
  },
};
</script>

<template>
  <div class="container">
    <div class="historys" v-for="history in historys" :key="history.id">
      <p>{{ history.batchNo }}</p>
      <p>{{ history.noOfStudents }}</p>
      <p>{{ history.appDate }}</p>
    </div>
  </div>
</template>

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
  border-left: 7px solid transparent;
}

.historys:hover {
  box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
  border-radius: 8px;
  border-left: 7px solid var(--primary);
}
@media screen and (max-width: 992px) {
  .historys {
    justify-content: space-evenly;
    padding: 15px 0px;
    font-size: 12px;
  }
}
</style>
