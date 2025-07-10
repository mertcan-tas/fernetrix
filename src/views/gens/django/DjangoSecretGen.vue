<template>
  <Layout>
    <v-container fluid fill-height>
      <v-row justify="center" align="center">
        <v-col cols="12" md="10" lg="8">
          <v-card class="mx-auto pa-8" elevation="4" rounded="xl">
            <v-card-title class="text-h4 font-weight-bold text-center mb-4">
              Generate Django Secret Key
            </v-card-title>

            <v-alert
              type="info"
              variant="tonal"
              class="mb-6"
              icon="mdi-information-outline"
            >
              <div class="text-body-2">
                <strong>Django Secret Key</strong> is critical for your
                application's security. This key is used for cryptographic
                signing and encryption operations.
              </div>
            </v-alert>

            <v-card-text class="text-center mb-4">
              <p class="text-body-1 mb-2">
                Learn more about Django security and secret key management
                below.
              </p>
            </v-card-text>

            <v-card-text>
              <v-text-field
                v-model="displayKey"
                readonly
                outlined
                class="mb-5"
                hide-details
                placeholder="Click 'Generate Secret Key' to create a new secret key"
                label="Django Secret Key"
              >
                <template v-slot:append>
                  <v-btn
                    size="40"
                    rounded
                    @click="copyToClipboard"
                    :color="copied ? 'success' : 'primary'"
                    :disabled="!secretKey"
                  >
                    <v-icon size="18" v-if="copied">mdi-check</v-icon>
                    <v-icon size="18" v-else>mdi-content-copy</v-icon>
                  </v-btn>
                </template>
              </v-text-field>

              <v-checkbox
                v-model="usePrefix"
                color="primary"
                class="mb-4"
                hide-details
              >
                <template v-slot:label>
                  <div class="d-flex align-center">
                    <span class="mr-2">Include 'django-insecure-' prefix</span>
                    <v-tooltip bottom>
                      <template v-slot:activator="{ props }">
                        <v-icon v-bind="props" size="16" color="grey">
                          mdi-help-circle-outline
                        </v-icon>
                      </template>
                      <span
                        >This prefix tells Django that the key is for
                        development purposes</span
                      >
                    </v-tooltip>
                  </div>
                </template>
              </v-checkbox>

              <v-row>
                <v-col cols="12" sm="6">
                  <v-btn
                    block
                    large
                    color="success"
                    variant="outlined"
                    @click="copyToClipboard"
                    :disabled="copied || !secretKey"
                  >
                    <v-icon left class="mr-1">{{
                      copied ? "mdi-check" : "mdi-content-copy"
                    }}</v-icon>
                    {{ copied ? "Copied!" : "Copy to Clipboard" }}
                  </v-btn>
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

          <v-card class="mt-6" elevation="0" rounded="xl">
            <v-card-title class="text-h5 d-flex align-center mb-4">
              <v-icon color="info" class="mr-2">mdi-book-open-variant</v-icon>
              About Django Secret Keys
            </v-card-title>
            <v-card-text>
              <v-expansion-panels
                variant="accordion"
                class="mb-4"
                elevation="0"
              >
                <v-expansion-panel>
                  <v-expansion-panel-title>
                    <div class="d-flex align-center">
                      <v-icon class="mr-2" color="primary"
                        >mdi-help-circle</v-icon
                      >
                      <strong>What's a "secret key"?</strong>
                    </div>
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    <p class="text-body-2 mb-3">
                      Django's <code>SECRET_KEY</code> is the setting used as
                      the basis for secret generation and signing. It's used to
                      generate session keys, password reset tokens, and any
                      other cryptographic signing done by Django.
                    </p>
                    <p class="text-body-2">
                      For the safety and security of a Django application, this
                      <strong>must</strong> be kept as secret as possible.
                      Exposure of this key compromises many of the security
                      protections Django puts in place.
                    </p>
                  </v-expansion-panel-text>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-title>
                    <div class="d-flex align-center">
                      <v-icon class="mr-2" color="success">mdi-cog</v-icon>
                      <strong>How does this generator work?</strong>
                    </div>
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    <p class="text-body-2 mb-3">
                      This generator closely follows Django's implementation for
                      maximum compatibility. Django's keys are 50 characters by
                      default, using the same character set as Django's built-in
                      generator.
                    </p>
                    <p class="text-body-2 mb-3">
                      Secrets are generated entirely in your browser using the
                      <code>WebCrypto</code> API, ensuring security without
                      sending data to any server. The generation process avoids
                      modulo bias by using proper random indexing.
                    </p>
                    <p class="text-body-2">
                      Each character is randomly selected from the valid
                      character set and concatenated to form the final
                      50-character key.
                    </p>
                  </v-expansion-panel-text>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-title>
                    <div class="d-flex align-center">
                      <v-icon class="mr-2" color="warning"
                        >mdi-alert-circle</v-icon
                      >
                      <strong>Do you need this generator?</strong>
                    </div>
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    <p class="text-body-2 mb-3">
                      Most likely, yes! While Django's
                      <code>startproject</code> command generates a secret key
                      for new projects, it's best practice to have different
                      keys for each environment (development, staging,
                      production).
                    </p>
                    <p class="text-body-2 mb-3">
                      You'll need this generator when:
                    </p>
                    <ul class="text-body-2 mb-3">
                      <li>Setting up new environments</li>
                      <li>Rotating existing keys for security</li>
                      <li>Working with existing projects that need new keys</li>
                      <li>Deploying to production with fresh credentials</li>
                    </ul>
                    <p class="text-body-2">
                      Having unique keys per environment ensures that a
                      compromise in one environment doesn't affect others.
                    </p>
                  </v-expansion-panel-text>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-title>
                    <div class="d-flex align-center">
                      <v-icon class="mr-2" color="info">mdi-information</v-icon>
                      <strong>Why create another generator?</strong>
                    </div>
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    <p class="text-body-2 mb-3">
                      While there are other key generators available, this one
                      focuses on:
                    </p>
                    <ul class="text-body-2 mb-3">
                      <li>
                        <strong>Security:</strong> Uses WebCrypto API for
                        cryptographically secure generation
                      </li>
                      <li>
                        <strong>Simplicity:</strong> Clean, distraction-free
                        interface
                      </li>
                      <li>
                        <strong>Accuracy:</strong> Follows Django's exact
                        implementation
                      </li>
                      <li>
                        <strong>Privacy:</strong> Everything happens in your
                        browser - no server communication
                      </li>
                      <li>
                        <strong>Reliability:</strong> No ads, trackers, or
                        unnecessary complexity
                      </li>
                    </ul>
                    <p class="text-body-2">
                      This generator prioritizes developer experience and
                      security above all else.
                    </p>
                  </v-expansion-panel-text>
                </v-expansion-panel>
              </v-expansion-panels>
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
      secretKey: computed(() => store.secretKey),
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
