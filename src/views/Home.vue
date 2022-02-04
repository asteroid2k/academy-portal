<script>
import { mapGetters } from "vuex";
import HomePageCards from "../components/HomePageCards.vue";

export default {
  mounted() {},
  props: { instance: Function },
  components: { HomePageCards },

  data() {
    return {};
  },
  computed: {
    ...mapGetters(["batch"]),
    isDisabled() {
      return !("slug" in this.batch);
    },
  },
  methods: {},
};
</script>

<template>
  <div class="entire-page">
    <div class="navbar">
      <figure class="logo">
        <img src="../assets/logo.png" />
      </figure>
      <input id="toggle" type="checkbox" />
      <label for="toggle" class="hamburger">
        <div class="top-bun"></div>
        <div class="meat"></div>
        <div class="bottom-bun"></div>
      </label>
      <div class="nav">
        <div class="nav-wrapper">
          <nav>
            <router-link class="hover:text-primary" :to="{ name: 'Home' }"
              >Home</router-link
            >
            <router-link class="hover:text-primary" :to="{ name: 'Signin' }"
              >Sign In</router-link
            >
            <router-link :to="{ name: 'Signup' }">
              <button
                class="
                  reg-button
                  disabled:cursor-not-allowed disabled:opacity-60
                "
                v-show="!isDisabled"
              >
                Register Now
              </button>
            </router-link>
          </nav>
        </div>
      </div>

      <figure class="floating-image"><img src="../assets/nav-bg.png" /></figure>
    </div>
    <!--MainPage-->
    <div class="section1">
      <div class="section1-text">
        <p class="s1-heading">
          Ever had a Dream of Becoming a Software
          <span class="higlighted-text">Engineer?</span>
        </p>
        <p class="sub-heading">
          Join enyata academy today and bring your long awaiting dream to
          reality.
        </p>
        <router-link to="/signup">
          <button
            class="button disabled:cursor-not-allowed disabled:opacity-60"
            v-show="!isDisabled"
          >
            Register now
          </button>
        </router-link>
      </div>
      <figure class="section1-image">
        <img src="../assets/side-image.png" />
      </figure>
    </div>
    <div class="section2">
      <div class="s2-heading">
        <img src="../assets/dash.png" />
        <p>Why us</p>
      </div>
      <HomePageCards />
    </div>
  </div>
  <div class="bottomnav">
    <p class="copyright">Copyright © Enyata 2021</p>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
  font-family: Poppins;
}

.entire-page {
  margin: 70px 70px 0px;
}
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  width: 148px;
  height: 28px;
}

nav a {
  margin: 0px 20px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
}
#toggle {
  display: none;
}
.reg-button {
  border: 1px solid rgba(117, 87, 211, 0.4);
  border-radius: 2px;
  color: var(--primary);
  padding: 12px;
}
.floating-image {
  position: absolute;
  top: 0px;
  right: 0px;
  width: 485px;
  height: 300px;
  z-index: -1;
}

/*MainPage*/
/*Section 1*/

.section1 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 100px 0px;
}
.section1-text {
  width: 633px;
}
.s1-heading {
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 57px;
  letter-spacing: 0.035em;
  color: var(--text-color);
}
.higlighted-text {
  color: var(--primary);
}
.sub-heading {
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0.02em;
  color: var(--sub-text-color);
  margin: 25px 0px;
}

.section1-image img {
  width: 585px;
}

.button {
  border: 1px solid var(--primary);
  background: var(--primary);
  padding: 12px 24px;
  color: var(--accent-color);
}
.button:hover {
  border: 1px solid var(--primary);
  background: var(--accent-color);
  color: var(--primary);
  transition: all 0.5s ease-out;
}
.reg-button:hover {
  background-color: var(--primary);
  color: var(--accent-color);
  transition: all 0.5s ease-in-out;
}
/*Section 2*/
.s2-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 150px;
  margin-bottom: 40px;
}
.s2-heading img {
  width: 34px;
  height: 2px;
}

.s2-heading p {
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 140%;
  /* identical to box height, or 34px */
  letter-spacing: 0.01em;
}

/*Footer*/
.bottomnav {
  background: var(--primary);
  padding: 55px;
  text-align: center;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 156%;
  /* identical to box height, or 22px */

  letter-spacing: 0.01em;

  color: var(--accent-color);
}

@media screen and (max-width: 992px) {
  /*Navigation*/
  .entire-page {
    margin: 30px;
  }
  #toggle {
    display: none;
  }
  .logo {
    width: 110px;
    height: 20px;
    align-content: center;
  }

  /**
  Hamburger
**/
  .hamburger {
    z-index: 5;
  }

  .hamburger div {
    width: 20px;
    height: 2px;
    border-radius: 3px;
    background-color: var(--primary);
    margin: 3px;
    transition: all 0.3s ease-in-out;
  }

  /**
Nav Styles
**/
  .nav {
    position: fixed;
    height: 100%;
    background-color: var(--accent-color);
    top: -100%;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    transition: all 0.3s ease-in-out;
  }
  .nav-wrapper {
    position: relative;
    overflow: hidden;
    margin: 70px 0px;
  }
  nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    overflow: hidden;
    text-align: center;
  }
  nav a {
    position: relative;
    text-decoration: none;
    color: var(--primary);
    display: inline-block;
    transition: color 0.2s ease-in-out;
    letter-spacing: 1px;
    margin: 10px 0px;
  }

  /**
Animations
**/
  #toggle:checked + .hamburger .top-bun {
    transform: rotate(-45deg);
    margin-top: 25px;
  }
  #toggle:checked + .hamburger .bottom-bun {
    opacity: 0;
    transform: rotate(45deg);
  }
  #toggle:checked + .hamburger .meat {
    transform: rotate(45deg);
    margin-top: -5px;
  }

  #toggle:checked + .hamburger + .nav {
    top: 0;
    transform: scale(1);
  }

  .reg-button {
    width: 152px;
    margin: 10px auto;
  }

  /*Section 1 */
  .section1 {
    margin: 50px 0px;
  }
  .floating-image {
    display: none;
  }
  .section1-text {
    width: 100%;
    text-align: center;
  }
  .s1-heading {
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    letter-spacing: normal;
    line-height: normal;
    color: var(--text-color);
  }
  .sub-heading {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;
    letter-spacing: 0.02em;
    color: var(--sub-text-color);
    margin: 15px 0px;
  }
  .section1-image img {
    display: none;
  }

  /*Section 2*/
  .s2-heading {
    width: 100%;
    justify-content: center;
  }
  .s2-heading img {
    width: 20px;
    margin-right: 10px;
  }

  .s2-heading p {
    font-size: 18px;
  }

  .bottomnav {
    padding: 30px;
    font-size: 12px;
  }
}
</style>
