import { createRouter, createWebHistory } from "vue-router";
import allAppRoutes from "@/routes/index.js";

const router = createRouter({
  history: createWebHistory('/fernetrix/'),
  routes: allAppRoutes,
});

export default router;
