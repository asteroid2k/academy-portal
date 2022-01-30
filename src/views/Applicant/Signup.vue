<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import { object, string } from "yup";
import { notyf, validators } from "../../helpers";
import { mapActions } from "vuex";
import { CubeTransparentIcon } from "@heroicons/vue/outline";

export default {
  name: "Signup",
  props: { instance: Function },
  components: {
    Form,
    Field,
    ErrorMessage,
    CubeTransparentIcon,
  },
  data() {
    const schema = object({
      email: validators.email,
      password: validators.password,
    });
    return {
      schema,
      isSubmitting: false,
      password: "",
      conPassword: "",
    };
  },
  computed: {
    match() {
      return this.password === this.conPassword ? "" : "Passwords do not match";
    },
  },
  methods: {
    ...mapActions(["storeToken", "storeInfo"]),
    async handleSubmit(values) {
      this.isSubmitting = true;
      // if (values.password != values.conPassword) {
      //   notyf.error("Passwords don't match");
      //   this.isSubmitting = false;
      //   return;
      // }
      try {
        let resp = await this.instance.post("/auth/signup", values);
        if (resp.data) {
          notyf.success(resp.data.message);
          const { firstName, lastName, email } = values;
          this.storeInfo({ firstName, lastName, email });
          this.$router.push({ name: "Signin" });
        }
      } catch (error) {
        if (error.response) {
          const { errors, message } = error.response.data;
          if (errors) {
            notyf.error(Object.values(errors)[0]);
          } else if (message) {
            notyf.error(message);
          }
        }
      }
      this.isSubmitting = false;
    },
  },
};
</script>

<template>
  <div class="main-container">
    <div class="logo">
      <img src="../../assets/logo.png" alt="" />
    </div>

    <div class="form-head">
      <p>Applicant Sign Up</p>
    </div>

    <section class="form-section">
      <Form
        @submit="handleSubmit"
        action=""
        :validation-schema="schema"
        class="form"
      >
        <div class="name">
          <div class="first-name">
            <div><label for="fname">First Name</label></div>
            <Field class="k-input" id="fname" type="text" name="firstName" />
            <ErrorMessage
              name="firstName"
              class="text-red-600 text-xs pt-1 px-2"
            />
          </div>
          <div class="last-name">
            <div class="last-name">
              <div><label for="lname">Last Name</label></div>
              <Field class="k-input" id="lname" type="text" name="lastName" />
              <ErrorMessage
                name="lastName"
                class="text-red-600 text-xs pt-1 px-2"
              />
            </div>
          </div>
        </div>

        <div class="name">
          <div class="email">
            <div><label for="mail">Email Address</label></div>
            <Field class="k-input" id="mail" type="text" name="email" />
            <ErrorMessage
              name="email"
              class="flex text-red-600 text-xs pt-1 px-2"
            />
          </div>
          <div class="phone">
            <div class="phone-number">
              <div><label for="phone">Phone Number</label></div>
              <Field class="k-input" id="phone" type="tel" name="phone" />
              <ErrorMessage
                name="phone"
                class="flex text-red-600 text-xs pt-1 px-2"
              />
            </div>
          </div>
        </div>

        <div class="name">
          <div class="password">
            <div><label for="password">Password</label></div>
            <Field
              class="k-input"
              id="password"
              type="password"
              name="password"
            />
            <ErrorMessage
              name="password"
              class="flex text-red-600 text-xs pt-1 px-2"
            />
          </div>
          <div class="phone">
            <div class="confirm-password">
              <div><label for="conPassword">Confirm Password</label></div>
              <Field class="k-input" type="password" name="conPassword" />
              <p class="text-red-600 text-xs pt-1 px-2">{{ match }}</p>
            </div>
          </div>
        </div>

        <div class="bt1">
          <button type="submit" class="sign-up" :disabled="isSubmitting">
            <span v-show="!isSubmitting">Sign Up</span>
            <span v-show="isSubmitting"
              ><CubeTransparentIcon
                class="w-6 aspect-square text-white mx-auto animate-spin"
            /></span>
          </button>
        </div>

        <p class="end">
          Already have an account?
          <router-link to="/signin" class="signin"><u>Sign in?</u></router-link>
        </p>
      </Form>
    </section>
  </div>
</template>

<style scoped>
.main-container {
  font-family: "Lato";
  margin: 80px;
}
.logo {
  display: flex;
  justify-content: center;
}
.logo img {
  width: 110.1px;
  height: 20.84px;
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
  margin-top: 22px;
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
  margin-top: 10px;
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
@media screen and (max-width: 992px) {
  .main-container {
    margin: 80px 20px;
  }
  input {
    width: 100%;
  }
  .form-section {
    flex-direction: column;
  }
  .name,
  .phone {
    flex-direction: column;
  }
}
</style>
