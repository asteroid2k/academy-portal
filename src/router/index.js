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
    component: () => import("../views/Applicant/ApplicationForm.vue"),
  },
  {
    path: "/forgotpassword",
    name: "Forgot Password",
    component: () => import("../views/Applicant/ForgotPassword.vue"),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("../views/Applicant/Dashboard.vue"),
  },
  {
    path: "/assessment",
    name: "Assessment",
    component: () => import("../views/Applicant/Assessment.vue"),
  },
  {
    path: "/admin-dashboard",
    name: "AdminDashboard",
    component: () => import("../views/Admin/AdminDashboard.vue"),
  },
  {
    path: "/logout",
    name: "Logout",
    component: () => import("../views/Logout.vue"),
    path: "/forgot",
    name: "Forgot",
    component: () => import("../views/Forgot.vue"),
  },
  {
    path: "/apply",
    name: "Apply",
    component: () => import("../views/Applicant/ApplyForm.vue"),
  },
  // ADMIN ROUTES
  {
    path: "/admin/signin",
    name: "AdminSignin",
    component: () => import("../views/admin/Signin.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
