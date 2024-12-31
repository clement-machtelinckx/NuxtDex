import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePokemonStore = defineStore('pokemonStore', () => {
  const pokemons = ref([])
  const isLoading = ref(false)
  const error = ref(null)
  const next = ref(null)
  const previous = ref(null)
  const pokemonDetails  = reactive({})

  const fetchPokemons = async () => {
    isLoading.value = true
    error.value = null

    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
      const data = await response.json()
      pokemons.value = data.results
      next.value = data.next
      previous.value = data.previous

    for (const pokemon of data.results) {
      if (!pokemonDetails[pokemon.name]) {
        await fetchPokemonDetails(pokemon.url)
      }
    }

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

      for (const pokemon of data.results) {
        if (!pokemonDetails[pokemon.name]) {
          await fetchPokemonDetails(pokemon.url)
        }
      }

    } catch (err) {
      error.value = err.message
    } finally {
      isLoading.value = false
    }
  }

  const fetchPokemonDetails  = async (url) => {
    isLoading.value = true
    error.value = null

    try {
      const response = await fetch(url)
      const data = await response.json()

      pokemonDetails[data.name] = {
        sprite: data.sprites.front_default,
        stats: data.stats.map(stat => ({
          name: stat.stat.name,
          value: stat.base_stat,
        })),
      }

    } catch (err) {
      error.value = err.message
    } finally {
      isLoading.value = false
    }
  }

  return { pokemons, isLoading, error, next, previous, pokemonDetails, fetchPokemons, fetchPokeByUrl }
})