// stores/djangoSecret.js
import { defineStore } from 'pinia'

export const useDjangoSecretStore = defineStore('djangoSecret', {
  state: () => ({
    secretKey: '9@tz!*8b$#5)ixa*k+yif9(vzl)p^)2n$+l35cxjy%cddv_i9',
    usePrefix: true,
    copied: false
  }),
  
  getters: {
    displayKey: (state) => {
      return state.usePrefix ? `django-insecure-${state.secretKey}` : state.secretKey
    }
  },
  
  actions: {
    generateSecretKey() {
      // Django secret key karakterleri
      const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*(-_=+)'
      let result = ''
      
      // 50 karakterlik secret key oluştur
      for (let i = 0; i < 50; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length))
      }
      
      this.secretKey = result
      this.copied = false
    },
    
    async copyToClipboard() {
      try {
        await navigator.clipboard.writeText(this.displayKey)
        this.copied = true
        
        // 3 saniye sonra copied durumunu sıfırla
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
    
    // Manual olarak secret key set etme
    setSecretKey(key) {
      this.secretKey = key
      this.copied = false
    },
    
    // Reset işlemi
    resetToDefault() {
      this.secretKey = '9@tz!*8b$#5)ixa*k+yif9(vzl)p^)2n$+l35cxjy%cddv_i9'
      this.usePrefix = true
      this.copied = false
    }
  }
})