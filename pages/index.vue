<script setup lang="ts">
import  PokeCounter from '@/components/PokeCounter.vue'
import { usePokemonStore } from '@/stores/usePokemonStore'
import {useMoveStore} from '@/stores/useMoveStore'
import { onMounted } from 'vue'



const pokemonStore = usePokemonStore()
const moveStore = useMoveStore()
onMounted(() => {
  pokemonStore.fetchPokemons()
  moveStore.fetchMove()

})
</script>

<template>
  <div>
    <h1>Liste des Pokémon</h1>
    <div>
        <PokeCounter />
    </div>
    <div v-if="pokemonStore.isLoading">Chargement...</div>

    <div v-if="pokemonStore.error">{{ pokemonStore.error }}</div>

    <ul v-if="!pokemonStore.isLoading && !pokemonStore.error">
      <li v-for="pokemon in pokemonStore.pokemons" :key="pokemon.name">
        <NuxtLink :to="`/pokemons/${pokemon.name}`">{{ pokemon.name }}</NuxtLink>
      </li>
    </ul>

  </div>
  </template>
  

  