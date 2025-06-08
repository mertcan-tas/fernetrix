<template>
  <Layout>
    <v-container fluid fill-height>
      <v-row justify="center" align="center">
        <v-col cols="12" md="8" lg="6">
          <v-card class="mx-auto pa-8" elevation="4" rounded="lg">
            <v-card-title class="text-h4 font-weight-bold text-center mb-4">
              Generate Django Secret
            </v-card-title>

            <v-card-text class="text-center mb-4">
              <p class="text-body-1 mb-2">
                If you want to learn best practices of using secrets in Django,
                check out
                <a href="#" class="text-decoration-underline">this post</a>.
              </p>
            </v-card-text>

            <v-card-text>
              <v-text-field
                v-model="displayKey"
                readonly
                outlined
                class="mb-5"
                hide-details
              >
                <template v-slot:append>
                  <v-btn
                  size="40"
                    rounded
                    @click="copyToClipboard"
                    :color="copied ? 'success' : 'primary'"
                  >
                    <v-icon size="18" v-if="copied">mdi-check</v-icon>
                    <v-icon size="18" v-else>mdi-content-copy</v-icon>
                  </v-btn>
                </template>
              </v-text-field>

              <v-checkbox
                v-model="usePrefix"
                label="Include 'django-insecure-' prefix"
                color="primary"
                class="mb-4"
                hide-details
              ></v-checkbox>

              <v-row>
                <v-col cols="12" sm="6">
                  <v-btn-outlined
                    block
                    large
                    color="success"
                    @click="copyToClipboard"
                    :disabled="copied"
                  >
                    <v-icon left class="mr-1">{{
                      copied ? "mdi-check" : "mdi-content-copy"
                    }}</v-icon>
                    {{ copied ? "Copied!" : "Copy" }}
                  </v-btn-outlined>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-btn block large color="primary" @click="generateSecretKey">
                    <v-icon left class="mr-1">mdi-refresh</v-icon>
                    Generate Secret Key
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </Layout>
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
