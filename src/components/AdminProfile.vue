<template>
  <div class="view">
    <div class="header">
      <p class="head">Profiles Setting</p>
      <button class="edit-button" @click="disabled = !disabled">Edit</button>
    </div>
    <Form class="form-view" :validation-schema="schema" @submit="handleSubmit">
      <div class="upload-container">
        <img src="../assets/account.svg" />
        <label for="image" class="underline">Upload new image</label>
        <Field
          class="upload-link sr-only"
          name="image"
          type="file"
          id="image"
          :disabled="disabled"
        />
        <ErrorMessage name="image" class="text-red-600 text-xs pt-1 px-2" />

        <p class="close-link"><img src="../assets/close.svg" />Remove</p>
      </div>
      <div class="top-form">
        <div class="short-box">
          <label for="name">Name</label><br />
          <Field
            :disabled="disabled"
            class="input"
            type="text"
            id="name"
            name="name"
            :value="user.firstName + ' ' + user.lastName"
          />
          <ErrorMessage name="name" class="text-red-600 text-xs pt-1 px-2" />
        </div>
        <div class="short-box">
          <label for="email">Email</label><br />
          <Field
            :disabled="disabled"
            class="input"
            type="email"
            id="email"
            name="email"
            :value="user.email"
          />
          <ErrorMessage name="email" class="text-red-600 text-xs pt-1 px-2" />
        </div>
        <div class="short-box">
          <label for="phone">Phone number</label><br />
          <Field
            :disabled="disabled"
            class="input"
            type="text"
            id="phone"
            name="phone"
            :value="user.phone"
          />
          <ErrorMessage name="phone" class="text-red-600 text-xs pt-1 px-2" />
        </div>
      </div>
      <div class="bottom-form">
        <div class="short-box">
          <label for="country">Country</label>
          <br />
          <Field
            :disabled="disabled"
            class="input"
            name="country"
            id="country"
            :value="user.country"
          />
          <ErrorMessage name="country" class="text-red-600 text-xs pt-1 px-2" />
        </div>
        <div class="long-box">
          <label for="address">Address</label>
          <br />
          <Field
            :disabled="disabled"
            class="input"
            type="text"
            id="address"
            name="address"
            :value="user.address"
          />
          <ErrorMessage name="address" class="text-red-600 text-xs pt-1 px-2" />
        </div>
      </div>
      <div class="button">
        <button
          :disabled="disabled"
          type="submit"
          id="save-button"
          class="btn-purp dis"
        >
          Save
        </button>
      </div>
    </Form>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import { mapGetters } from "vuex";
import { object, string } from "yup";
import { notyf, validators } from "../helpers";
export default {
  name: "Profile",
  props: { instance: Function },
  components: { Form, Field, ErrorMessage },
  data() {
    const schema = object({
      name: validators.nameR,
      email: validators.email,
      country: string().required("Enter country"),
      address: string().required("Enter address"),
      phone: string().required("Enter phone").min(9),
      image: validators.image,
    });
    return {
      schema,
      disabled: true,
    };
  },
  computed: {
    ...mapGetters(["user"]),
  },
  methods: {
    async handleSubmit(values) {
      if (this.disabled) {
        return;
      }
      const [fname, ...lname] = values.name.split(" ");
      values.firstName = fname;
      values.lastName = lname.join(" ");
      const formData = new FormData();
      for (const key in values) {
        if (key === "image") {
          continue;
        }
        formData.append(key, values[key]);
      }
      if (values.image) {
        formData.append("image", values.image[0], values.image[0].name);
      }
      try {
        let response = await this.instance.patch("/user", formData);
        if (response.data) {
          const { data } = response;
          notyf.success(data.message);
        }
      } catch (error) {
        console.log(error);
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

<style scoped>
.view {
  margin: 100px 0px 150px;
  width: 80%;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 0px 15px;
  border-bottom: 1px solid #f2f2f2;
}
.head {
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.4px;

  color: #4a4a4a;
}
.edit-button {
  padding: 10px 50px;
  border: 1px solid #7557d3;
  box-sizing: border-box;
  border-radius: 3px;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: -0.5px;
  color: #7557d3;
}
.upload-container {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 55px 0px 45px;
}

.close-link {
  width: 70px;
  justify-content: space-between;
  display: flex;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  /* identical to box height */

  letter-spacing: -0.117188px;

  color: #ff5722;
}

.upload-link {
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  /* identical to box height */

  letter-spacing: -0.117188px;
  text-decoration-line: underline;

  color: #333758;

  opacity: 0.5;
}

.top-form,
.bottom-form {
  display: flex;
  margin-bottom: 40px;
  justify-content: space-between;
}
.input {
  outline: none;
  border: 1px solid transparent;
  background: rgba(117, 87, 211, 0.04);
  padding-block: 15px;
  padding-left: 15px;
}
.input:enabled {
  border: 1px solid var(--primary);
  background-color: white;
}
.input:disabled {
  cursor: not-allowed;
}

.short-box {
  width: 30%;
}

.long-box {
  width: 65%;
}
#address {
  width: 100%;
  outline: none;
  border: none;
  background: rgba(117, 87, 211, 0.04);
}
#save-button {
  background: #7557d3;
  border-radius: 3px;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: -0.5px;
  color: #ffffff;
  padding: 10px 50px;
}

.form-view {
  width: 100%;
}
.button {
  width: 100%;
  text-align: center;
}
label {
  color: rgba(51, 55, 88, 0.5);
}
@media screen and (max-width: 992px) {
  .upload-container {
    width: 100%;
  }
  .header {
  }
  .view {
    width: 100%;
    margin: 50px 0px 75px;
  }
  .top-form {
    font-size: 14px;
  }
}
</style>
