<script>
import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  DialogDescription,
} from "@headlessui/vue";
export default {
  name: "PreviewApplication",
  components: { Dialog, DialogOverlay, DialogTitle, DialogDescription },
  props: {
    isOpen: Boolean,
    setIsOpen: Function,
    entry: Object,
  },
  data() {
    return {};
  },
};
</script>

<template>
  <Dialog :open="isOpen" @close="setIsOpen" class="fixed inset-0">
    <div class="w-full">
      <DialogOverlay class="absolute min-h-screen inset-0 bg-black/50" />
      <DialogTitle class="sr-only">View Application Entry</DialogTitle>
      <!-- PREVIEW CARD   -->
      <section
        class="
          preview
          relative
          bg-white
          max-w-[600px]
          ml-auto
          pl-[40px]
          py-[50px]
          h-screen
          overflow-y-auto
        "
      >
        <div class="img-container">
          <img src="../assets/close.svg" />
        </div>
        <input type="text" class="sr-only" />
        <div class="mb-12">
          <img
            class="w-[150px] aspect-square"
            :src="`https://avatars.dicebear.com/api/avataaars/${entry.firstName}.svg`"
            alt=""
          />
        </div>
        <p class="font-bold text-text-200 mb-3">Personal Details</p>
        <hr class="block w-[90%] mx-auto bg-[#f2f2f2] mb-8" />
        <div class="grid grid-cols-2 gap-x-8 gap-y-9">
          <div class="dg flex flex-col gap-2">
            <label for="name" class="text-sm text-text-100">Name</label>
            <input
              class="rounded border-[#CDCFD6] text-text-300 max-w-[230px]"
              type="text"
              id="name"
              disabled
              :value="entry.firstName + ' ' + entry.lastName"
            />
          </div>
          <div class="dg flex flex-col gap-2">
            <label for="email" class="text-sm text-text-100">Email</label>
            <input
              class="rounded border-[#CDCFD6] text-text-300 max-w-[230px]"
              type="text"
              id="email"
              disabled
              :value="entry.email"
            />
          </div>
          <div class="dg flex flex-col gap-2">
            <label for="address" class="text-sm text-text-100">Address</label>
            <input
              class="rounded border-[#CDCFD6] text-text-300 max-w-[230px]"
              type="text"
              id="address"
              disabled
              :value="entry.address"
            />
          </div>
          <div class="dg flex flex-col gap-2">
            <label for="university" class="text-sm text-text-100"
              >University</label
            >
            <input
              class="rounded border-[#CDCFD6] text-text-300 max-w-[230px]"
              type="text"
              id="university"
              disabled
              :value="entry.university"
            />
          </div>
          <div class="dg flex flex-col gap-2">
            <label for="course" class="text-sm text-text-100"
              >Course of study</label
            >
            <input
              class="rounded border-[#CDCFD6] text-text-300 max-w-[230px]"
              type="text"
              id="course"
              disabled
              :value="entry.course"
            />
          </div>
          <div class="dg flex flex-col gap-2">
            <label for="dob" class="text-sm text-text-100">Date of birth</label>
            <input
              class="rounded border-[#CDCFD6] text-text-300 max-w-[230px]"
              type="text"
              id="dob"
              disabled
              :value="entry.dob"
            />
          </div>
          <div class="dg flex flex-col gap-2">
            <label for="gpa" class="text-sm text-text-100">CGPA</label>
            <input
              class="rounded border-[#CDCFD6] text-text-300 max-w-[230px]"
              type="text"
              id="gpa"
              disabled
              :value="entry.gpa"
            />
          </div>
          <div>
            <p class="text-sm text-text-100 mb-4">CV</p>
            <div class="flex gap-2">
              <span><img src="../assets/pdf.svg" alt="" /></span>
              <span class="text-text-300 max-w-[230px]"
                >{{ entry.firstName }}CV.pdf</span
              >
            </div>
          </div>
        </div>
        <div class="flex mt-12 gap-6 justify-center">
          <button
            class="w-[125px] h-12 bg-primary text-white font-medium rounded"
          >
            Approve</button
          ><button
            class="w-[125px] h-12 font-medium rounded border border-[#cecece]"
          >
            Decline
          </button>
        </div>
      </section>
    </div>
  </Dialog>
</template>

<style scoped>
.img-container {
  float: right;
}

.img-container img {
  width: 20px;
}
</style>
