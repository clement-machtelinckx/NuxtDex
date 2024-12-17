// nuxt.config.js

import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  css: [
    'vuetify/styles',  // Utilise l'alias pour Vuetify styles
    '@mdi/font/css/materialdesignicons.css',
  ],

  build: {
    transpile: ['vuetify'],
  },

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  plugins: [
    '@/plugins/vuetify.js',  // Assurez-vous que ce fichier existe et est correctement configuré
  ],

  modules: [
    '@pinia/nuxt', // Pinia pour le store
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })},
    // '@vite-pwa/nuxt',  // Si tu utilises PWA, tu peux l'activer
  ],

})
