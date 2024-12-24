// nuxt.config.js

import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  css: [
    'vuetify/styles', // Vuetify styles
    '@mdi/font/css/materialdesignicons.css', // Icones Material Design
  ],

  build: {
    transpile: ['vuetify'], // Assurez-vous que Vuetify est transpile correctement
  },

  vite: {
    vue: {
      template: {
        transformAssetUrls, // Transformation des URLs d'assets pour Vuetify
      },
    },
  },

  plugins: [
    '@/plugins/vuetify.js', // Votre fichier de plugin Vuetify
  ],

  modules: [
    '@pinia/nuxt', // Pour la gestion des stores avec Pinia
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // Ajout de Vuetify en tant que plugin Vite
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
  ],
});
