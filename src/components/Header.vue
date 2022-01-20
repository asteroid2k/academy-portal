<script>
export default {
  name: "Header",
  props: {
    pagedetails: Array,
  },
};
</script>

<template>
  <div
    class="header-container"
    v-for="(item, index) in pagedetails"
    :key="index"
  >
    <div class="top-header">
      <p class="title">{{ item.title }}</p>
      <p class="description">{{ item.description }}</p>
    </div>
    <div class="bottom-header">
      <p class="timer-title">Timer</p>
      <p class="timer-container">
        <span class="counter">{{ item.timerMin }}</span
        >min <span class="counter">{{ item.timerSec }}</span
        >sec
      </p>
    </div>
  </div>
</template>

<style scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  margin: 50px 60px;
  width: 100%;
  color: #2b3c4e;
}
.title {
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

.timer-title {
  font-style: italic;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 10px;
}

.counter {
  font-style: normal;
  font-weight: 300;
  font-size: 48px;
  line-height: 58px;
  text-align: center;
}

.timer-container {
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  color: #4f4f4f;
}
</style>