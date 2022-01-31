<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import { object } from "yup";
import { notyf, validators } from "../../helpers.js";
import { mapGetters, mapState } from "vuex";

export default {
  name: "ApplyForm",
  //importing axios instance
  props: { instance: Function },
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  //check for available batch
  mounted() {
    if (!("slug" in this.batch)) {
      notyf.error("There is no ongoing application");
      this.$router.push({ name: "Home" });
    }
  },
  data() {
    const schema = object({
      email: validators.email,
      dob: validators.dob,
      firstName: validators.nameR,
      lastName: validators.nameR,
    });
    return {
      schema,
      files: { cv: "", image: "" },
      prePop: { firstName: "", lastName: "", email: "" },
    };
  },
  computed: {
    ...mapState(["info"]),
    ...mapGetters(["batch"]),
  },
  methods: {
    fileChange(e) {
      const input = e.target;
      if (input.files) {
        let name = input.files[0].name;
        this.files[e.target.name] = name;
        if (name.length > 30)
          this.files[e.target.name] = name.substring(0, 14) + "...";
      }
    },
    async handleSubmit(values) {
      const formData = new FormData();
      for (const key in values) {
        if (key === "image" || key === "cv") {
          continue;
        }
        formData.append(key, values[key]);
      }
      if (values.image) {
        formData.append("image", values.image[0], values.image[0].name);
      }
      if (values.cv) {
        formData.append("cv", values.cv[0], values.cv[0].name);
      }

      try {
        let response = await this.instance.post(
          `/applications/apply/${this.batch._id}`,
          formData
        );
        if (response.data) {
          const { message } = response.data;
          notyf.success(message);
          this.$router.push({ name: "UserDashboard" });
        }
      } catch (error) {
        //if the error has a response it is from the backend
        if (error.response) {
          if (error.response.data) {
            const { errors, message } = error.response.data;
            if (errors) {
              notyf.error(Object.values(errors)[0]);
            } else if (message) {
              notyf.error(message);
            }
          }
        } else {
          console.log(error);
          notyf.error("An error occured");
        }
      }
    },
  },
};
</script>
<template>
  <div class="main my-8">
    <!-- header -->
    <div class="heading flex flex-col items-center gap-7">
      <div class="">
        <img class="" src="../../assets/logo.svg" alt="" />
      </div>
      <h2 class="text-2xl font-medium italic">Application Form</h2>
    </div>
    <!-- form -->
    <Form
      action=""
      @submit="handleSubmit"
      :validation-schema="schema"
      class="
        max-w-[960px]
        px-[70px]
        pt-[50px]
        pb-[40px]
        mx-auto
        shadow
        rounded-lg
        w-full
      "
      enctype="multipart/form-data"
    >
      <!-- file upload buttons -->
      <div class="file-uploads flex gap-8 justify-center mb-8">
        <div
          class="
            border-[1.5px] border-dashed border-border-300
            w-[210px]
            grid
            place-items-center
            h-[50px]
            rounded-sm
          "
        >
          <label for="cv">{{ files.cv || "+ Upload CV" }}</label>
          <Field
            type="file"
            name="cv"
            class="sr-only"
            id="cv"
            @change="fileChange"
          />
          <ErrorMessage name="cv" class="text-red-600 text-xs pt-1 px-2" />
        </div>
        <div
          class="
            border-[1.5px] border-dashed border-border-300
            w-[210px]
            grid
            place-items-center
            h-[50px]
            rounded-sm
          "
        >
          <label for="image">{{ files.image || "+ Upload Photo" }}</label>
          <Field
            type="file"
            name="image"
            class="sr-only"
            id="image"
            @change="fileChange"
          />
          <ErrorMessage name="image" class="text-red-600 text-xs pt-1 px-2" />
        </div>
      </div>
      <div class="input-container grid grid-cols-2 gap-x-[65px] gap-y-7">
        <div class="input-group max-w-[375px] flex flex-col gap-[5px]">
          <label class="text-sm" for="firstname">First Name</label>
          <Field
            type="text"
            class="border-border-300 h-12 k-input"
            name="firstName"
            :value="info.firstName"
          />
          <ErrorMessage
            name="firstName"
            class="text-red-600 text-xs pt-1 px-2"
          />
        </div>
        <div class="input-group max-w-[375px] flex flex-col gap-[5px]">
          <label class="text-sm" for="lastname">Last Name</label>
          <Field
            type="text"
            class="border-border-300 h-12 k-input"
            name="lastName"
            :value="info.lastName"
          />
          <ErrorMessage
            name="lastName"
            class="text-red-600 text-xs pt-1 px-2"
          />
        </div>
        <div class="input-group max-w-[375px] flex flex-col gap-[5px]">
          <label class="text-sm" for="email">Email</label>
          <Field
            type="email"
            class="border-border-300 h-12 k-input"
            name="email"
            :value="info.email"
          />
          <ErrorMessage name="email" class="text-red-600 text-xs pt-1 px-2" />
        </div>
        <div class="input-group max-w-[375px] flex flex-col gap-[5px]">
          <label class="text-sm" for="dob">Date of Birth</label>
          <Field
            type="date"
            class="border-border-300 h-12 k-input"
            name="dob"
            id="dob"
          />
          <ErrorMessage name="dob" class="text-red-600 text-xs pt-1 px-2" />
        </div>
        <div class="input-group max-w-[375px] flex flex-col gap-[5px]">
          <label class="text-sm" for="address">Address</label>
          <Field
            type="text"
            class="input border-border-300 h-12 k-input"
            name="address"
            id="addresss"
          />
          <ErrorMessage name="address" class="text-red-600 text-xs pt-1 px-2" />
        </div>
        <div class="input-group max-w-[375px] flex flex-col gap-[5px]">
          <label class="text-sm" for="lastname">University</label>
          <Field
            type="text"
            class="input border-border-300 h-12 k-input"
            name="university"
          />
          <ErrorMessage
            name="university"
            class="text-red-600 text-xs pt-1 px-2"
          />
        </div>
        <div class="input-group max-w-[375px] flex flex-col gap-[5px]">
          <label class="text-sm" for="course_of_study">Course of Study</label>
          <Field
            type="text"
            class="input border-border-300 h-12 k-input"
            name="course"
          />
          <ErrorMessage name="course" class="text-red-600 text-xs pt-1 px-2" />
        </div>
        <div class="input-group max-w-[375px] flex flex-col gap-[5px]">
          <label class="text-sm" for="lastname">CGPA</label>
          <Field
            type="text"
            class="border-border-300 h-12 k-input"
            name="gpa"
          />
          <ErrorMessage name="gpa" class="text-red-600 text-xs pt-1 px-2" />
        </div>
      </div>
      <button
        class="
          mt-11
          rounded
          font-bold
          text-base
          block
          max-w-[380px]
          w-full
          bg-primary
          text-white
          h-12
          mx-auto
        "
        type="submit"
      >
        Submit
      </button>
    </Form>
  </div>
</template>

<style scoped></style>
