<script setup lang="ts">
import { defineProps, ref, onMounted, computed } from 'vue'
import { usePokeEvolResume } from '@/stores/pokeEvolResume'
import { useRouter } from 'vue-router'

const props = defineProps({
  pokemonName: {
    type: String,
    required: true
  }
})

const pokemonEvolution = usePokeEvolResume()
const router = useRouter()

const pokemon = computed(() => pokemonEvolution.pokemon)
const isLoading = computed(() => pokemonEvolution.loading)
const error = computed(() => pokemonEvolution.error)

onMounted(() => {
  pokemonEvolution.fetchEvolution(props.pokemonName)
})

const getEvolutionChain = (chain) => {
  const evolutions = []
  let currentChain = chain

  while (currentChain) {
    evolutions.push(currentChain.species.name)
    currentChain = currentChain.evolves_to[0]
  }

  return evolutions
}
</script>

<template>
    <div>
      <h1>Évolution de {{ props.pokemonName }}</h1>
      <div v-if="isLoading">Chargement...</div>
      <div v-else-if="error">{{ error }}</div>
      <div v-else-if="pokemon">
        <v-list>
          <v-list-item v-for="evolution in getEvolutionChain(pokemon)" :key="evolution" @click="router.push(`/pokemons/${evolution}`)">
            <v-list-item-title>{{ evolution }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </div>
    </div>
  </template>

<style scoped>

</style>