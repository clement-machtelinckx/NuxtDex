
import { defineStore } from 'pinia'
import {ref} from 'vue'

export const usePokemonStore = defineStore('pokemon', () => {
    
    const pokemons = ref([])
    const isLoading = ref(false)
    const error = ref(null)

    const fetchPokemons = async () => {
        isLoading.value = true
        error.value = null
        try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
            const data = await response.json()
            pokemons.value = data.results
        } catch (err) {
            error.value = err
        } finally {
            isLoading.value = false
        }
    }

    return { pokemons, isLoading, error, fetchPokemons }
});