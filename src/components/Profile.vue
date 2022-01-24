<template>
  <div class="view">
    <div class="header">
      <p class="head">Profiles Setting</p>
      <button class="edit-button">Edit</button>
    </div>
    <div class="upload-container">
      <img src="../assets/account.svg" />
      <input class="upload-link" value="Upload new image" />
      <p class="close-link"><img src="../assets/close.svg" />Remove</p>
    </div>
    <form class="form-view">
      <div class="top-form">
        <div class="short-box">
          <label for="name">Name</label><br />
          <input type="text" id="name" name="name" value="Cameron Williamson" />
        </div>
        <div class="short-box">
          <label for="email">Email</label><br />
          <input
            type="email"
            id="email"
            name="email"
            value="debra.holt@example.com"
          />
        </div>
        <div class="short-box">
          <label for="phoneNumber">Phone number</label><br />
          <input
            type="text"
            id="phone-number"
            name="phoneNumber"
            value="(303) 555-0105"
          />
        </div>
      </div>
      <div class="bottom-form">
        <div class="short-box">
          <label for="country">Country</label>
          <br />
          <select id="country" name="country">
            <option value="australia">Afghanistan</option>
            <option value="canada">Sierra Leone</option>
            <option value="usa">Ghana</option>
          </select>
        </div>
        <div class="long-box">
          <label for="address">Address</label>
          <br />
          <input
            type="text"
            id="address"
            name="address"
            value="3891 Ranchview Dr. Richardson, California 62639"
          />
        </div>
      </div>
      <div class="button">
        <input type="submit" id="save-button" value="Save" />
      </div>
    </form>
  </div>
</template>

<script>
export default {};
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
#name,
#email,
#phone-number,
#country {
  width: 100%;
  outline: none;
  border: none;
  background: rgba(117, 87, 211, 0.4);
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
  background: rgba(117, 87, 211, 0.4);
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