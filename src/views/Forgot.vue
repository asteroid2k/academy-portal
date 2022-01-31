<script>
import MailLogo from "../assets/mail.svg?component";
import SelectLogo from "../assets/select.svg?component";
import SmsLogo from "../assets/sms.svg?component";
import { notyf } from "../helpers";
export default {
  name: "Forgot",
  props: { instance: Function },
  components: {
    MailLogo,
    SelectLogo,
    SmsLogo,
  },
  data() {
    return {
      email: "",
      type: "",
    };
  },
  methods: {
    showInput(target) {
      this.type = target;
    },
    async handleSubmit() {
      console.log(this.email);
      this.instance
        .post("/auth/forgot", { email: this.email })
        .then((resp) => {
          if (resp.data) {
            notyf.success(resp.data.message);
            this.$router.push({ name: "Reset" });
          }
        })
        .catch((error) => {
          if (error.response.data) {
            const { message, errors } = error.response.data;
            if (errors) notyf.error(Object.values(errors)[0]);
            if (message) notyf.error(message);
          } else notyf.error("An error occured");
        });
    },
  },
};
</script>

<template>
  <div class="main min-h-screen grid place-items-center">
    <div class="max-w-[620px] rounded-lg shadow px-14 py-8 w-full my-8">
      <div class="heading text-center mb-12 w-full">
        <h1 class="text-[32px] font-semibold">Forgot Password</h1>
        <p>Please select option to send link to reset password</p>
      </div>
      <div class="flex flex-col gap-6">
        <div
          @click="showInput('email')"
          class="relative rounded flex gap-7 pt-7 pb-6 pl-7 pr-12 border border-border-100 cursor-pointer"
          :class="type === 'email' ? 'border-primary' : ''"
        >
          <div>
            <MailLogo :class="type === 'email' ? 'text-primary' : ''" />
          </div>
          <div>
            <h2 class="text-lg text-text-500 mb-4 font-semibold">
              Reset via Email
            </h2>
            <p class="text-sm text-text-100 max-w-[245px]">
              Reset password link will be sent to your registered email address.
            </p>
          </div>
          <SelectLogo
            v-show="type === 'email'"
            class="absolute right-14 top-14"
          />
        </div>
        <div
          @click="showInput('sms')"
          class="relative rounded flex gap-7 pt-7 pb-6 pl-7 pr-12 border border-border-100 cursor-pointer"
          :class="type === 'sms' ? 'border-primary' : ''"
        >
          <div><SmsLogo :class="type === 'sms' ? 'text-primary' : ''" /></div>
          <div>
            <h2 class="text-lg text-text-500 mb-4 font-semibold">
              Reset via SMS
            </h2>
            <p class="text-sm text-text-100 max-w-[245px]">
              Reset password link will be sent to your registered phone number.
            </p>
          </div>
          <SelectLogo
            v-show="type === 'sms'"
            class="absolute right-14 top-14"
          />
        </div>
        <form @submit.prevent="handleSubmit">
          <div
            v-show="type === 'email'"
            class="flex flex-col max-w-[400px] mx-auto"
          >
            <label for="email" class="text-text-200">Email</label>
            <input
              class="k-input w-full h-[48px] mx-auto block mb-5 mt-2 border-border-200"
              type="email"
              name="email"
              id="email"
              v-model="email"
              required
            />
          </div>
          <div
            v-show="type === 'sms'"
            class="flex flex-col max-w-[400px] mx-auto"
          >
            <label for="phone" class="text-text-200">Phone</label>
            <input
              class="k-input w-full h-[48px] mx-auto block mb-5 mt-2 border-border-200"
              type="tel"
              name="phone"
              id="phone"
            />
          </div>

          <button
            type="submit"
            class="block w-full rounded mt-2 max-w-[380px] bg-primary text-white h-[50px] mx-auto btn-purp"
          >
            Send Link
          </button>
        </form>
        <p class="text-sm flex gap-1 mx-auto mt-4">
          <span class="text-text-100">Didn’t receive link?</span
          ><span class="text-primary font-medium">Resend</span>
        </p>
      </div>
    </div>
  </div>
</template>

<style></style>
