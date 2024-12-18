<script setup>
import { useRoute } from 'vue-router'
import PokeResume from '@/components/PokeResume.vue'

const route = useRoute()
const pokemonName = route.params.name
</script>

<template>
  <div class="container">
    <PokeResume  :pokemonName="pokemonName" />
  </div>
</template>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    /* align-items: center; */
    height: 100vh;
  }
</style>