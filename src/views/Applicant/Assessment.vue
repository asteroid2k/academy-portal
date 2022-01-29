<script>
import { notyf } from "../../helpers";
import { mapGetters } from "vuex";

export default {
  name: "Assessment",
  async mounted() {
    await this.fetchAssessment();
  },
  props: { instance: Function },
  data() {
    return {
      current: 1,
      confirmed: false,
      questions: [],
      answers: [],
      answer: "",
    };
  },
  watch: {
    current() {
      const stored = this.answers[this.current - 1];
      if (stored) {
        this.answer = stored.value;
      } else this.answer = "";
    },
  },
  computed: {
    ...mapGetters(["batch", "user"]),
    question() {
      return this.questions[this.current - 1];
    },
    approved() {
      if (this.user && this.user.isApproved === "approved") {
        return true;
      }
      return false;
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
      if (this.current > 1) this.current--;
    },
    next() {
      if (this.current < this.questions.length) this.current++;
    },
    async fetchAssessment() {
      if (!this.batch._id) {
        notyf.open({ type: "purp", message: "No ongoing batch" });
        return;
      }
      try {
        const response = await this.instance.get(
          `/assessment/${this.batch._id}`
        );
        if (response.data) {
          const { assessment } = response.data;
          this.questions = assessment.questions;
        }
      } catch (error) {
        if (error.response) {
          const { status, statusText, data } = error.response;
          if (status === 404) {
            notyf.open({
              type: "info",
              message: "Assessment not available yet",
            });
            return;
          }
          if (status === 401 || status === 403) {
            notyf.error(statusText);
            this.$router.push({ name: "Signin" });
            return;
          }
          if (data.errors) {
            notyf.error(Object.values(data.errors)[0]);
            return;
          }
          if (data.message) {
            notyf.error(data.message);
            return;
          }
        }
        notyf.error("An error occured");
      }
    },
    async handleSubmit() {
      this.addAnswer();
      try {
        let response = await this.instance.post(
          `/assessment/${this.batch._id}`,
          {
            answers: this.answers,
            application: this.user._id,
          }
        );
        if (response.data) {
          const { message, batch } = response.data;
          notyf.success(message);
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
    <div v-if="!confirmed" class="text-center mt-[160px]">
      <p v-if="questions.length > 0 && approved">
        You are about to take your assessment. <br />
        Your timer will start when you click the button
      </p>
      <p
        v-else-if="questions.length > 0 && !approved"
        class="text-lg font-semibold"
      >
        Attention!<br />
        Your application must be approved before you can take an assessment.
      </p>
      <div v-else class="max-w-[350px] mx-auto">
        <img
          src="../../assets/hourglass.png"
          alt=""
          class="w-[72px] mx-auto mb-[20px]"
        />
        <p>
          We have 4 days left until the next assessment <br />
          Watch this space
        </p>
      </div>
      <button
        class="mt-6 px-10 py-2 bg-primary text-white cursor-pointer disabled:bg-neutral-500/80 disabled:cursor-not-allowed font-bold rounded"
        :disabled="questions.length <= 0 || !approved"
        @click="confirm"
      >
        Take Assessment
      </button>
    </div>
    <section v-if="confirmed" class="quiz-area">
      <!-- Question -->
      <div class="max-w-[600px] mx-auto w-fit">
        <section class="question flex flex-col">
          <p class="text-sm font-medium italic text-center">
            Question {{ current }}
          </p>
          <p class="text-2xl font-medium italic text-center mt-3">
            {{ question.text }}
          </p>
          <div class="options grid grid-flow-row gap-7 mt-10">
            <div
              v-for="opt in question.options"
              :key="opt.opt"
              class="flex gap-6 items-center hover:bg-green-500/10 pl-2"
            >
              <input
                type="radio"
                name="option"
                :id="opt.opt"
                class="rounded-none text-primary cursor-pointer border"
                :value="opt.opt"
                v-model="answer"
              />
              <label
                :for="opt.opt"
                :class="`italic font-medium text-base py-2 px-5 w-full cursor-pointer rounded-sm ${
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
        @click="handleSubmit"
        class="block mt-[75px] w-[200px] bg-primary text-white h-10 font-bold disabled:opacity-70 rounded disabled:cursor-not-allowed mx-auto"
        :disabled="current < questions.length"
      >
        Finish
      </button>
    </section>
  </div>
</template>

<style scoped></style>
