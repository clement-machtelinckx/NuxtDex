<script setup>
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'

const route = useRoute()
const pokemonName = route.params.name

const pokemon = ref(null)
const isLoading = ref(true)
const error = ref(null)

const fetchPokemon = async () => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    if (!response.ok) {
      throw new Error('Erreur de récupération des données')
    }
    const data = await response.json()
    pokemon.value = data
  } catch (err) {
    error.value = err.message
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchPokemon()
})
</script>

<template>
  <div v-if="isLoading">Chargement...</div>
  <div v-else-if="error">{{ error }}</div>
  <div v-else>
    <div >
    <h1>{{ pokemon.name }}</h1>
    <img :src="pokemon.sprites.front_default" alt="Image du Pokémon" />
    <p><strong>Type:</strong> {{ pokemon.types.map(type => type.type.name).join(', ') }}</p>
    <p><strong>Poids:</strong> {{ pokemon.weight }} hectogrammes</p>
    <p><strong>Taille:</strong> {{ pokemon.height }} décimètres</p>
    <p><strong>Numéro du Pokémon:</strong> #{{ pokemon.id }}</p>
    </div>
  </div>
</template>

<style scoped>

img {
  width: 200px;
  height: 200px;
}
</style>
