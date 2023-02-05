import { createStore } from "vuex";
import User from "./modules/User";

const store = createStore({
  state() {
    return {
      isShowLoading: false,
    };
  },
  getters: {
    isShowLoading(state) {
      return state.isShowLoading;
    },
  },
  mutations: {
    setIsShowLoading(state, res) {
      state.isShowLoading = res;
    },
  },
  actions: {
    setIsShowLoading({ commit }, res) {
      commit("setIsShowLoading", res);
    },
  },
  modules: {
    User,
  },
});

export default store;
