<template>
  <div class="header">
    <div class="pageheader">
      <h1>Take Assessment</h1>
      <p>Thank you!</p>
    </div>

    <div class="timerheader">
      <h2>Timer</h2>

      <div class="timer">
        <div class="min">
          <p class="ticks">00</p>
          <p>min</p>
        </div>
        <div class="secs">
          <p class="ticks">000</p>
          <p>sec</p>
        </div>
      </div>
    </div>
  </div>

  <div class="alert">
    <div class="alertimg">
      <img src="../assets/confetti.svg" />
    </div>
    <div class="alertmsg">
      <p>
        We have received your assessment test, we will get back to you soon.
      </p>
      <p>Best of luck</p>
    </div>

    <router-link to="Dashboard">
      <button>Home</button>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 60px 50px;
}
.pageheader {
  width: 303px;
  height: 87px;
}

.pageheader h1 {
  font-family: Lato;
  font-style: normal;
  font-weight: 300;
  font-size: 43.5555px;
  line-height: 52px;
  letter-spacing: -0.02em;
  color: #2b3c4e;
  margin-bottom: 14px;
}

.pageheader p {
  height: 20px;

  font-family: Lato;
  font-style: italic;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #2b3c4e;
}

.timer {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.timerheader h2 {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #4f4f4f;
}
.min,
.secs {
  display: flex;
  align-items: flex-end;
}
.ticks {
  height: 58px;
  font-family: Lato;
  font-style: normal;
  font-weight: 300;
  font-size: 48px;
  line-height: 58px;
  text-align: center;

  color: #2b3c4e;
}

.alert {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}

.alertimg {
  width: 148px;
  height: 148px;
}

.alertmsg {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 16.7273px;
  line-height: 20px;
  text-align: center;

  color: #4f4f4f;
}

button {
  background: #7557d3;
  border-radius: 4px;
  color: white;
  height: 41px;
  width: 205px;
  font-size: 16px;
  line-height: 19px;
  margin-top: 10px;
}
</style>
