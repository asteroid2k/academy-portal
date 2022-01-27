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
    };
  },
  getters: {
    token(state) {
      return state.token;
    },
    batch(state) {
      return state.batch;
    },
  },
  mutations: {
    SET_TOKEN(state, payload) {
      state.token = payload;
    },
    SET_BATCH(state, payload) {
      state.batch = payload;
    },
  },
  actions: {
    storeToken({ commit }, payload) {
      commit("SET_TOKEN", payload);
    },
    storeBatch({ commit }, payload) {
      commit("SET_BATCH", payload);
    },
  },
  modules: {},
  plugins: [vuexLocal.plugin],
});

export default store;
