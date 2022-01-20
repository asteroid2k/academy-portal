<template>
  <div class="login-section h-screen">
    <div class="login-container">
      <div class="desktop-image">
        <img src="../../assets/Computer.svg" alt="" />
      </div>
      <div class="logo">
        <img src="../../assets/env.svg" alt="" />
      </div>
      <h3 class="admin-text">Admin Log In</h3>
      <div class="form-container">
        <form action="" class="form">
          <div class="align">
            <div class="input-container">
              <label for="email">Email Address</label>
              <input type="email" class="focus:outline-none" />
            </div>
            <div class="input-container pass-label">
              <label for="password">Password</label>
              <input type="password" class="focus:outline-none" />
            </div>
          </div>
          <button class="admin-btn">Sign in</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminLogin",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  cursor: pointer;
}
.login-section {
  background: #7557d3;
  padding-top: 100px;
  width: 100%;
}
.login-container {
}
label {
  display: block;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0em;
  color: #ffffff;
  margin-bottom: 5px;
}
.logo {
  display: flex;
  justify-content: center;
}
.admin-text {
  text-align: center;
  font-family: Lato;
  font-size: 24px;
  font-style: italic;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: 0em;
  color: white;
  margin-top: 28px;
}
.form-container {
  margin-top: 58px;
}
.form {
  width: 30%;
  margin: 0 auto;
}
input {
  width: 379px;
  height: 48px;
  border: 1.5px solid #ffffff;
  border-radius: 4px;
  background-color: transparent;
}
.align {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pass-label {
  margin-top: 22px;
}
.admin-btn {
  height: 50px;
  width: 379px;
  left: 0px;
  top: 8px;
  border-radius: 4px;
  display: block;
  margin: 40px auto;
  background-color: #ffffff;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0em;
  color: #7557d3;
}
.desktop-image img {
  right: 0%;
  height: 90%;
  top: 50px;
  position: absolute;
  overflow: hidden;
}
</style>