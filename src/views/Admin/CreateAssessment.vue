<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import Top from "../../components/Top.vue";
import { notyf } from "../../helpers";
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from "@headlessui/vue";
import { mapGetters } from "vuex";
export default {
  name: "CreateAssessment",
  props: { instance: Function },
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
      question: {
        text: "",
        options: [
          { opt: "A", value: "" },
          { opt: "B", value: "" },
          { opt: "C", value: "" },
          { opt: "D", value: "" },
        ],
      },
      answers: [],
      answer: "",
    };
  },
  watch: {
    current() {
      const storedQ = this.questions[this.current - 1];
      const storedA = this.answers[this.current - 1];
      if (storedQ) {
        this.question = storedQ;
      } else {
        this.question = {
          text: "",
          options: [
            { opt: "A", value: "" },
            { opt: "B", value: "" },
            { opt: "C", value: "" },
            { opt: "D", value: "" },
          ],
        };
      }
      if (storedA) {
        this.answer = storedA.value;
      } else {
        this.answer = "";
      }
    },
  },
  computed: {
    ...mapGetters(["batch"]),
  },

  methods: {
    addQuestion() {
      this.questions[this.current - 1] = this.question;
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
      if (this.current < 30) this.current++;
    },

    async handleSubmit() {
      this.addQuestion();
      if (!this.batch.slug) {
        notyf.error("No ongoing batch/application");
        return;
      }
      try {
        let response = await this.instance.post("/assessment", {
          questions: this.questions,
          answers: this.answers,
          batch_id: this.batch._id,
        });
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
  <div class="flex flex-col">
    <div><Top heading="Create Assessment" /></div>
    <div>
      <p class="font-bold">{{ current }}/30</p>
      <Form class="flex flex-col gap-6">
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
                answer === 'A' ? 'bg-green-400/80' : ''
              }`"
              name="opta"
              id="opta"
              v-model="question.options[0].value"
            />
            <ErrorMessage name="opta" class="text-red-600 text-xs pt-1 px-2" />
          </div>
          <div class="input-group flex flex-col gap-[5px]">
            <label class="text-sm" for="optb">Option B</label>
            <input
              type="text"
              :class="`border-border-300 h-10 k-input ${
                answer === 'B' ? 'bg-green-400/80' : ''
              }`"
              name="optb"
              id="optb"
              v-model="question.options[1].value"
            />
            <ErrorMessage name="optb" class="text-red-600 text-xs pt-1 px-2" />
          </div>
          <div class="input-group flex flex-col gap-[5px]">
            <label class="text-sm" for="optc">Option C</label>
            <input
              type="text"
              :class="`border-border-300 h-10 k-input ${
                answer === 'C' ? 'bg-green-400/80' : ''
              }`"
              name="optc"
              id="optc"
              v-model="question.options[2].value"
            />
            <ErrorMessage name="optc" class="text-red-600 text-xs pt-1 px-2" />
          </div>
          <div class="input-group flex flex-col gap-[5px]">
            <label class="text-sm" for="optd">Option D</label>
            <input
              type="text"
              :class="`border-border-300 h-10 k-input ${
                answer === 'D' ? 'bg-green-400/80' : ''
              }`"
              name="optd"
              id="optd"
              v-model="question.options[3].value"
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
                  accent-primary border-2 border-primary/80 rounded py-1 px-4 text-base font-semibold cursor-pointer hover:bg-primary/60`"
                  >{{ opt }}</span
                >
              </RadioGroupOption>
            </div>
          </RadioGroup>
        </div>
      </Form>
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
        @click="handleSubmit"
      >
        Finish
      </button>
    </div>
  </div>
</template>

<style scoped></style>
