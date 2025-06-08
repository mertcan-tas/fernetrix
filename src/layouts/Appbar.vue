<template>
  <v-app-bar elevation="0" class="border-b-thin	">
    <template v-slot:prepend>
      <v-app-bar-nav-icon color="white" size="40" class="border-thin ml-3" @click="handleDrawerToggle"></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title class="no-select">Fernetrix</v-app-bar-title>
  </v-app-bar>
</template>

<script>
import { useUIStore } from "@/stores/ui/ui-store.js";

export default {
  name: "BaseAppbar",
  data() {
    return {
      uiStore: useUIStore(),
    };
  },
  computed: {
    isMobile() {
      return this.$vuetify.display.mobile;
    },
  },
  methods: {
    handleDrawerToggle() {
      try {
        this.uiStore.toggleDrawer();
      } catch (error) {
        console.error("Drawer toggle error:", error);
      }
    },
  },
};
</script>
