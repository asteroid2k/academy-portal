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
    openNav() {
      document.getElementById("mySidepanel").style.width = "290px";
    },

    closeNav() {
      document.getElementById("mySidepanel").style.width = "0";
    },
  },
};
</script>

<template>
  <div class="entire-page">
    <div class="sidebar" id="mySidepanel">
      <button class="close-btn" v-on:click="closeNav()">
        <img src="../assets/nav-close.svg" />
      </button>
      <div class="user-display">
        <figure class="avatar">
          <img src="../assets/avatar1.png" />
        </figure>
        <p class="heading">Jane Doe</p>
        <p class="body">doe@enyata.com</p>
      </div>
      <div class="wrapper">
        <div v-for="(data, index) in routes" :key="index">
          <router-link class="links-container" :to="{ name: data.routeUrl }">
            <div class="image-container">
              <img :src="imgUrl(data.image)" class="icons" />
            </div>
            <p class="link">{{ data.routeName }}</p></router-link
          >
        </div>
        <router-link class="links-container" id="logout" to="/logout">
          <div class="image-container">
            <img src="../assets/logout.svg" class="icons" />
          </div>
          <p class="link">Logout</p></router-link
        >
      </div>
    </div>
  </div>
  <div class="top-nav">
    <button class="open-btn" v-on:click="openNav()">☰</button>
    <button class="notif">
      <span class="not-num">1</span>
      <img src="../assets/notification.svg" />
    </button>
  </div>
  <!-- </div> -->
</template>

<style scoped>
.entire-page {
  width: 100%;
  margin: 0px 0px 0px 290px;
}
.top-nav,
.close-btn {
  display: none;
}
.wrapper {
  width: 290px;
  height: 300px;
  overflow-y: auto;
}
.sidebar {
  width: 290px;
  height: 100%;
  z-index: 1;
  top: 0;
  background: #ffffff;
  position: fixed;
  left: 0;
  box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
  margin: 0;
  padding: 0;
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
  width: 290px;
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

@media screen and (max-width: 992px) {
  .top-nav {
    display: flex;
    justify-content: space-between;
    position: fixed;
    z-index: 100px;
    padding: 20px;
    top: 0;
    width: 100%;
    background: #ffffff;
    box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
  }

  .not-num {
    background: var(--primary);
    position: relative;
    top: 10px;
    left: 10px;
    padding: 5px 7px;
    border-radius: 50%;
    font-size: 10px;
    color: #fff;
  }
  .open-btn {
    color: #2b3c4e;

    font-size: 30px;
  }
  .close-btn {
    display: block;
    font-size: 30px;
    position: absolute;
    top: 20px;
    left: 250px;
  }
  .sidebar {
    width: 0;
    height: 100%;
    z-index: 100;
    top: 0;
    left: 0;
    overflow: hidden;
    transition: 0.5s;
  }
  .avatar {
    width: 60px;
    height: 60px;
  }
  .user-display {
    padding: 50px 0px;
  }
}
</style>
