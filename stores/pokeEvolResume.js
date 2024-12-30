import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePokeEvolResume = defineStore('pokeEvolResume', () => {
  const pokemon = ref(null)
  const loading = ref(false)
  const error = ref(null)

  const fetchEvolution = async (name) => {
    loading.value = true
    error.value = null

    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}`)
      const data = await response.json()
      const evolutionChainUrl = data.evolution_chain.url
      const evolutionResponse = await fetch(evolutionChainUrl)
      const evolutionData = await evolutionResponse.json()
      pokemon.value = evolutionData.chain
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  return { pokemon, loading, error, fetchEvolution }
})