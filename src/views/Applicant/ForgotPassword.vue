<template>
  <div class="forgot-section">
    <div class="forgot-container">
      <div class="form-container">
        <h3 class="form-title">Forgot Password</h3>
        <p class="form-text">
          Please select option to send link to reset password
        </p>

        <div class="form-send-box cursor-pointer group border">
          <div class="form-email">
            <div
              class="
                p-2
                border
                rounded-full
                h-8
                w-8
                bg-purple-100
                flex
                justify-center
              "
            >
              <img src="../../assets/Group 9.png" />
            </div>
            <div class="form-text-con">
              <h1 class="reset-email">Reset via Email</h1>
              <p class="reset-text">
                Reset password link will be send to your registered email
                address.
              </p>
            </div>
            <input type="checkbox" style="pointer-events: none" />
            <div class="opacity-0 group-hover:opacity-100"></div>
          </div>
          <div class="form-sms"></div>
        </div>
        <div class="form-send-box boxx group cursor-pointer border shadow-lg">
          <div class="form-email">
            <div
              class="
                p-2
                border
                rounded-full
                h-8
                w-8
                bg-gray-200
                flex
                justify-center
              "
            >
              <div class="h-6">
                <img src="../../assets/Calling.png" alt="" />
              </div>
            </div>
            <div class="form-text-con">
              <h1 class="reset-email">Reset via Sms</h1>
              <p class="reset-text">
                Reset password link will be send to your registered phone
                number.
              </p>
            </div>
            <input type="checkbox" style="pointer-events: none" />
            <div class="">
              <i class="fas fa-check-circle fa-lg"></i>
            </div>
          </div>
        </div>
        <button class="send-link">Send Link</button>
        <p class="resend-link">
          Didn't receive link?
          <span class="text-purple-500 cursor-pointer">Resend</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.forgot-container {
  display: flex;
  justify-content: center;
}
.form-container {
  width: 614px;
  background-color: red;
  margin-top: 80px;
  background: #ffffff;
  box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
  border-radius: 8px;
  height: 590px;
}
.form-title {
  font-family: Lato;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 38px;
  color: #2b3c4e;
  text-align: center;
  margin-top: 34px;
}
.form-text {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #7d7d7d;
  text-align: center;
  margin-top: 16px;
}
.form-send-box {
  width: 85%;
  margin: 36px auto 0;
  box-sizing: border-box;
  border-radius: 4px;
}
.form-email {
  display: flex;
  height: 130px;
  background: #ffffff;
  border: 1px solid #e8e8e8;
  color: #211f26;
  box-sizing: border-box;
  border-radius: 4px;
  align-items: center;
  padding: 28px;
}
.form-email:hover {
  border: 1px solid var(--primary);
  color: var(--primary);
  box-sizing: border-box;
  box-shadow: 0px 8px 30px 10px rgba(117, 87, 211, 0.05);
}
.form-text-con {
  width: 80%;
  margin-left: 35px;
}
.reset-email {
  font-family: Lato;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
}
.reset-text {
  width: 300px;
  margin-top: 16px;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 150%;
  color: #b1b1b1;
}
.boxx {
  margin-top: 24px;
}
.send-link {
  display: block;
  height: 50px;
  width: 379px;
  background: #7557d3;
  border-radius: 4px;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: center;
  color: white;
  margin: 32px auto 0;
}
.resend-link {
  text-align: center;
  margin-top: 28px;
  color: #b1b1b1;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
}
</style>