<script>
export default {
  data() {},
};
</script>

<template>
  <body>
    <div class="logo">
      <img src="../../assets/logo.png" alt="" />
    </div>
    <h1>Applicant Log In</h1>

    <div class="login">
      <label for="">Email Address</label>
      <input type="text" name="" id="" />

      <label for="">Password</label>
      <input type="password" placeholder="" />

      <button>Sign In</button>

      <div class="login-footer">
        <p>
          Don’t have an account yet?
          <a
            ><router-link to="/signup"><u> Sign Up</u></router-link></a
          >
        </p>
        <p>Forgot Password?</p>
      </div>
    </div>
  </body>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.logo img {
  width: 110.1px;
  height: 20.84px;
  margin-top: 80px;
  margin-bottom: 24px;
}
h1 {
  font-family: Lato;
  font-style: italic;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #2b3c4e;
  margin-bottom: 50px;
}
.login {
  width: 379px;
}
label {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #4f4f4f;
  width: 100%;
  margin-bottom: 5px;
}
input {
  border: 1.5px solid #bdbdbd;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 12px;
  width: 100%;
  height: 48px;
  margin-bottom: 22px;
}
button {
  background: #7557d3;
  border-radius: 4px;
  color: #ffffff;
  width: 100%;
  height: 50px;
  margin-top: 10px;
  margin-bottom: 12px;
}
.login-footer {
  font-family: Lato;
  font-style: italic;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #4f4f4f;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>