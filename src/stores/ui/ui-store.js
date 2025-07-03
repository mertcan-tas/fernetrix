import { defineStore } from "pinia";

export const useUIStore = defineStore("ui", {
  state: () => ({
    isDrawerOpen: false,
  }),
  getters: {
    getDrawerState: (state) => state.isDrawerOpen,
  },
  actions: {
    toggleDrawer() {
      this.isDrawerOpen = !this.isDrawerOpen;
    },
    openDrawer() {
      this.isDrawerOpen = true;
    },
    closeDrawer() {
      this.isDrawerOpen = false;
    },
    setDrawerOpen(value) {
      this.isDrawerOpen = value;
    },
    forceDrawerOpen() {
      this.isDrawerOpen = true;
    },
  },
});
