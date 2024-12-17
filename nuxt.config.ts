// nuxt.config.js

import vuetify from 'vite-plugin-vuetify'

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
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: `@import "@/assets/styles/variables.sass";`, // Assurez-vous que le chemin vers variables.sass est correct
        },
      },
    },
  },

  plugins: [
    '@/plugins/vuetify.js',  // Assurez-vous que ce fichier existe et est correctement configuré
  ],

  modules: [
    '@pinia/nuxt', // Pinia pour le store
    // '@vite-pwa/nuxt',  // Si tu utilises PWA, tu peux l'activer
  ],
})
