<script setup lang='ts'>
import { useRoute } from 'vue-router'
import PokeResume from '@/components/PokeResume.vue'

const route = useRoute()
const pokemonName = route.params.name

</script>

<template>
  <v-container class="container">
    <PokeResume :pokemonName="pokemonName" />

</v-container>
</template>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    height: 100vh;
  }
</style>