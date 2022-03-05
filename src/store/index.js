/* jshint esversion:6 */
import { createStore } from "vuex";
import DesignSetting from "./modules/designSetting";
import ProjectSetting from "./modules/projectSetting";
export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    DesignSetting,
    ProjectSetting,
  },
});
