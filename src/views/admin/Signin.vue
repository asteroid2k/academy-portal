<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import { object, string } from "yup";
import { notyf } from "../../helpers";

export default {
  name: "Signin",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = object({
      email: string()
        .required("Email is required")
        .email("Enter a valid Email"),
      password: string().min(8).required("Password is required"),
    });
    return {
      email: "",
      password: "",
      schema,
    };
  },
  methods: {
    async handleSubmit(values) {
      try {
        let resp = await instance.post("/auth/signin", values);
        if (resp.data) {
          notyf.success(resp.data.message);
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
  <div class="main w-full min-h-screen text-white grid place-items-center">
    <div>
      <div class="flex flex-col gap-7 mb-12 items-center">
        <img src="../../assets/logo-white.svg" alt="" class="w-28" />
        <h1 class="text-2xl font-medium italic">Admin Log In</h1>
      </div>
      <Form
        @submit="handleSubmit"
        class="w-[400px] p-5 flex flex-col gap-6"
        :validation-schema="schema"
      >
        <div class="w-full">
          <label for="email" class="mb-1 text-sm">Email Address</label>
          <Field
            type="text"
            name="email"
            id="email"
            class="border-2 border-white h-12 w-full rounded bg-transparent p-3"
          />
          <ErrorMessage name="email" class="text-red-300 text-xs pt-1 px-2" />
        </div>
        <div class="w-full">
          <label for="password" class="mb-1 text-sm">Password</label>
          <Field
            type="text"
            name="password"
            id="password"
            class="border-2 border-white h-12 w-full rounded bg-transparent p-3"
          />
          <ErrorMessage
            name="password"
            class="text-red-300 text-xs pt-1 px-2"
          />
        </div>
        <button
          type="submit"
          class="k-button w-full h-[50px] bg-white text-primary rounded text-base font-bold"
        >
          Sign In
        </button>
      </Form>
    </div>
  </div>
</template>

<style scoped>
.main {
  background-image: url("../../assets/admin-bg.svg");
  background-size: cover;
  background-position: center center;
  background-color: var(--primary);
}
</style>
