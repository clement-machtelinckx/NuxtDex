<script setup lang="ts">
import Header from '@/components/Header.vue'
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