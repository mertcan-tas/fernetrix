<template>
  <v-navigation-drawer
    v-model="isDrawerOpenComputed"
    :permanent="!isMobile"
    :temporary="isMobile"
    app
    width="280"
    :model-value="isDrawerOpenComputed"
  >
    <DrawerRouteList></DrawerRouteList>
  </v-navigation-drawer>
</template>

<script>
import { useUIStore } from "@/stores/ui/ui-store.js";

export default {
  name: "NavigationDrawer",
  data() {
    return {
      uiStore: useUIStore(),
    };
  },
  mounted() {
    this.uiStore.forceDrawerOpen();
  },
  computed: {
    isMobile() {
      return this.$vuetify.display.mobile;
    },
    isDrawerOpenComputed: {
      get() {
        return this.uiStore.isDrawerOpen;
      },
      set(value) {
        console.log("Drawer value changing to:", value);
        this.uiStore.setDrawerOpen(value);
      },
    },
  },
};
</script>
