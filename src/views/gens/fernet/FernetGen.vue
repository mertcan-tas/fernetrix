<template>
  <Layout>
    <v-container fluid fill-height>
      <v-row justify="center" align="center">
        <v-col cols="12" md="8" lg="6">
          <v-card class="mx-auto pa-8" elevation="4" rounded="lg">
            <v-card-title class="text-h4 font-weight-bold text-center mb-4">
              Generate Fernet Key
            </v-card-title>

            <v-card-text class="text-center mb-4">
              <p class="text-body-1 mb-2">
                Generate a secure Fernet key for encryption/decryption
                operations. Fernet is a symmetric encryption method that uses
                <a href="#" class="text-decoration-underline"
                  >AES 128 encryption</a
                >.
              </p>
              <p class="text-caption text--secondary">
                The key is 32 bytes (256 bits) encoded in base64 format.
              </p>
            </v-card-text>

            <v-card-text>
              <v-text-field
                v-model="displayKey"
                readonly
                outlined
                class="mb-4"
                hide-details
              >
                <template v-slot:append>
                  <v-btn
                    @click="copyToClipboard"
                    :color="copied ? 'success' : 'primary'"
                  >
                    <v-icon v-if="copied">mdi-check</v-icon>
                    <v-icon v-else>mdi-content-copy</v-icon>
                  </v-btn>
                </template>
              </v-text-field>

              <v-alert type="info" outlined class="mb-4" dense>
                <div class="d-flex align-center">
                  <v-icon left>mdi-information</v-icon>
                  <span>
                    <strong>Key Length:</strong>
                    {{ displayKey.length }} characters |
                    <strong>Format:</strong> Base64 |
                    <strong>Bits:</strong> 256-bit
                  </span>
                </div>
              </v-alert>

              <v-row>
                <v-col cols="12" sm="6">
                  <v-btn
                    block
                    large
                    color="success"
                    @click="copyToClipboard"
                    :disabled="copied"
                  >
                    <v-icon left>{{
                      copied ? "mdi-check" : "mdi-content-copy"
                    }}</v-icon>
                    {{ copied ? "Copied!" : "Copy Key" }}
                  </v-btn>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-btn block large color="primary" @click="generateFernetKey">
                    <v-icon left>mdi-key</v-icon>
                    Generate New Key
                  </v-btn>
                </v-col>
              </v-row>

              <v-expansion-panels class="mt-6">
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    <div class="mb-4">
                      <v-icon left>mdi-code-tags</v-icon>
                      Python Usage Example
                    </div>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-card elevation="0" class="pa-3 border-thin">
                      <pre
                        class="text-caption"
                      ><code># Install cryptography library
pip install cryptography

# Python code example
from cryptography.fernet import Fernet

# Use your generated key
key = b'{{ displayKey }}'
fernet = Fernet(key)

# Encrypt data
message = b"Hello, World!"
encrypted = fernet.encrypt(message)
print(f"Encrypted: {encrypted}")

# Decrypt data
decrypted = fernet.decrypt(encrypted)
print(f"Decrypted: {decrypted.decode()}")</code></pre>
                    </v-card>
                  </v-expansion-panel-content>
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
import { useFernetKeyStore } from "@/stores/fernet/fernet-gen.js";
import { computed } from "vue";

export default {
  name: "FernetKeyGenerator",

  setup() {
    const store = useFernetKeyStore();

    return {
      displayKey: computed(() => store.displayKey),
      copied: computed(() => store.copied),
      copyToClipboard: () => store.copyToClipboard(),
      generateFernetKey: () => store.generateFernetKey(),
    };
  },
};
</script>
