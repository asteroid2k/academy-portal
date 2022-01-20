<template>
  <div class="container">
    <div class="updates" v-for="update in updates" :key="update.id">
      {{ update.dummyData }}
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
        dummyData: "dummyData",
      },
      {
        dummyData: "dummyData",
      },
      {
        dummyData: "dummyData",
      },
      {
        dummyData: "dummyData",
      },
      {
        dummyData: "dummyData",
      },
      {
        dummyData: "dummyData",
      },
      {
        dummyData: "dummyData",
      },
      {
        dummyData: "dummyData",
      },
      {
        dummyData: "dummyData",
      },
      {
        dummyData: "dummyData",
      },
      {
        dummyData: "dummyData",
      },
      {
        dummyData: "dummyData",
      },
      {
        dummyData: "dummyData",
      },
      {
        dummyData: "dummyData",
      },
      {
        dummyData: "dummyData",
      },
      {
        dummyData: "dummyData",
      },
      {
        dummyData: "dummyData",
      },
      {
        dummyData: "dummyData",
      },
      {
        dummyData: "dummyData",
      },
      {
        dummyData: "dummyData",
      },
      {
        dummyData: "dummyData",
      },
      {
        dummyData: "dummyData",
      },
      {
        dummyData: "dummyData",
      },
      {
        dummyData: "dummyData",
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
  font-family: Nunito Sans;
  border-bottom: 1px solid #cecece;
  padding: 20px;
  text-align: center;
}

.container {
  overflow-y: auto;
  height: 350px;
}
</style>
