<script>
import MailLogo from "../assets/mail.svg?component";
import SelectLogo from "../assets/select.svg?component";
import SmsLogo from "../assets/sms.svg?component";
export default {
  components: {
    MailLogo,
    SelectLogo,
    SmsLogo,
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
          class="relative rounded flex gap-7 pt-7 pb-6 pl-7 pr-12 border border-border-100"
        >
          <div><MailLogo /></div>
          <div>
            <h2 class="text-lg text-text-500 mb-4 font-semibold">
              Reset via Email
            </h2>
            <p class="text-sm text-text-100 max-w-[245px]">
              Reset password link will be sent to your registered email address.
            </p>
          </div>
          <SelectLogo class="absolute right-14 top-14" />
        </div>
        <div
          class="relative rounded flex gap-7 pt-7 pb-6 pl-7 pr-12 border border-border-100"
        >
          <div><SmsLogo /></div>
          <div>
            <h2 class="text-lg text-text-500 mb-4 font-semibold">
              Reset via SMS
            </h2>
            <p class="text-sm text-text-100 max-w-[245px]">
              Reset password link will be sent to your registered phone number.
            </p>
          </div>
          <SelectLogo class="absolute right-14 top-14" />
        </div>
        <button
          class="block w-full rounded mt-2 max-w-[380px] bg-primary text-white h-[50px] mx-auto"
        >
          Send Link
        </button>
        <p class="text-sm flex gap-1 mx-auto mt-4">
          <span class="text-text-100">Didn’t receive link?</span
          ><span class="text-primary font-medium">Resend</span>
        </p>
      </div>
    </div>
  </div>
</template>

<style></style>
