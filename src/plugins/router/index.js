import { createRouter, createWebHistory } from "vue-router";
import allAppRoutes from "@/routes/index.js";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: allAppRoutes,
});

export default router;
