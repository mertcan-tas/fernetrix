const generatorRoutes = [
  {
    path: "/django-secret-key-generator",
    name: "django-secret",
    component: () => import("@/views/gens/django/DjangoSecretGen.vue"),
  },
];

export default generatorRoutes;
