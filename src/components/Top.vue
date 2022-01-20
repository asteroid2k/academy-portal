<script>
export default {
  name: "Top",
  props: { heading: String },
};
</script>

<template>
  <div class="flex flex-col items-start mb-[60px]">
    <h1 class="text-[44px] font-light">{{ heading }}</h1>
  </div>
</template>

<style></style>
