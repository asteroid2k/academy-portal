import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/signin",
    name: "Signin",
    component: () => import("../views/Applicant/Signin.vue"),
  },
  {
    path: "/signup",
    name: "Signup",
    component: () => import("../views/Applicant/Signup.vue"),
  },
  {
    path: "/applicationform",
    name: "Application Form",
    component: () => import("../views/Applicant/Signup.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
