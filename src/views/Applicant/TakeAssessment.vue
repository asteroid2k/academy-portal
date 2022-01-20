<script>
import Sidebar from "../../components/Sidebar.vue";

export default {
  name: "Assessment",
  components: { Sidebar },
  data() {
    return {
      current: 1,
      confirm: false,
      questions: [
        {
          number: 1,
          question: "Hi Everyone, this is",
          options: [
            {
              opt: "A",
              value: "Mark",
            },
            {
              opt: "B",
              value: "Daverose",
            },
            {
              opt: "C",
              value: "David",
            },
            {
              opt: "D",
              value: "Papa",
            },
          ],
        },
        {
          number: 2,
          question: "What is HTTPS",
          options: [
            {
              opt: "A",
              value: "A programming language",
            },
            {
              opt: "B",
              value: "Encrypted HTTP",
            },
            {
              opt: "C",
              value: "A type of RAM",
            },
            {
              opt: "D",
              value: "None of the above",
            },
          ],
        },
        {
          number: 3,
          question: "How many bits make up a byte",
          options: [
            {
              opt: "A",
              value: "24",
            },
            {
              opt: "B",
              value: "8",
            },
            {
              opt: "C",
              value: "64",
            },
            {
              opt: "D",
              value: "32",
            },
          ],
        },
      ],
      routes: [
        {
          routeName: "Dashboard",
          image: "../../../src/assets/dashboard.svg",
          routeUrl: "/dashboard",
        },
        {
          routeName: "Assessment",
          image: "../../../src/assets/assessment.svg",
          routeUrl: "/assessment",
        },
      ],
    };
  },
  methods: {
    getQuestion(num) {
      return this.questions[num - 1];
    },
  },
};
</script>

<template>
  <div class="main">
    <div><Sidebar v-bind:routes="routes" /></div>
    <div class="container">
      <div class="head flex items-baseline justify-between">
        <div class="max-w-[550px]">
          <h1 class="font-light text-[44px]">Take Assessment</h1>
          <p class="font-medium italic">
            Click the finish button below to submit assessment, you can go back
            at any time to edit your answers.
          </p>
        </div>
        <div>
          <p class="text-sm">Timer</p>
          <p class="text-xs">
            <span class="min text-5xl font-light">00</span>min<span
              class="sec text-5xl font-light"
              >010</span
            >sec
          </p>
        </div>
      </div>
      <div v-if="!confirm" class="max-w-[350px] mx-auto my-[150px]">
        <img
          src="../../assets/hourglass.svg"
          alt=""
          class="w-[72] mx-auto mb-[20px]"
        />
        <p>
          We have 4 days left until the next assessment <br />
          Watch this space
        </p>
        <button
          @click="confirm = true"
          class="
            block
            mt-6
            px-10
            py-2
            bg-primary
            text-white
            cursor-pointer
            bg-neutral-500/80
            font-bold
            rounded
            mx-auto
          "
        >
          Take Assessment
        </button>
      </div>
      <div v-if="confirm" class="max-w-[600px] mx-auto w-fit my-[60px]">
        <router-view :getQuestion="getQuestion"></router-view>
      </div>
      <div
        v-if="confirm"
        class="flex gap-4 justify-between max-w-[600px] mt-[80px] mx-auto"
      >
        <router-link
          :to="{ name: 'Question', params: { num: current - 1 } }"
          @click="current--"
        >
          <button
            class="
              w-[125px]
              border border-black/20
              h-10
              font-bold
              disabled:opacity-70 disabled:cursor-not-allowed
            "
            :disabled="current <= 1"
          >
            Prev
          </button>
        </router-link>
        <router-link
          :to="{ name: 'Question', params: { num: current + 1 } }"
          @click="current++"
        >
          <button
            class="
              w-[125px]
              bg-purple-900
              text-white
              h-10
              font-bold
              disabled:opacity-70 disabled:cursor-not-allowed
            "
            :disabled="current >= questions.length"
          >
            Next
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  font-family: Lato;
  width: 100%;
}
.container {
  margin: 50px 60px;
}
</style>
