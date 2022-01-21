<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import Top from "../../components/Top.vue";
export default {
  name: "CreateApplication",
  components: { Top, Form, Field, ErrorMessage },
};
</script>

<template>
  <div class="flex flex-col">
    <div><Top heading="Create Application" /></div>
    <Form>
      <div class="grid grid-cols-2 gap-x-[60px] gap-y-7">
        <div
          class="h-[108px] mt-5 border-[1.5px] border-dashed border-border-300 grid place-items-center rounded-sm"
        >
          <label for="image">+ Choose File</label>
          <input type="file" name="image" class="sr-only" id="image" />
          <ErrorMessage name="image" class="text-red-600 text-xs pt-1 px-2" />
        </div>
        <div class="input-group flex flex-col gap-[5px] mt-10">
          <label class="text-sm" for="opta">Link</label>
          <Field
            type="text"
            class="border-border-300 h-10 k-input"
            name="opta"
            id="opta"
          />
          <ErrorMessage name="opta" class="text-red-600 text-xs pt-1 px-2" />
        </div>
        <div class="input-group flex flex-col gap-[5px]">
          <label class="text-sm" for="opta">Application closure date</label>
          <Field
            type="text"
            class="border-border-300 h-10 k-input"
            name="opta"
            id="opta"
          />
          <ErrorMessage name="opta" class="text-red-600 text-xs pt-1 px-2" />
        </div>
        <div class="input-group flex flex-col gap-[5px]">
          <label class="text-sm" for="opta">Batch ID</label>
          <Field
            type="text"
            class="border-border-300 h-10 k-input"
            name="opta"
            id="opta"
          />
          <ErrorMessage name="opta" class="text-red-600 text-xs pt-1 px-2" />
        </div>
      </div>
      <div class="input-group flex flex-col w-full mt-[30px] gap-1">
        <label class="text-sm" for="question">Instructions</label>
        <textarea
          name="question"
          id="question"
          class="border-border-300 h-36 k-input"
          required
        ></textarea>
      </div>
      <button
        class="block rounded mt-11 h-12 max-w-[380px] bg-primary text-white w-full mx-auto"
      >
        Submit
      </button>
    </Form>
  </div>
</template>

<style></style>
