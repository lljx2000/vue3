/* jshint esversion:6 */
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  // {
  //   path: "/",
  //   name: "home",
  //   component: HomeView,
  // },
  {
    path: "/login",
    name: "login",
    component: () => import("../components/LoginPage.vue"),
  },
  {
    path: "/registration",
    name: "registration",
    component: () => import("../components/RegistrationPage.vue"),
  },
  {
    path: "/404",
    name: "404",
    component: () => import("../view/404Page.vue"),
  },
  {
    path: "/info",
    name: "info",
    component: () => import("../view/infoPage.vue"),
  },
  {
    path: "/user",
    name: "user",
    component: () => import("../view/user/UserAdmin.vue"),
  },
  {
    path: "/foot",
    name: "foot",
    component: () => import("../layout/components/Header/ProjectSetting.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
