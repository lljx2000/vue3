/* jshint esversion:6 */
import { createStore } from "vuex";
import store from "../index";
import designSetting from "@/settings/designSetting";

const { darkTheme, appTheme, appThemeList } = designSetting;

const useDesignSettingStore = createStore({
  state: () => ({
    darkTheme,
    appTheme,
    appThemeList,
  }),
  getters: {
    getDarkTheme() {
      return this.darkTheme;
    },
    getAppTheme() {
      return this.appTheme;
    },
    getAppThemeList() {
      return this.appThemeList;
    },
  },
  actions: {},
});
// 需要在设置之外使用
function useDesignSettingWithOut() {
  return useDesignSettingStore(store);
}

export default useDesignSettingWithOut;
