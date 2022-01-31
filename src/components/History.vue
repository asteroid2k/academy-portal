<script>
import { mapGetters } from "vuex";

export default {
  name: "History",
  props: { instance: Function },
  computed: {
    ...mapGetters(["batch"]),
  },
};
</script>


<template>
  <div class="container">
    <div class="elements" v-for="element in batch" :key="element.id">
      <p>{{ element.name }}</p>
      <p>{{ element.app_count }} students</p>
      <p>
        started at
        {{ element.started_at.substring(2, 10).split("-").reverse().join("/") }}
      </p>
    </div>
  </div>
</template>


<style scoped>
.container {
  margin: 30px 0px;
  height: 225px;
  overflow-y: auto;
}
.elements {
  display: flex;
  text-align: center;
  justify-content: space-evenly;
  padding: 22px 0px;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #4f4f4f;
}

.elements:hover {
  box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
  border-radius: 8px;
  border-left: 7px solid var(--primary);
}
@media screen and (max-width: 992px) {
  .elements {
    justify-content: space-evenly;
    padding: 15px 0px;
    font-size: 12px;
  }
}
</style>
