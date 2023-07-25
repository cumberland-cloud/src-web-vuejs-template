import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Cafe Mark",
      component: Home,
    },
    {
      path: "/breakfast",
      name: "Breakfast Menu",
      component: () => import("../views/Breakfast.vue"),
    },
    {
      path: "/lunch",
      name: "Lunch Menu",
      component: () => import("../views/Lunch.vue"),
    },
    {
      path: "/drinks",
      name: "Drink Menu",
      component: () => import("../views/Drinks.vue"),
    },
    {
      path: "/cart",
      name: "breakfast",
      component: () => import("../views/ShoppingCart.vue"),
    }
  ],
});

export default router;
