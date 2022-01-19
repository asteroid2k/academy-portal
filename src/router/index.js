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
    path: "/assessment",
    name: "Assessment",
    component: () => import("../views/Applicant/Assessment.vue"),
  },
  {
    path: "/forgot",
    name: "Forgot",
    component: () => import("../views/Forgot.vue"),
  },
  {
    path: "/apply/:id",
    name: "Apply",
    component: () => import("../views/Applicant/ApplyForm.vue"),
  },
  // ADMIN ROUTES
  {
    path: "/admin/signin",
    name: "AdminSignin",
    component: () => import("../views/admin/Signin.vue"),
  },
  // NOT FOUND
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
