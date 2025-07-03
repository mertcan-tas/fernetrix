import { createRouter, createWebHistory } from "vue-router";
import allAppRoutes from "@/routes/index.js";

const router = createRouter({
  history: createWebHistory('/'),
  routes: allAppRoutes,
});

export default router;
