<template>
  <div class="side bar">
    <div class="user-display"></div>
    <div class="links-container">
      <div class="links-div">
        <img id="active-icon" src="../assets/dashboard-icon.png" />
        <router-link class="link" id="active" to="/"> Dashboard</router-link>
      </div>
      <div class="links-div">
        <img src="../assets/assessment-icon.png" />
        <router-link class="link" to="/assessment">Assessment</router-link>
      </div>
      <div class="links-div">
        <img src="../assets/logout-icon.png" />
        <router-link class="link" to="/logout">Logout</router-link>
      </div>
    </div>
  </div>
</template>