<script setup lang="ts">
import Header from '@/components/Header.vue'
import { createVuetify } from 'vuetify';
import { createApp } from 'vue';
import App from './App.vue';

const vuetify = createVuetify();

const app = createApp(App);
app.use(vuetify);
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <v-app>
      <Header />
      <NuxtPage />
    </v-app>
  </NuxtLayout>
</template>