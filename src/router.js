import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Employers from "./views/Employers.vue";
import Jobseekers from "./views/Jobseekers.vue";
import Contacts from "./views/Contacts.vue";
import AdminLogin from "./views/AdminLogin.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/employers",
      name: "employers",
      component: Employers
    },
    {
      path: "/jobseekers",
      name: "jobseekers",
      component: Jobseekers
    },
    {
      path: "/contacts",
      name: "contacts",
      component: Contacts
    },
    {
      path: "/admin-login",
      name: "adminLogin",
      component: AdminLogin
    }
  ]
});
