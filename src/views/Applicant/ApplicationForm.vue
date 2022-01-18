<script>
export default {
  data() {},
};
</script>

<template>
  <div class="main-container">
    <div class="logo">
      <img src="../assets/enyata.svg" alt="" />
    </div>

    <div class="form-head">
      <p>Applicant Sign Up</p>
    </div>

    <section class="form-section">
      <form class="form">
        <div class="name">
          <div class="first-name">
            <div><label for="fname">First Name</label></div>
            <input type="text" name="fname" />
          </div>
          <div class="last-name">
            <div class="last-name">
              <div><label for="lname">Last Name</label></div>
              <input type="text" name="lname" />
            </div>
          </div>
        </div>

        <div class="name">
          <div class="email">
            <div><label for="mail">Email Address</label></div>
            <input type="text" name="mail" />
          </div>
          <div class="Phone">
            <div class="phone-number">
              <div><label for="phone">Phone Number</label></div>
              <input type="tel" name="lname" />
            </div>
          </div>
        </div>

        <div class="name">
          <div class="password">
            <div><label for="password">Password</label></div>
            <input type="password" name="password" />
          </div>
          <div class="Phone">
            <div class="confirm-password">
              <div><label for="con-password">Confirm Password</label></div>
              <input type="password" name="con-password" />
            </div>
          </div>
        </div>

        <div class="bt1"><button class="sign-up">Sign Up</button></div>

        <p class="end">
          Already have an account
          <router-link to="/" class="signin">Sign in?</router-link>
        </p>
      </form>
    </section>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap");
.main-container {
  font-family: "Lato";
}
.logo {
  display: flex;
  justify-content: center;
  margin-top: 200px;
}
.form-head {
  margin-top: 27px;
}
.form-head p {
  text-align: center;
  font-family: "Lato";
  font-style: italic;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #2b3c4e;
}
input {
  border: 1.5px solid #bdbdbd;
  box-sizing: border-box;
  border-radius: 4px;
  width: 20vw;
  padding: 5px;
}
.name {
  display: flex;

  gap: 30px;
}
.form-section {
  display: flex;
  justify-content: center;
  margin-top: 64px;
}
.end {
  text-align: center;
  font-family: Lato;
  font-style: italic;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  margin-top: 8px;
  /* identical to box height */
  color: #4f4f4f;
}
button {
  background: #7557d3;
  border-radius: 4px;
  color: white;
  width: 100%;
  padding: 8px 0;
}
.bt1 {
  margin-top: 32px;
  padding: 0 50px;
}
.signin {
  font-style: italic;
}
label {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */
  color: #4f4f4f;
}
.name {
  margin-top: 8px;
}
</style>