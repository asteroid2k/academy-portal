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
    updateStatus: Function,
  },
  data() {
    return {
      confirmOpened: false,
      action: "",
    };
  },
  computed: {
    image() {
      return (
        this.entry.image ||
        `https://avatars.dicebear.com/api/initials/${
          this.user.firstName + " " + this.user.lastName
        }.svg`
      );
    },
    approvedColor() {
      let color = "text-orange-600";
      switch (this.entry.isApproved) {
        case "declined":
          color = "text-red-600";
          break;
        case "approved":
          color = "text-green-600";
          break;

        default:
          break;
      }
      return color;
    },
  },
  methods: {
    setConfirm(value) {
      this.confirmOpened = value;
    },
    triggerConfirm(action) {
      this.setIsOpen(false);
      this.action = action;
      this.setConfirm(true);
    },
    confirmAction() {
      this.updateStatus({ id: this.entry._id, status: this.action + "d" });
    },
  },
};
</script>

<template>
  <Dialog
    :open="confirmOpened"
    @close="setConfirm"
    class="fixed inset-0 z-30 grid place-items-center"
  >
    <div class="w-full">
      <DialogOverlay class="absolute min-h-screen inset-0 bg-black/50" />
      <DialogTitle class="sr-only">Confirm Action</DialogTitle>
      <div
        class="relative flex justify-center items-center bg-white p-8 w-[450px] h-[300px] mx-auto rounded"
      >
        <div class="flex flex-col gap-12 max-w-[260px] text-center">
          <p>
            Are you sure you want to
            <span class="font-semibold capitalize">{{ action }}</span> this
            application?
          </p>
          <div class="flex gap-4 font-medium">
            <button @click="confirmAction" class="btn-purp w-[125px] h-12">
              Yes
            </button>
            <button
              @click="setConfirm(false)"
              class="text-primary w-[125px] border border-primary/10 h-12 rounded hover:border-primary/50"
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  </Dialog>
  <Dialog :open="isOpen" @close="setIsOpen" class="fixed inset-0">
    <div class="w-full">
      <DialogOverlay class="absolute min-h-screen inset-0 bg-black/50" />
      <DialogTitle class="sr-only">View Application Entry</DialogTitle>
      <!-- PREVIEW CARD   -->
      <section
        class="preview relative bg-white max-w-[600px] ml-auto pl-[40px] py-[50px] h-screen overflow-y-auto"
      >
        <h2
          class="text-lg font-bold mb-4 uppercase py-2 px-3 border border-gray-100 w-fit shadow-sm rounded-lg"
          :class="approvedColor"
        >
          {{ entry.isApproved }}
        </h2>

        <input type="text" class="sr-only" />
        <div class="mb-12">
          <img class="w-[150px] aspect-square" :src="image" alt="" />
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
              <a
                class="text-text-300 max-w-[230px] hover:text-primary underline hover:decoration-primary"
                :href="entry.cv"
                >{{ entry.firstName }}CV.pdf</a
              >
            </div>
          </div>
        </div>
        <div class="flex mt-12 gap-6 justify-center">
          <button
            @click="triggerConfirm('approve')"
            class="w-[125px] h-12 btn-purp text-white font-medium rounded"
          >
            Approve</button
          ><button
            @click="triggerConfirm('decline')"
            class="w-[125px] h-12 font-medium rounded border border-[#cecece] hover:bg-red-50 hover:border-red-400 transition"
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
