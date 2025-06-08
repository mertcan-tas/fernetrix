<template>
  <v-list nav density="compact">
    <SpaceMenu></SpaceMenu>

    <template v-for="item in menuItems" :key="item.name">
      <v-list-item
        :to="{ name: item.name }"
        link
        class="py-2 px-3 mb-3 no-select"
      >
        <v-list-item-title class="d-flex align-center text-subtitle-2">
          <v-icon class="mr-4" :icon="item.icon"></v-icon>
          <span>{{ item.title }}</span>
        </v-list-item-title>
      </v-list-item>
    </template>
  </v-list>
</template>

<script>
import { useUIStore } from "@/stores/ui/ui-store.js";

export default {
  name: "DrawerRouterList",
  data() {
    return {
      uiStore: useUIStore(),
      routes: [
        {
          name: "django-secret",
          icon: "mdi-key-variant",
          title: "Django Secret Generator",
        },
        {
          name: "fernet",
          icon: "mdi-key-variant",
          title: "Fernet Generator",
        },
      ],
    };
  },
  computed: {
    isMobile() {
      return this.$vuetify.display.mobile;
    },

    isDrawerOpen() {
      return this.uiStore.isDrawerOpen;
    },

    menuItems() {
      return this.routes.map((route) => ({
        name: route.name,
        icon: route.icon,
        title: route.title,
      }));
    },
  },
};
</script>
