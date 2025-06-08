// stores/fernetKey.js
import { defineStore } from "pinia";

export const useFernetKeyStore = defineStore("fernetKey", {
  state: () => ({
    fernetKey: "gAAAAABhZ0_9QZ1ZK5N2vW8tQr6Y3bX4cT9nH7mF1vE2sA0rQ4wZ8k=",
    copied: false,
  }),

  getters: {
    displayKey: (state) => {
      return state.fernetKey;
    },
  },

  actions: {
    generateFernetKey() {
      // Fernet key 32 byte (256 bit) random data + base64 encode
      const array = new Uint8Array(32);
      crypto.getRandomValues(array);

      // Base64 encode
      const base64Key = btoa(String.fromCharCode.apply(null, array));

      this.fernetKey = base64Key;
      this.copied = false;
    },

    async copyToClipboard() {
      try {
        await navigator.clipboard.writeText(this.displayKey);
        this.copied = true;

        // 3 saniye sonra copied durumunu sıfırla
        setTimeout(() => {
          this.copied = false;
        }, 3000);
      } catch (err) {
        console.error("Kopyalama başarısız:", err);
        this.copied = true;
        setTimeout(() => {
          this.copied = false;
        }, 3000);
      }
    },

    // Manual olarak fernet key set etme
    setFernetKey(key) {
      this.fernetKey = key;
      this.copied = false;
    },

    // Reset işlemi
    resetToDefault() {
      this.fernetKey =
        "gAAAAABhZ0_9QZ1ZK5N2vW8tQr6Y3bX4cT9nH7mF1vE2sA0rQ4wZ8k=";
      this.copied = false;
    },

    // Key validation
    isValidFernetKey(key) {
      try {
        // Fernet key base64 encoded 32 bytes olmalı
        const decoded = atob(key);
        return decoded.length === 32;
      } catch (e) {
        return false;
      }
    },
  },
});
