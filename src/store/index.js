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
      batch: {},
      user: {},
    };
  },
  getters: {
    token(state) {
      return state.token;
    },
    batch(state) {
      return state.batch;
    },
    user(state) {
      return state.user;
    },
  },
  mutations: {
    SET_TOKEN(state, payload) {
      state.token = payload;
    },
    SET_BATCH(state, payload) {
      state.batch = payload;
    },
    SET_USER(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    storeToken({ commit }, payload) {
      commit("SET_TOKEN", payload);
    },
    storeBatch({ commit }, payload) {
      commit("SET_BATCH", payload);
    },
    storeUser({ commit }, payload) {
      commit("SET_USER", payload);
    },
  },
  modules: {},
  plugins: [vuexLocal.plugin],
});

export default store;
