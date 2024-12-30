import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePokemonStore = defineStore('pokemonStore', () => {
  const pokemons = ref([])
  const isLoading = ref(false)
  const error = ref(null)
  const next = ref(null)
  const previous = ref(null)

  const fetchPokemons = async () => {
    isLoading.value = true
    error.value = null

    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
      const data = await response.json()
      pokemons.value = data.results
      next.value = data.next
      previous.value = data.previous
    } catch (err) {
      error.value = err.message
    } finally {
      isLoading.value = false
    }
  }

  const fetchPokeByUrl = async (url) => {
    isLoading.value = true
    error.value = null

    try {
      const response = await fetch(url)
      const data = await response.json()
      pokemons.value = data.results
      next.value = data.next
      previous.value = data.previous
    } catch (err) {
      error.value = err.message
    } finally {
      isLoading.value = false
    }
  }

  return { pokemons, isLoading, error, next, previous, fetchPokemons, fetchPokeByUrl }
})