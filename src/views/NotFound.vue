<script>
import { ChevronLeftIcon } from "@heroicons/vue/outline";
export default {
  name: "NotFound",
  components: {
    ChevronLeftIcon,
  },
};
</script>

<template>
  <div class="main my-12 mx-4">
    <h1 class="text-primary text-3xl font-bold mb-6 mx-auto w-fit">
      Page not found
    </h1>
    <div class="max-w-[400px] mx-auto">
      <img src="../assets/undraw_warning_cyit.svg" alt="" />
    </div>
    <div
      class="text-center text-primary mt-5 hover:underline flex items-center group mx-auto w-fit"
    >
      <span
        ><ChevronLeftIcon
          class="text-primary w-6 stroke-2 group-hover:-translate-x-1"
      /></span>
      <router-link :to="{ name: 'Home' }" class="text-lg font-semibold">
        Go to Home</router-link
      >
    </div>
  </div>
</template>

<style></style>
