/* jshint esversion:6 */
import designSetting from "@/settings/designSetting";

const { darkTheme, appTheme, appThemeList } = designSetting;

export default {
  namespaced: true,
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
};
