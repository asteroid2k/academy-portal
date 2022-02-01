<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import { object, string } from "yup";
import { notyf, validators } from "../helpers";
export default {
  name: "Reset",
  props: { instance: Function },
  components: { Form, Field, ErrorMessage },
  data() {
    const schema = object({
      code: string().length(8).required("Provide reset code"),
      password: validators.password,
    });
    return {
      schema,
      password: "",
      conPassword: "",
    };
  },
  computed: {
    match() {
      return this.password === this.conPassword;
    },
  },
  methods: {
    async handleSubmit(values) {
      if (!this.match) {
        return notyf.error("Passwords do not match");
      }
      this.instance
        .post("/auth/reset", values)
        .then((resp) => {
          if (resp.data) {
            notyf.success(resp.data.message);
          }
        })
        .catch((error) => {
          if (error.response.data) {
            const { message, errors } = error.response.data;
            if (errors) notyf.error(Object.values(errors)[0]);
            if (message) notyf.error(message);
          } else notyf.error("An error occured");
        });
    },
  },
};
</script>

<template>
  <section class="my-10">
    <div
      class="w-fit mx-auto mb-12 cursor-pointer"
      @click="$router.push({ name: 'Home' })"
    >
      <img src="../assets/logo.svg" width="120" alt="" />
    </div>
    <h2 class="text-lg font-bold text-center mb-5">
      Check your inbox for your Reset Code
    </h2>
    <Form
      @submit="handleSubmit"
      :validation-schema="schema"
      class="flex flex-col gap-4 shadow rounded-lg border-border-100 max-w-[400px] mx-auto py-6 px-8"
    >
      <div class="flex flex-col gap-1">
        <label class="text-text-200 text-sm" for="code">Code</label>
        <Field
          name="code"
          id="code"
          type="text"
          class="k-input border-border-200 h-[48px]"
        />
        <ErrorMessage name="code" class="text-red-600 text-xs pt-1 px-2" />
      </div>
      <div class="flex flex-col gap-1">
        <label class="text-text-200 text-sm" for="password">Password</label>
        <Field
          name="password"
          id="password"
          type="password"
          class="k-input border-border-200 h-[48px]"
          v-model="password"
        />
        <ErrorMessage name="password" class="text-red-600 text-xs pt-1 px-2" />
      </div>
      <div class="flex flex-col gap-1">
        <label class="text-text-200 text-sm" for="cpass"
          >Confirm Password</label
        >
        <Field
          name="conPassword"
          id="cpass"
          type="password"
          class="k-input border-border-200 h-[48px]"
          v-model="conPassword"
        />
        <p class="text-red-600 text-xs pt-1 px-2">
          {{ !match && conPassword ? "Passwords do not match" : "" }}
        </p>
      </div>
      <button
        type="submit"
        class="btn-purp font-bold h-[50px] mt-2 max-w-[300px] mx-auto block w-full"
      >
        Reset Password
      </button>
    </Form>
  </section>
</template>

<style></style>
