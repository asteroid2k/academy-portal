<template>
  <div class="container">
    <div class="updates" v-for="update in updates" :key="update.id">
      <p>{{ update.batchNo }}</p>
      <p>{{ update.batchNo }}</p>
      <p>{{ update.batchNo }}</p>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Update",
  setup() {
    // make updates variable reactive with the ref() function
    const updates = ref([
      {
        batchNo: "Dummy Data",
      },
    ]);

    return {
      updates,
    };
  },
};
</script>

<style scoped>
.updates {
  display: flex;
  text-align: center;
}
</style>
