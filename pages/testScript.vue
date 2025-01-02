<script setup lang="ts">
import { onMounted } from 'vue'
import { usePokeResume } from '~/stores/pokeResume'

const pokeResumeStore = usePokeResume()

const fetchAllPokemons = async () => {
  for (let i = 1; i <= 151; i++) {
    await pokeResumeStore.fetchPokemon(i.toString())
  }
}

onMounted(() => {
  fetchAllPokemons()
})
</script>

<template>
  <div>
    <h1>Fetching 151 Pokémon</h1>
    <div v-if="pokeResumeStore.loading">Loading...</div>
    <div v-else-if="pokeResumeStore.error">{{ pokeResumeStore.error }}</div>
    <div v-else>
      <pre>{{ pokeResumeStore.pokemon }}</pre>
    </div>
  </div>
</template>

<style scoped>

</style>