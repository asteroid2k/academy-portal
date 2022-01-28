<template>
  <div class="view">
    <div class="header">
      <p class="head">Timer Setting</p>
    </div>
    <div class="set-timer">
      <p class="title">Set Time</p>
      <div class="timer">
        <div class="timer-style">
          <p class="min"><span class="time">00 </span>min</p>
          <img src="../assets/Polygon 2.10.svg" />
        </div>
        <div class="timer-style">
          <p class="sec"><span class="time">000 </span>sec</p>
          <img src="../assets/Polygon 2.10.svg" />
        </div>
      </div>
      <div class="button">
        <input type="submit" id="save-button" value="Save" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.view {
  margin: 100px 0px 150px;
  width: 80%;
}
.header {
  display: flex;
  justify-content: space-between;
  padding: 0px 0px 15px;
  border-bottom: 1px solid #f2f2f2;
}
.head {
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.4px;

  color: #4a4a4a;
}
.set-timer {
  margin: 55px 0px 45px;
}
.title {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #2b3c4e;
}
#save-button {
  background: #7557d3;
  border-radius: 3px;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: -0.5px;
  color: #ffffff;
  padding: 10px 50px;
}
.button {
  margin: 40px 0px;
}
.timer {
  width: 35%;
  display: flex;
  justify-content: space-between;
}
.timer-style {
  display: flex;
  width: fit-content;
  justify-content: space-between;
}
.time {
  font-style: normal;
  font-weight: 300;
  font-size: 48px;
  line-height: 58px;
}
.sec,
.min {
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
}

@media screen and (max-width: 992px) {
  .view {
    width: 100%;
    margin: 50px 0px 75px;
  }
  .timer {
    width: 75%;
  }
}
</style>