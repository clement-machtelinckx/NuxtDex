<script setup lang="ts">
import Header from '@/components/Header.vue'
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <v-app>
      <link rel="icon" href="/pokebal_ico.png" />

      <Header />
      <NuxtPage />
    </v-app>
  </NuxtLayout>
</template>