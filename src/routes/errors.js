const errorRoutes = [
  {
    path: "/:catchAll(.*)",
    name: "notfound",
    component: () => import("@/views/errors/Error404.vue"),
  },
];

export default errorRoutes;