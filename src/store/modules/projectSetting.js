/* jshint esversion:6 */
import { createStore } from "vuex";
import store from "../index";
import projectSetting from "@/settings/projectSetting";

const {
  navMode,
  navTheme,
  headerSetting,
  showFooter,
  menuSetting,
  multiTabsSetting,
  crumbsSetting,
  permissionMode,
  isPageAnimate,
  pageAnimateType,
} = projectSetting;

const useProjectSettingStore = createStore({
  state: () => ({
    navMode: navMode,
    navTheme,
    headerSetting,
    showFooter,
    menuSetting,
    multiTabsSetting,
    crumbsSetting,
    permissionMode,
    isPageAnimate,
    pageAnimateType,
  }),
  getters: {
    getNavMode() {
      return this.navMode;
    },
    getNavTheme() {
      return this.navTheme;
    },
    getHeaderSetting() {
      return this.headerSetting;
    },
    getShowFooter() {
      return this.showFooter;
    },
    getMenuSetting() {
      return this.menuSetting;
    },
    getMultiTabsSetting() {
      return this.multiTabsSetting;
    },
    getCrumbsSetting() {
      return this.multiTabsSetting;
    },
    getPermissionMode() {
      return this.permissionMode;
    },
    getIsPageAnimate() {
      return this.isPageAnimate;
    },
    getPageAnimateType() {
      return this.pageAnimateType;
    },
  },
  actions: {
    setNavTheme(value) {
      this.navTheme = value;
    },
  },
});
// 需要在设置之外使用
function useProjectSettingStoreWithOut() {
  return useProjectSettingStore(store);
}
export default useProjectSettingStoreWithOut;
