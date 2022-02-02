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
      isAdmin: false,
      batch: {},
      batches: [],
      info: {},
      user: {},
      assessment: {},
      results: [],
    };
  },
  getters: {
    token(state) {
      return state.token;
    },
    batch(state) {
      return state.batch;
    },
    batches(state) {
      return state.batches;
    },
    user(state) {
      return state.user;
    },
    info(state) {
      return state.info;
    },
    assessment(state) {
      return state.assessment;
    },
    results(state) {
      return state.results;
    },
  },
  mutations: {
    SET_TOKEN(state, payload) {
      state.token = payload;
    },
    SET_ADMIN(state, payload) {
      state.isAdmin = payload;
    },
    SET_BATCH(state, payload) {
      state.batch = payload;
    },
    SET_BATCHES(state, payload) {
      state.batches = payload;
    },
    SET_INFO(state, payload) {
      state.info = payload;
    },
    SET_USER(state, payload) {
      state.user = payload;
    },
    SET_ASSESSMENT(state, payload) {
      state.assessment = payload;
    },
    SET_RESULTS(state, payload) {
      state.results = payload;
    },
  },
  actions: {
    storeToken({ commit }, payload) {
      // console.log(payload);
      commit("SET_TOKEN", payload.token);
      commit("SET_ADMIN", payload.isAdmin);
    },
    storeBatch({ commit }, payload) {
      commit("SET_BATCH", payload);
    },
    storeBatches({ commit }, payload) {
      commit("SET_BATCHES", payload);
    },
    storeInfo({ commit }, payload) {
      commit("SET_INFO", payload);
    },
    storeUser({ commit }, payload) {
      commit("SET_USER", payload);
    },
    storeAssessment({ commit }, payload) {
      commit("SET_ASSESSMENT", payload);
    },
    storeResults({ commit }, payload) {
      commit("SET_RESULTS", payload);
    },
  },
  modules: {},
  plugins: [vuexLocal.plugin],
});

export default store;
