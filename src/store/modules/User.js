import axios from "axios";
import ConstantURL from '@/script/resources/ConstantURL';

const state = {
  users: [],
  user: {},
  userPaging: null
};

const getters = {
  users(state) {
    return state.users;
  },
  user(state) {
    return state.user;
  },
  userPaging(state) {
    return state.userPaging;
  },
};

const mutations = {
  setUsers(state, res) {
    state.users = res;
  },
  setUser(state, res) {
    state.user = res;
  },
  setUserPaging(state, res) {
    state.userPaging = res;
  },
};

const actions = {
  /**
   * Lấy thông tin tất cả người dùng
   * Author: Vũ Đức Giang(2/9/2022)
   */
  async getAllUser({ commit }) {
    try {
      commit("setIsShowLoading", true);
      await axios
        .get(ConstantURL.UserDomain)
        .then((res) => {
          commit("userGroupIDSelected", res.data);
          commit("setIsShowLoading", false);
        })
        .catch((err) => {
          console.error(err);
        });
    } catch (error) {
      console.log(error);
    }
  },

  /**
   * Lấy thông tin tất cả người dùng theo tìm kiếm
   * Author: Vũ Đức Giang(2/9/2022)
   */
   async getPagingUser({ commit }, {pageSize, pageIndex, filter, userGroupID}) {
    try {
        commit("setIsShowLoading", true);
        await axios.get(`${ConstantURL.UserDomain}/Filter`, {
          params: {
              pageSize: pageSize,
              pageIndex: pageIndex,
              filter: filter,
              userGroupID: userGroupID
          }
        })
        .then((res) => {
          if(res.data.Data.length > 0) {
            let str = JSON.stringify(res.data.Data,(k, v) =>  v == "" || v == null ? "-" : v);
            commit("setUsers", JSON.parse(str));
          } else {
            commit("setUsers", res.data.Data);
          }
          commit("setUserPaging", res.data);
          commit("setIsShowLoading", false);
        })
        .catch((err) => {
          console.error(err);
        });
    } catch (error) {
      console.log(error);
    }
  },

  /**
   * Lấy thông tin người dùng theo ID
   * Author: Vũ Đức Giang(2/9/2022)
   */
   async getUserByID({ commit }, userID) {
    try {
      commit("setIsShowLoading", true);
      await axios
        .get(`${ConstantURL.UserDomain}/${userID}`)
        .then((res) => {
          commit("setUser", res.data);
          commit("setIsShowLoading", false);
        })
        .catch((err) => {
          console.error(err);
        });
    } catch (error) {
      console.log(error);
    }
  },
};

export default {
    state, getters, mutations, actions
}
