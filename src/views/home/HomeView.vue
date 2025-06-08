<template>
  <Layout></Layout>
</template>

<script>
import { useDjangoSecretStore } from "@/stores/django/secret-gen.js";
import { computed } from "vue";

export default {
  name: "DjangoSecretGenerator",

  setup() {
    const store = useDjangoSecretStore();

    return {
      displayKey: computed(() => store.displayKey),
      usePrefix: computed({
        get: () => store.usePrefix,
        set: (value) => store.togglePrefix(),
      }),
      copied: computed(() => store.copied),
      copyToClipboard: () => store.copyToClipboard(),
      generateSecretKey: () => store.generateSecretKey(),
    };
  },
};
</script>
