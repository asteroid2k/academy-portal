<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import Top from "../../components/Top.vue";
import { validators } from "../../helpers";
export default {
  name: "CreateAssessment",
  components: { Top, Form, Field, ErrorMessage },
  data() {
    return {
      current: 1,
      questions: [],
      answers: [],
      question: { text: "", optA: "", optB: "", optC: "", optD: "" },
      answer: { num: 1, value: "" },
    };
  },
  computed: {
    currentQuestion() {
      return questions[this.current - 1];
    },
  },
  methods: {
    addQuestion() {
      console.log(this.question);
      this.questions.push(this.question);
      this.answer.num = this.current;
      this.answers.push(this.answer);
      this.answer = { num: this.current, value: "" };
      this.question = { text: "", optA: "", optB: "", optC: "", optD: "" };
      this.current++;
    },
  },
};
</script>

<template>
  <div class="flex flex-col">
    <div><Top heading="Create Assessment" /></div>
    <div>
      <p class="font-bold">{{ current }}/30</p>
      <form class="flex flex-col gap-6" action="">
        <div
          class="w-[50%] h-[108px] mt-5 border-[1.5px] border-dashed border-border-300 grid place-items-center rounded-sm"
        >
          <label for="image">+ Choose File</label>
          <input type="file" name="image" class="sr-only" id="image" />
          <ErrorMessage name="image" class="text-red-600 text-xs pt-1 px-2" />
        </div>
        <!-- QUESTION -->
        <div class="input-group flex flex-col gap-[5px]">
          <label class="text-sm" for="question">Questions</label>
          <textarea
            v-model="question.text"
            name="question"
            id="question"
            class="border-border-300 h-36 k-input"
            required
          ></textarea>
        </div>
        <!-- OPTIONS -->
        <div class="options grid grid-cols-2 gap-y-6 gap-x-12">
          <div class="input-group flex flex-col gap-[5px]">
            <label class="text-sm" for="opta">Option A</label>
            <input
              type="text"
              :class="`border-border-300 h-10 k-input ${
                answer.value === 'A' ? 'bg-green-400/50' : ''
              }`"
              name="opta"
              id="opta"
              v-model="question.optA"
            />
            <ErrorMessage name="opta" class="text-red-600 text-xs pt-1 px-2" />
          </div>
          <div class="input-group flex flex-col gap-[5px]">
            <label class="text-sm" for="optb">Option B</label>
            <input
              type="text"
              :class="`border-border-300 h-10 k-input ${
                answer.value === 'B' ? 'bg-green-400/50' : ''
              }`"
              name="optb"
              id="optb"
              v-model="question.optB"
            />
            <ErrorMessage name="optb" class="text-red-600 text-xs pt-1 px-2" />
          </div>
          <div class="input-group flex flex-col gap-[5px]">
            <label class="text-sm" for="optc">Option C</label>
            <input
              type="text"
              :class="`border-border-300 h-10 k-input ${
                answer.value === 'C' ? 'bg-green-400/50' : ''
              }`"
              name="optc"
              id="optc"
              v-model="question.optC"
            />
            <ErrorMessage name="optc" class="text-red-600 text-xs pt-1 px-2" />
          </div>
          <div class="input-group flex flex-col gap-[5px]">
            <label class="text-sm" for="optd">Option D</label>
            <input
              type="text"
              :class="`border-border-300 h-10 k-input ${
                answer.value === 'D' ? 'bg-green-400/50' : ''
              }`"
              name="optd"
              id="optd"
              v-model="question.optD"
            />
            <ErrorMessage name="optd" class="text-red-600 text-xs pt-1 px-2" />
          </div>
        </div>
        <div class="correct w-fit mx-auto">
          <p class="text-lg font-bold text-center mb-1">Right Option</p>
          <div class="flex gap-4">
            <div class="flex gap-1 items-center">
              <input
                type="radio"
                name="answer"
                class="accent-primary rounded-sm checked:bg-primary focus:bg-primary hover:bg-primary/50 w-6"
                id="ansa"
                v-model="answer.value"
                value="A"
              />
              <label class="font-bold text-lg" for="ansa">A</label>
            </div>
            <div class="flex gap-1 items-center">
              <input
                type="radio"
                name="answer"
                class="accent-primary rounded-sm checked:bg-primary focus:bg-primary hover:bg-primary/50 w-6"
                id="ansb"
                v-model="answer.value"
                value="B"
              />
              <label class="font-bold text-lg" for="ansb">B</label>
            </div>
            <div class="flex gap-1 items-center">
              <input
                type="radio"
                name="answer"
                class="accent-primary rounded-sm checked:bg-primary focus:bg-primary hover:bg-primary/50 w-6"
                id="ansc"
                v-model="answer.value"
                value="C"
              />
              <label class="font-bold text-lg" for="ansc">C</label>
            </div>
            <div class="flex gap-1 items-center">
              <input
                type="radio"
                name="answer"
                class="accent-primary rounded-sm checked:bg-primary focus:bg-primary hover:bg-primary/50 w-6"
                id="ansd"
                v-model="answer.value"
                value="D"
              />
              <label class="font-bold text-lg" for="ansd">D</label>
            </div>
          </div>
        </div>
      </form>
      <!-- BUTTONS -->
      <div class="flex justify-between mx-[80px] mt-[50px]">
        <button
          class="font-bold bg-text-400 text-white w-[125px] h-[40px] rounded"
          :disabled="this.questions.length > 0"
          @click="this.current--"
        >
          Previous
        </button>
        <button
          class="font-bold bg-text-400 text-white w-[125px] h-[40px] rounded"
          @click="addQuestion"
          :disabled="this.questions.length <= 30"
        >
          Next
        </button>
      </div>
      <button
        class="block font-bold rounded w-[205px] h-[40px] mt-[50px] mx-auto bg-primary text-white disabled:cursor-not-allowed disabled:opacity-40"
        :disabled="questions.length !== 30"
      >
        Finish
      </button>
    </div>
  </div>
</template>

<style scoped></style>
