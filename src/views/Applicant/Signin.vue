<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import { object, string } from "yup";
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
    };
  },
  methods: {
    ...mapActions(["storeToken"]),
    async handleSubmit(values) {
      try {
        let resp = await this.instance.post("/auth/signin", values);
        // console.log(resp);
        const { data } = resp;
        if (data) {
          notyf.success(data.message);
          this.storeToken(data.token);
          this.$router.push({ name: "UserDashboard" });
        }
      } catch ({ response }) {
        const { errors, message } = response.data;
        if (errors) {
          notyf.error(Object.values(errors)[0]);
        } else if (message) {
          notyf.error(message);
        }
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
      <div class="input-group">
        <label for="email">Email Address</label>
        <Field type="text" name="email" id="email" class="k-input" />
        <ErrorMessage name="email" class="text-red-600 text-xs pt-1 px-2" />
      </div>
      <div class="input-group">
        <label for="password">Password</label>
        <Field type="password" name="password" id="password" class="k-input" />
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
