<script>
export default {
  name: "Sidebar",
  props: {
    routes: Array,
  },
  methods: {
    imgUrl(img) {
      return new URL(`../assets/${img}`, import.meta.url);
    },
  },
};
</script>

<template>
  <div class="entire-page">
    <div class="sidebar">
      <div class="user-display">
        <figure class="avatar">
          <img src="../assets/avatar1.png" />
        </figure>
        <p class="heading">Jane Doe</p>
        <p class="body">doe@enyata.com</p>
      </div>
      <div></div>
      <div class="links-container" v-for="(data, index) in routes" :key="index">
        <div class="image-container">
          <img :src="imgUrl(data.image)" class="icons" />
        </div>
        <router-link class="link" :to="{ name: data.routeUrl }">{{
          data.routeName
        }}</router-link>
      </div>
      <div id="logout" class="links-container">
        <div class="image-container">
          <img src="../assets/logout.svg" class="icons" />
        </div>
        <router-link class="link" to="/logout">Logout</router-link>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<style scoped>
.sidebar {
  width: 290px;
  height: 1024px;
  box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
  margin: 0;
  padding: 0;
  overflow-y: auto;
  color: var(--accent-color);
}
.avatar {
  width: 80px;
  height: 80px;
  margin: auto;
}
.user-display {
  background-color: var(--primary);
  text-align: center;
  padding: 70px 0px;
  margin-bottom: 28px;
  width: inherit;
}

.heading {
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.02em;
  margin: 13px 0px 5px;
}

.body {
  font-style: italic;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.02em;
}

.link {
  font-style: normal;
  font-size: 16px;
  line-height: 19px;
  text-align: left;

  /* identical to box height */
  color: #2b3c4e;
}

.links-container {
  display: flex;
  align-items: center;
  padding: 20px 25px;
  text-align: left;
  border-left: 4px solid white;
}
.links-container:hover {
  border-left: 4px solid var(--primary);
  font-weight: bold;
}

.image-container {
  width: 25px;
  height: fit-content;
  margin-right: 20px;
  height: fit-content;
}

#logout {
  margin: 100px 0px 70px;
}
</style>
