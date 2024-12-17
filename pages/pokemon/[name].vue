<script setup>
import { useRoute } from 'vue-router'
import { onMounted, computed } from 'vue'
import { usePokeResume } from '@/stores/PokeResume'

const route = useRoute()
const pokemonName = route.params.name

const pokemonResume = usePokeResume()

const pokemon = computed(() => pokemonResume.pokemon)
const isLoading = computed(() => pokemonResume.loading)
const error = computed(() => pokemonResume.error)

onMounted(() => {
  pokemonResume.fetchPokemon(pokemonName)  // Appeler la fonction pour récupérer le Pokémon
})
</script>

<template>
  <div v-if="isLoading">Chargement...</div>
  <div v-else-if="error">{{ error }}</div>
  <div v-else-if="pokemon">
    <div>
      <h1>{{ pokemon.name }}</h1>
      <img :src="pokemon.sprites.front_default" alt="Image du Pokémon" />
      <p><strong>Type:</strong> {{ pokemon.types.map(type => type.type.name).join(', ') }}</p>
      <p><strong>Poids:</strong> {{ pokemon.weight }} hectogrammes</p>
      <p><strong>Taille:</strong> {{ pokemon.height }} décimètres</p>
      <p><strong>Numéro du Pokémon:</strong> #{{ pokemon.id }}</p>
    </div>
  </div>
  <div v-else>
    Pokémon non trouvé.
  </div>
</template>

<style scoped>
img {
  width: 200px;
  height: 200px;
}
</style>
