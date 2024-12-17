import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePokeResume = defineStore('pokeResume', () => {

  const pokemon = ref(null)
  const loading = ref(false)
  const error = ref(null)

  const fetchPokemon = async (name) => {
    loading.value = true
    error.value = null
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      const data = await response.json()  
      pokemon.value = data  
    } catch (err) {
      error.value = err 
    } finally {
      loading.value = false  
    }
  }

  return { pokemon, loading, error, fetchPokemon }
})
