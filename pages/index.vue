<script setup>
import  PokeCounter from '@/components/PokeCounter.vue'
import { usePokemonStore } from '@/stores/usePokemonStore'
import { onMounted } from 'vue'


const pokemonStore = usePokemonStore()
onMounted(() => {
  pokemonStore.fetchPokemons()
})
</script>

<template>
  <div>
    <h1>Liste des Pokémon</h1>
    <v-btn>Click Me</v-btn>
    <div>
        <PokeCounter />
    </div>
    <div v-if="pokemonStore.isLoading">Chargement...</div>

    <div v-if="pokemonStore.error">{{ pokemonStore.error }}</div>

    <ul v-if="!pokemonStore.isLoading && !pokemonStore.error">
      <li v-for="pokemon in pokemonStore.pokemons" :key="pokemon.name">
        <NuxtLink :to="`/pokemon/${pokemon.name}`">{{ pokemon.name }}</NuxtLink>
      </li>
    </ul>

  </div>
  </template>
  

  