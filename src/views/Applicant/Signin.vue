<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import { object } from "yup";
import { notyf, validators } from "../../helpers";
import { mapActions } from "vuex";

export default {
  name: "Signin",
  props: { instance: Function },
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = object({
      email: validators.email,
      password: validators.password,
    });
    return {
      schema,
      error: "",
    };
  },
  methods: {
    ...mapActions(["storeToken"]),
    async handleSubmit(values) {
      this.error = "";

      try {
        let response = await this.instance.post("/auth/signin", values);
        if (response.data) {
          const { message, token, isAdmin } = response.data;
          notyf.success(message);
          this.storeToken({ token, isAdmin });
          // redirect to dashboard
          this.$router.push({ name: "UserDashboard" });
        }
      } catch (error) {
        console.log(error.response);
        // when error has response
        if (error.response) {
          const { data, status } = error.response;
          if (data.message) {
            notyf.error(data.message);
            this.error = data.message;
            return;
          }
          //validation errors
          if (data.errors) {
            notyf.error(Object.values(data.errors)[0]);
            this.error = Object.values(data.errors)[0];
            return;
          }
          // other errors
          notyf.error("A problem occured");
        } else {
          notyf.error("A problem occured");
        }
      }
    },
    myFunction() {
      var x = document.getElementById("password");
      if (x.type === "password") {
        x.type = "text";
      } else {
        x.type = "password";
      }
    },
  },
};
</script>

<template>
  <body>
    <div class="logo">
      <img src="../../assets/logo.png" alt="" />
    </div>
    <h1>Applicant Log In</h1>

    <Form
      class="login form"
      @submit="handleSubmit"
      action=""
      :validation-schema="schema"
    >
      <p class="text-sm text-center my-1 text-red-500 font-medium">
        {{ error }}
      </p>

      <div class="input-group">
        <label for="email">Email Address</label>
        <Field type="text" name="email" id="email" class="k-input" />
        <ErrorMessage name="email" class="text-red-600 text-xs pt-1 px-2" />
      </div>
      <div class="input-group">
        <label for="password">Password</label>
        <Field type="password" name="password" id="password" class="k-input" />
        <i class="far fa-eye" v-on:click="myFunction()" id="togglePassword"></i>
        <ErrorMessage name="password" class="text-red-600 text-xs pt-1 px-2" />
      </div>

      <button type="submit">Sign In</button>

      <div class="login-footer">
        <p>
          Don’t have an account yet?
          <a
            ><router-link to="/signup"><u> Sign Up</u></router-link></a
          >
        </p>
        <router-link :to="{ name: 'Forgot' }"
          ><p>Forgot Password?</p></router-link
        >
      </div>
    </Form>
  </body>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 22px;
}
#togglePassword {
  margin-left: -30px;
  cursor: pointer;
  font-size: 12px;
  color: #4f4f4f;
  opacity: 0.4;
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
@media screen and (max-width: 992px) {
  .login {
    padding: 20px;
  }
}
</style>
