<script>
import { questions } from "../../helpers.js";
export default {
  name: "Assessment",
  data() {
    return {
      current: 1,
      confirmed: false,
      questions,
      answers: [],
      answer: "",
    };
  },
  computed: {
    question() {
      return questions[this.current - 1];
    },
    currentAnswer() {
      const stored = this.answers[this.current - 1];
      if (stored.value) {
        this.answer = stored.value;
        return stored.value;
      }
      this.answer = "";
      return "";
    },
  },
  methods: {
    confirm() {
      this.confirmed = true;
    },

    addAnswer() {
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
  <div class="main my-[50px] mx-[60px]">
    <div class="head flex items-baseline justify-between mb-14">
      <div class="max-w-[550px]">
        <h1 class="font-light text-[44px]">Take Assessment</h1>
        <p class="font-medium italic">
          Click the finish button below to submit assessment, you can go back at
          any time to edit your answers.
        </p>
      </div>
      <div class="timer">
        <p class="text-sm">Timer</p>
        <p class="text-xs">
          <span class="min text-5xl font-light">00</span>min<span
            class="sec text-5xl font-light"
            >010</span
          >sec
        </p>
      </div>
    </div>
    <div v-if="!confirmed" class="text-center">
      <p v-if="questions.length > 0">
        You are about to take your assessment. <br />
        Your timer will start when you click the button
      </p>
      <div v-else class="max-w-[350px] mx-auto my-[150px]">
        <img
          src="../../assets/hourglass.png"
          alt=""
          class="w-[72] mx-auto mb-[20px]"
        />
        <p>
          We have 4 days left until the next assessment <br />
          Watch this space
        </p>
      </div>
      <button
        class="mt-6 px-10 py-2 bg-primary text-white cursor-pointer disabled:bg-neutral-500/80 disabled:cursor-not-allowed font-bold rounded"
        :disabled="questions.length <= 0"
        @click="confirm"
      >
        Take Assessment
      </button>
    </div>
    <section v-if="confirmed" class="quiz-area">
      <!-- Question -->
      <div class="max-w-[600px] mx-auto w-fit shadow-sm">
        <section class="question flex flex-col">
          <p class="text-sm font-medium italic text-center">
            Question {{ current }}
          </p>
          <p class="text-2xl font-medium italic text-center mt-3">
            {{ question.question }}
          </p>
          <div class="options flex flex-col gap-4 mt-10">
            <div
              v-for="opt in question.options"
              :key="opt.opt"
              class="answer flex gap-10 items-center"
            >
              <input
                type="radio"
                name="option"
                :id="opt.opt"
                class="rounded-none text-primary"
                :value="opt.opt"
                v-model="answer"
              />
              <label
                :for="opt.opt"
                :class="`italic font-medium text-base py-2 px-5 ${
                  answer === opt.opt ? 'bg-green-400/80' : ''
                }`"
                ><span class="mr-1">{{ opt.opt }}.</span> {{ opt.value }}
              </label>
            </div>
          </div>
        </section>
      </div>
      <!-- Question nav buttons -->
      <div class="flex gap-4 justify-between max-w-[600px] mt-[80px] mx-auto">
        <button
          @click="previous"
          class="w-[125px] border border-black/20 h-10 font-bold disabled:opacity-70 rounded disabled:cursor-not-allowed"
          :disabled="current <= 1"
        >
          Prev
        </button>

        <button
          @click="addAnswer"
          class="w-[125px] bg-primary text-white h-10 font-bold disabled:opacity-70 rounded disabled:cursor-not-allowed"
          :disabled="current >= questions.length"
        >
          Next
        </button>
      </div>
      <!-- Finish button -->
      <button
        @click="$router.push({ name: 'Success' })"
        class="block mt-[75px] w-[200px] bg-primary text-white h-10 font-bold disabled:opacity-70 rounded disabled:cursor-not-allowed mx-auto"
        :disabled="current !== questions.length"
      >
        Finish
      </button>
    </section>
  </div>
</template>

<style scoped>
@media screen and (max-width: 992px) {
  .main {
    margin: 0;
  }
  .head {
    flex-direction: column;
  }

  .head p {
    margin: 10px;
  }
}
</style>
