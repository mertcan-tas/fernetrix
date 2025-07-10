// stores/djangoSecret.js
import { defineStore } from 'pinia'

export const useDjangoSecretStore = defineStore('djangoSecret', {
  state: () => ({
    secretKey: '',
    usePrefix: true,
    copied: false
  }),

  getters: {
    displayKey: (state) => {
      if (!state.secretKey) return ''
      return state.usePrefix ? `django-insecure-${state.secretKey}` : state.secretKey
    }
  },

  actions: {
    generateSecretKey() {
      // Django secret key karakterleri (# karakteri hariç)
      const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@$%^&*(-_=+)'
      let result = ''

      // 50 karakterlik secret key oluştur
      for (let i = 0; i < 50; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length))
      }

      this.secretKey = result
      this.copied = false
    },

    async copyToClipboard() {
      if (!this.secretKey) return

      try {
        await navigator.clipboard.writeText(this.displayKey)
        this.copied = true


        setTimeout(() => {
          this.copied = false
        }, 3000)
      } catch (err) {
        console.error('Kopyalama başarısız:', err)
        this.copied = true
        setTimeout(() => {
          this.copied = false
        }, 3000)
      }
    },

    togglePrefix() {
      this.usePrefix = !this.usePrefix
    },


    setSecretKey(key) {
      this.secretKey = key
      this.copied = false
    },


    resetToDefault() {
      this.secretKey = ''
      this.usePrefix = true
      this.copied = false
    }
  }
})