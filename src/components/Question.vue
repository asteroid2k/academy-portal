<script>
export default {
  name: "Question",
  props: {
    question: Object,
    current: Number,
  },

  methods: {
    checkOption(e) {
      const option = e.target;
      const checkboxes = document.getElementsByName("option");
      checkboxes.forEach((item) => {
        if (item !== option) item.checked = false;
      });
    },
  },
};
</script>

<template>
  <section class="question flex flex-col">
    <p class="text-sm font-medium italic text-center">Question {{ current }}</p>
    <p class="text-2xl font-medium italic text-center mt-3">
      {{ question.question }}
    </p>
    <div class="options flex flex-col gap-6 mt-10">
      <div
        v-for="opt in question.options"
        :key="opt.opt"
        class="answer flex gap-10 items-center"
      >
        <input
          type="checkbox"
          name="option"
          :id="opt.opt"
          @click="checkOption"
          class="accent-primary hover:accent-primary/60 w-7"
        />
        <label for="option1" class="italic font-medium text-base"
          ><span class="mr-1">{{ opt.opt }}.</span> {{ opt.value }}
        </label>
      </div>
    </div>
  </section>
</template>

<style></style>
