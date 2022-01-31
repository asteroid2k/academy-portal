<script>
import Profile from "../../components/Profile.vue";
import Settings from "../../components/Settings.vue";

export default {
  props: { instance: Function },

  data: function () {
    return {
      tabs: ["Profile", "Settings"],
      selected: "Profile",
    };
  },
  components: {
    Profile,
    Settings,
  },
};
</script>
<template>
  <div class="entire-page">
    <div class="main-frame">
      <p class="heading">Profiles and Settings</p>
      <p class="description">
        Helps you set admin profile and give other users permissions
      </p>
      <div class="component-view">
        <div class="buttons">
          <button
            v-for="tab in tabs"
            :key="tab"
            @click="selected = tab"
            :class="['tab-btn', { active: selected === tab }]"
          >
            {{ tab }}
          </button>
        </div>
        <component :instance="instance" :is="selected"></component>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}
.main-frame {
  width: 100%;
}
.heading {
  font-style: normal;
  font-weight: 300;
  font-size: 44px;
  line-height: 52px;
  letter-spacing: -0.02em;
  margin-bottom: 15px;
  color: #2b3c4e;
}
.description {
  font-style: italic;
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 60px;
  line-height: 19px;
}
.tab-btn {
  padding: 20px 60px;
  background: #ffffff;
  cursor: pointer;
  outline: none;
}

.active,
.tab-btn:hover {
  background: rgba(117, 87, 211, 0.1);
}

.tab {
  border: 1px solid #ccc;
  padding: 10px;
}

@media screen and (max-width: 992px) {
  .tab-btn {
    padding: 20px 40px;
  }
  .buttons {
    display: flex;
    justify-content: center;
    overflow: hidden;
  }
}
</style>
