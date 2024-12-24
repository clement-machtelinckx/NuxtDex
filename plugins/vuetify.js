// plugins/vuetify.js

import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'light', // Définir le thème par défaut
      themes: {
        light: {
          colors: {
            primary: '#1976D2', // Couleur principale
            secondary: '#424242', // Couleur secondaire
          },
        },
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
