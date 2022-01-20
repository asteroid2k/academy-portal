<template>
  <div class="app-section">
    <div class="app-container">
      <div class="app-title">
        <div class="app-image-con">
          <img class="app-image" src="../../assets/logo.png" alt="" />
        </div>
        <h2 class="app-text">Application Form</h2>
      </div>
      <form class="app-form-container" enctype="multipart/form-data">
        <div class="app-form-buttons">
          <div class="dotted">
            <div>
              <button class="upload-btn">+ Upload CV</button>
              <input type="file" name="files_path" ref="file" />
            </div>
          </div>
          <div class="dotted">
            <div>
              <button class="upload-btn">+ Upload Photo</button>
              <input type="file" name="files_path" ref="file" />
            </div>
          </div>
        </div>
        <div class="input-container">
          <div class="input-con">
            <div class="int">
              <label for="firstname">First Name</label>
              <input
                type="text"
                class="input"
                name="firstname"
                v-model="firstname"
                required
              />
            </div>
            <div class="int">
              <label for="lastname">Last Name</label>
              <input
                type="text"
                class="input"
                name="firstname"
                v-model="lastname"
                required
              />
            </div>
          </div>
          <div class="input-con">
            <div class="int">
              <label for="email">Email</label>
              <input
                type="email"
                class="input"
                name="email"
                v-model="email"
                required
              />
            </div>
            <div class="int">
              <label for="date_of_birth">Date of Birth</label>
              <input
                type="date"
                class="input"
                name="date_of_birth"
                v-model="date_of_birth"
                required
              />
            </div>
          </div>
          <div class="input-con">
            <div class="int">
              <label for="address">Address</label>
              <input
                type="text"
                class="input"
                name="address"
                v-model="address"
                required
              />
            </div>
            <div class="int">
              <label for="lastname">University</label>
              <input
                type="text"
                class="input"
                name="university"
                v-model="university"
                required
              />
            </div>
          </div>
          <div class="input-con">
            <div class="int">
              <label for="course_of_study">Course of Study</label>
              <input
                type="text"
                class="input"
                name="course_of_study"
                v-model="course_of_study"
                required
              />
            </div>
            <div class="int">
              <label for="lastname">CGPA</label>
              <input
                type="text"
                class="input"
                name="cgpa"
                v-model="cgpa"
                required
              />
            </div>
          </div>
          <button class="submit" type="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppForm",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app-section {
  font-family: "Lato";
  margin: 50px;
}

.app-title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Lato;
}

.app-image-con {
  width: 100%;
  display: flex;
  justify-content: center;
}
.app-image {
  width: 8%;
}

.app-text {
  font-size: 24px;
  font-style: italic;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: left;
  margin-top: 24px;
}

.app-form-container {
  width: 963px;
  background: #ffffff;
  box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
  border-radius: 8px;
  margin: 15px auto 0;
  padding-bottom: 20px;
}

.app-form-buttons input[type="file"] {
  font-size: 100px;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
}

.app-form-buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 23px;
  position: relative;
  overflow: hidden;
}

.upload-btn {
  width: 211px;
  height: 49.97px;
  border: 1.5px dashed #2b3c4e;
  box-sizing: border-box;
  border-radius: 2.87205px;
  background-color: #ffff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 16px 0;
  font-family: "Lato";
  font-weight: normal;
  font-size: 16px;
  color: #2b3c4e;
  padding: 0 13.97px 0;
}

.input-container {
  width: 90%;
  margin: 0 auto;
}

.input-con {
  display: flex;
  padding-left: 20px;
  width: 100%;
  margin-top: 10px;
}
.int {
  width: 50%;
}
label {
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
  color: #2b3c4e;
}
.input {
  width: 390px;
  height: 48px;
  border: 1.5px solid #2b3c4e;
  border-radius: 4px;
  padding: 10px;
}
.submit {
  display: block;
  height: 50px;
  width: 379px;
  border-radius: 4px;
  margin: 0 auto;
  background-color: #7557d3;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 19px;
  color: white;
  margin-top: 23px;
}
</style>