import Vue from "vue";
import VueRouter from "vue-router";
import Login from '../components/Login.vue'
import Recipes from '../components/Recipes.vue'
import Signup from '../components/Signup.vue'
Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    component: Login
  },
  {
    path: "/",
    component: Recipes
  },
  {
    path: "/signup",
    component: Signup
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
