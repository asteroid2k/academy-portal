<template>
  <div class="container">
    <div class="updates" v-for="update in updates" :key="update.id">
      {{ update.firstName }}
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
        firstName: "Dummy Data",
      },
      {
        firstName: "Dummy Data",
      },
      {
        firstName: "Dummy Data",
      },
      {
        firstName: "Dummy Data",
      },
      {
        firstName: "Dummy Data",
      },
      {
        firstName: "Dummy Data",
      },
      {
        firstName: "Dummy Data",
      },
      {
        firstName: "Dummy Data",
      },
      {
        firstName: "Dummy Data",
      },
      {
        firstName: "Dummy Data",
      },
      {
        firstName: "Dummy Data",
      },
      {
        firstName: "Dummy Data",
      },
      {
        firstName: "Dummy Data",
      },
      {
        firstName: "Dummy Data",
      },
      {
        firstName: "Dummy Data",
      },
      {
        firstName: "Dummy Data",
      },
      {
        firstName: "Dummy Data",
      },
      {
        firstName: "Dummy Data",
      },
      {
        firstName: "Dummy Data",
      },
      {
        firstName: "Dummy Data",
      },
      {
        firstName: "Dummy Data",
      },
      {
        firstName: "Dummy Data",
      },
      {
        firstName: "Dummy Data",
      },
      {
        firstName: "Dummy Data",
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
  border-bottom: 1px solid #cecece;
  padding: 20px;
  text-align: center;
}
</style>
