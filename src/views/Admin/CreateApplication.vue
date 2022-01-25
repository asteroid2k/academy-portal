<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import { object, string, date } from "yup";
import { notyf } from "../../helpers";
import Top from "../../components/Top.vue";

export default {
  name: "CreateApplication",
  props: { instance: Function },
  components: { Top, Form, Field, ErrorMessage },
  data() {
    const schema = object({
      closure_date: date().required().min(new Date()),
      slug: string().required().min(4),
      link: string().url(),
    });
    return {
      schema,
      error: "",
    };
  },
  methods: {
    async handleSubmit(values) {
      try {
        let response = await this.instance.post("/batch", values);
        if (response.data) {
          const { data } = response;
          notyf.success(data.message);
          // redirect to dashboard
          this.$router.push({ name: "Dashboard" });
        }
      } catch (error) {
        // when error has response
        if (error.response) {
          const { data, status, statusText } = error.response;
          if (status === 401 || status === 403) {
            notyf.error(statusText);
            this.$router.push({ name: "AdminSignin" });
            return;
          }
          if (data.message) {
            notyf.error(data.message);
            return;
          }
          //validation errors
          if (data.errors) {
            notyf.error(Object.values(data.errors)[0]);
            return;
          }
          // other errors
          notyf.error("A problem occured");
        } else {
          notyf.error("A problem occured");
        }
      }
    },
  },
};
</script>

<template>
  <div class="flex flex-col">
    <div><Top heading="Create Application" /></div>
    <Form :validation-schema="schema" @submit="handleSubmit">
      <div id="input-fields" class="grid grid-cols-2">
        <div
          class="h-[108px] mt-5 border-[1.5px] border-dashed border-border-300 grid place-items-center rounded-sm"
        >
          <label for="image">+ Choose File</label>
          <input type="file" name="image" class="sr-only" id="image" />
          <ErrorMessage name="image" class="text-red-600 text-xs pt-1 px-2" />
        </div>
        <div class="input-group flex flex-col gap-[5px] mt-10">
          <label class="text-sm" for="link">Link</label>
          <Field
            type="text"
            class="border-border-300 h-10 k-input"
            name="link"
            id="link"
          />
          <ErrorMessage name="link" class="text-red-600 text-xs pt-1 px-2" />
        </div>
        <div class="input-group flex flex-col gap-[5px]">
          <label class="text-sm" for="closure_date"
            >Application closure date</label
          >
          <Field
            type="date"
            class="border-border-300 h-10 k-input"
            name="closure_date"
            id="closure_date"
          />
          <ErrorMessage
            name="closure_date"
            class="text-red-600 text-xs pt-1 px-2"
          />
        </div>
        <div class="input-group flex flex-col gap-[5px]">
          <label class="text-sm" for="slug">Batch ID</label>
          <Field
            type="text"
            class="border-border-300 h-10 k-input"
            name="slug"
            id="slug"
          />
          <ErrorMessage name="slug" class="text-red-600 text-xs pt-1 px-2" />
        </div>
      </div>
      <div class="input-group flex flex-col w-full mt-[30px] gap-1">
        <label class="text-sm" for="instructions">Instructions</label>
        <textarea
          name="instructions"
          id="instructions"
          class="border-border-300 h-36 k-input"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        class="block rounded mt-11 h-12 max-w-[380px] bg-primary text-white w-full mx-auto"
      >
        Submit
      </button>
    </Form>
  </div>
</template>

<style>
#input-fields {
  row-gap: 1.75rem;
  column-gap: 60px;
}
@media screen and (max-width: 992px) {
  #input-fields {
    row-gap: 1.5rem;
    column-gap: 20px;
  }
}
</style>
