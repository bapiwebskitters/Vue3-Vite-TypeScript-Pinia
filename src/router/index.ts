// src/router/index.ts
import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
  RouteLocationNormalized,
  NavigationGuardNext,
} from "vue-router";
import Home from "../pages/Home.vue";
import AboutUs from "../pages/AboutUs.vue";
import ContactUs from "../pages/ContactUs.vue";
import Login from "../pages/auth/Login.vue";
import Register from "../pages/auth/Register.vue";
import DefaultLayout from "../layouts/DefaultLayout.vue";
import Profile from "../pages/Profile.vue";
import { useAuthStore } from "../store/auth";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      { path: "", name: "Home", component: Home },
      { path: "about", name: "AboutUs", component: AboutUs },
      { path: "contact", name: "ContactUs", component: ContactUs },
      { path: "login", name: "Login", component: Login },
      { path: "register", name: "Register", component: Register },
      {
        path: "profile",
        name: "Profile",
        component: Profile,
        beforeEnter: (
          _to: RouteLocationNormalized,
          _from: RouteLocationNormalized,
          next: NavigationGuardNext
        ) => {
          const authStore = useAuthStore();
          if (authStore.isAuthenticated()) {
            next();
          } else {
            next({ name: "Login" });
          }
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
