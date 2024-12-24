// nuxt.config.js

import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  app: {
    title: 'NuxtDex',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },
  css: [
    'vuetify/styles', 
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
    '@/plugins/vuetify.js',
  ],

  modules: [
    '@pinia/nuxt', 
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {

        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
  ],
});