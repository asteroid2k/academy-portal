import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import store from "../store";
import { notyf } from "../helpers.js";

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
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("../views/Applicant/Dashboard.vue"),
    children: [
      {
        path: "/dashboard",
        name: "UserDashboard",
        component: () => import("../views/Applicant/UserDashboard.vue"),
      },
      {
        path: "/assessment",
        name: "Assessment",
        component: () => import("../views/Applicant/Assessment.vue"),
      },
      {
        path: "/sucess",
        name: "Success",
        component: () => import("../components/Success.vue"),
      },

      {
        path: "/apply/:id",
        name: "Apply",
        component: () => import("../views/Applicant/ApplyForm.vue"),
        //redirect to login if user is not signed in
        beforeEnter: (to, from, next) => {
          if (!store.state.token) {
            notyf.open({
              type: "info",
              message: "You are not logged in",
            });
            next({ name: "Signin" });
          } else {
            next();
          }
        },
      },
    ],
  },

  {
    path: "/admin-dashboard",
    name: "AdminDashboard",
    component: () => import("../views/Admin/AdminDashboard.vue"),
    children: [
      {
        path: "/admin-dashboard",
        name: "Admin",
        component: () => import("../views/Admin/Dashboard.vue"),
      },
      {
        path: "/admin-dashboard/application",
        name: "CreateApplication",
        component: () => import("../views/Admin/Dashboard.vue"),
      },
      {
        path: "/admin-dashboard/assessment",
        name: "CreateAssessment",
        component: () => import("../views/Admin/CreateAssessment.vue"),
      },
    ],
  },
  {
    path: "/admin-login",
    name: "AdminLogin",
    component: () => import("../views/Admin/AdminLogin.vue"),
  },
  {
    path: "/logout",
    name: "Logout",
    component: () => import("../views/Logout.vue"),
  },
  {
    path: "/forgot",
    name: "Forgot",
    component: () => import("../views/Forgot.vue"),
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
