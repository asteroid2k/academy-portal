import { createStore } from "vuex";
import VuexPersistence from "vuex-persist";

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

// Create a new store instance.
const store = createStore({
  state() {
    return {
      token: "",
    };
  },
  getters: {
    token(state) {
      return state.token;
    },
  },
  mutations: {
    SET_TOKEN(state, payload) {
      state.token = payload;
    },
  },
  actions: {
    storeToken({ commit }, payload) {
      commit("SET_TOKEN", payload);
    },
  },
  modules: {},
  plugins: [vuexLocal.plugin],
});

export default store;
