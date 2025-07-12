<template>
  <Layout>
    <v-container fluid class="py-md-8 py-4">
      <v-row justify="center">
        <v-col cols="12" sm="10" md="8" lg="6" xl="6">
          <v-card
            class="mx-auto pa-md-8 pa-sm-6 pa-4"
            elevation="0"
            rounded="xl"
          >
            <v-card-title
              class="text-h5 text-sm-h4 font-weight-bold text-center mb-4"
            >
              Generate Django Secret Key
            </v-card-title>

            <v-alert
              type="info"
              variant="tonal"
              class="mb-6"
              rounded="lg"
              icon="mdi-information-outline"
            >
              <div class="text-body-2">
                <strong>Django Secret Key</strong> is critical for your
                application's security. This key is used for cryptographic
                signing and encryption operations.
              </div>
            </v-alert>

            <v-card-text>
              <v-text-field
                v-model="displayKey"
                readonly
                class="mb-5"
                hide-details
                placeholder="Click 'Generate Secret Key' to create a new secret key"
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
              <v-icon color="primary" class="mr-2"
                >mdi-book-open-variant</v-icon
              >
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
                        >mdi-shield-key</v-icon
                      >
                      <strong>What is Django's SECRET_KEY?</strong>
                    </div>
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    <p class="text-body-2 mb-3">
                      Django's <code>SECRET_KEY</code> is a cryptographic
                      signing key used for:
                    </p>
                    <ul class="text-body-2 mb-3">
                      <li>Generating session tokens and cookies</li>
                      <li>Password reset tokens</li>
                      <li>CSRF protection tokens</li>
                      <li>Signing data with Django's signing framework</li>
                      <li>Encrypting sensitive data in forms</li>
                    </ul>
                    <p class="text-body-2">
                      <strong>Important:</strong> Never commit your production
                      SECRET_KEY to version control or share it publicly. A
                      compromised key can lead to session hijacking, CSRF
                      attacks, and data tampering.
                    </p>
                  </v-expansion-panel-text>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-title>
                    <div class="d-flex align-center">
                      <v-icon class="mr-2" color="primary">mdi-cog</v-icon>
                      <strong>How to use the generated key?</strong>
                    </div>
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    <p class="text-body-2 mb-3">
                      <strong>1. Environment Variables (Recommended):</strong>
                    </p>
                    <v-card class="mb-3 pa-3">
                      <code class="text-body-2">
                        # .env file<br />
                        SECRET_KEY=your-generated-key-here<br /><br />
                        # settings.py<br />
                        import os<br />
                        SECRET_KEY = os.environ.get('SECRET_KEY')
                      </code>
                    </v-card>
                    <p class="text-body-2 mb-3">
                      <strong>2. Direct Assignment (Development only):</strong>
                    </p>
                    <v-card class="mb-3 pa-3">
                      <code class="text-body-2">
                        # settings.py<br />
                        SECRET_KEY = 'your-generated-key-here'
                      </code>
                    </v-card>
                    <p class="text-body-2">
                      <strong>3. Multiple Environment Setup:</strong> Use
                      different keys for development, staging, and production
                      environments.
                    </p>
                  </v-expansion-panel-text>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-title>
                    <div class="d-flex align-center">
                      <v-icon class="mr-2" color="primary">mdi-security</v-icon>
                      <strong>Security Best Practices</strong>
                    </div>
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    <p class="text-body-2 mb-3">
                      <strong>DO:</strong>
                    </p>
                    <ul class="text-body-2 mb-3">
                      <li>Store keys in environment variables</li>
                      <li>Use different keys for each environment</li>
                      <li>Rotate keys regularly (every 6-12 months)</li>
                      <li>
                        Use a secure key management service for production
                      </li>
                      <li>Keep keys at least 50 characters long</li>
                    </ul>
                    <p class="text-body-2 mb-3">
                      <strong>DON'T:</strong>
                    </p>
                    <ul class="text-body-2 mb-3">
                      <li>Commit keys to version control</li>
                      <li>Share keys in emails or chat</li>
                      <li>Use the same key across environments</li>
                      <li>Use predictable or simple keys</li>
                      <li>Store keys in plain text files</li>
                    </ul>
                  </v-expansion-panel-text>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-title>
                    <div class="d-flex align-center">
                      <v-icon class="mr-2" color="primary"
                        >mdi-alert-circle</v-icon
                      >
                      <strong>What happens if my key is compromised?</strong>
                    </div>
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    <p class="text-body-2 mb-3">
                      If your SECRET_KEY is compromised, an attacker could:
                    </p>
                    <ul class="text-body-2 mb-3">
                      <li>Forge session cookies and impersonate users</li>
                      <li>Bypass CSRF protection</li>
                      <li>Tamper with signed data</li>
                      <li>Generate valid password reset tokens</li>
                    </ul>
                    <p class="text-body-2 mb-3">
                      <strong>Immediate Actions:</strong>
                    </p>
                    <ul class="text-body-2 mb-3">
                      <li>Generate a new SECRET_KEY immediately</li>
                      <li>Deploy the new key to all environments</li>
                      <li>Force all users to log in again</li>
                      <li>Invalidate all existing sessions</li>
                      <li>Review access logs for suspicious activity</li>
                    </ul>
                  </v-expansion-panel-text>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-title>
                    <div class="d-flex align-center">
                      <v-icon class="mr-2" color="primary"
                        >mdi-information</v-icon
                      >
                      <strong>Generator Features</strong>
                    </div>
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    <p class="text-body-2 mb-3">This generator provides:</p>
                    <ul class="text-body-2 mb-3">
                      <li>
                        <strong>Cryptographically Secure:</strong> Uses Web
                        Crypto API for true randomness
                      </li>
                      <li>
                        <strong>Django Compatible:</strong> Follows Django's
                        exact character set and length
                      </li>
                      <li>
                        <strong>Client-Side Only:</strong> Keys are generated in
                        your browser, never sent to servers
                      </li>
                      <li>
                        <strong>Development Flag:</strong> Optional
                        'django-insecure-' prefix for development keys
                      </li>
                      <li>
                        <strong>Easy Copy:</strong> One-click copying to
                        clipboard
                      </li>
                    </ul>
                    <p class="text-body-2">
                      The generated keys are 50 characters long using Django's
                      standard character set:
                      <code
                        >abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(-_=+)</code
                      >
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
