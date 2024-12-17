<script setup>
import { usePokeResume } from '@/stores/usePokeResume'
import { onMounted } from 'vue'

// Récupération du store
const pokeStore = usePokeResume()


onMounted(() => {
  pokeStore.fetchPokemon('pikachu') 
})
</script>

<template>
  <div>
    <div v-if="pokeStore.loading">Chargement...</div>
    <div v-if="pokeStore.error">Erreur : {{ pokeStore.error.message }}</div>
    <div v-if="pokeStore.pokemon">
      <h2>{{ pokeStore.pokemon.name }}</h2>
      <img :src="pokeStore.pokemon.sprites.front_default" alt="Image du Pokémon" />
    </div>
  </div>
</template>
