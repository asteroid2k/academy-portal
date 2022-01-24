<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import Top from "../../components/Top.vue";
import { validators } from "../../helpers";
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from "@headlessui/vue";
export default {
  name: "CreateAssessment",
  components: {
    Top,
    Form,
    Field,
    ErrorMessage,
    RadioGroup,
    RadioGroupLabel,
    RadioGroupOption,
  },
  data() {
    return {
      current: 1,
      questions: [],
      answers: [],
      answer: "",
    };
  },
  computed: {
    currentQuestion() {
      if (!this.questions[this.current - 1]) {
        return { text: "", optA: "", optB: "", optC: "", optD: "" };
      }
      return this.questions[this.current - 1];
    },
    currentAnswer() {
      const ans = this.answers[this.current - 1];
      if (!ans) {
        return "";
      }
      this.answer = ans.value;
      return ans.value;
    },
  },

  methods: {
    addQuestion() {
      this.questions[this.current - 1] = this.currentQuestion;
      this.answers[this.current - 1] = {
        num: this.current,
        value: this.answer,
      };
      this.answer = "";
      this.next();
    },
    previous() {
      if (this.current >= 1) this.current--;
    },
    next() {
      if (this.current <= 30) this.current++;
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
            v-model="currentQuestion.text"
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
                answer === 'A' ? 'bg-green-400/50' : ''
              }`"
              name="opta"
              id="opta"
              v-model="currentQuestion.optA"
            />
            <ErrorMessage name="opta" class="text-red-600 text-xs pt-1 px-2" />
          </div>
          <div class="input-group flex flex-col gap-[5px]">
            <label class="text-sm" for="optb">Option B</label>
            <input
              type="text"
              :class="`border-border-300 h-10 k-input ${
                answer === 'B' ? 'bg-green-400/50' : ''
              }`"
              name="optb"
              id="optb"
              v-model="currentQuestion.optB"
            />
            <ErrorMessage name="optb" class="text-red-600 text-xs pt-1 px-2" />
          </div>
          <div class="input-group flex flex-col gap-[5px]">
            <label class="text-sm" for="optc">Option C</label>
            <input
              type="text"
              :class="`border-border-300 h-10 k-input ${
                answer === 'C' ? 'bg-green-400/50' : ''
              }`"
              name="optc"
              id="optc"
              v-model="currentQuestion.optC"
            />
            <ErrorMessage name="optc" class="text-red-600 text-xs pt-1 px-2" />
          </div>
          <div class="input-group flex flex-col gap-[5px]">
            <label class="text-sm" for="optd">Option D</label>
            <input
              type="text"
              :class="`border-border-300 h-10 k-input ${
                answer === 'D' ? 'bg-green-400/50' : ''
              }`"
              name="optd"
              id="optd"
              v-model="currentQuestion.optD"
            />
            <ErrorMessage name="optd" class="text-red-600 text-xs pt-1 px-2" />
          </div>
        </div>
        <!-- Right option select -->
        <div class="correct w-fit mx-auto">
          <RadioGroup v-model="answer" class="flex flex-col gap-3 items-center">
            <RadioGroupLabel class="text-lg font-bold text-center"
              >Right Option</RadioGroupLabel
            >
            <div class="flex gap-8">
              <RadioGroupOption
                v-for="opt in ['A', 'B', 'C', 'D']"
                :key="opt"
                v-slot="{ checked }"
                :value="opt"
              >
                <span
                  :class="`${
                    checked
                      ? 'bg-primary text-white ring-4 ring-primary/50'
                      : ''
                  } 
                  accent-primary border-2 border-primary/80 rounded py-1 px-4 text-base font-semibold cursor-pointer hover:bg-primary/30`"
                  >{{ opt }}</span
                >
              </RadioGroupOption>
            </div>
          </RadioGroup>
        </div>
      </form>
      <!-- BUTTONS -->
      <div class="flex justify-between mx-[80px] mt-[50px]">
        <button
          class="font-bold bg-text-400 text-white w-[125px] h-[40px] rounded disabled:cursor-not-allowed disabled:opacity-40"
          :disabled="current <= 1"
          @click="previous"
        >
          Previous
        </button>
        <button
          class="font-bold bg-text-400 text-white w-[125px] h-[40px] rounded disabled:cursor-not-allowed disabled:opacity-40"
          @click="addQuestion"
          :disabled="current >= 30"
        >
          Next
        </button>
      </div>
      <button
        class="block font-bold rounded w-[205px] h-[40px] mt-[50px] mx-auto bg-primary text-white disabled:cursor-not-allowed disabled:opacity-40"
        :disabled="current < 30"
      >
        Finish
      </button>
    </div>
  </div>
</template>

<style scoped></style>
