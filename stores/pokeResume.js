import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePokeResume = defineStore('pokeResume', () => {

  const pokemon = ref(null)
  const loading = ref(false)
  const error = ref(null)

  const move = ref(null)
  const loadingMove = ref(false)
  const errorMove = ref(null)

  const fetchMove = async (name) => {
    loadingMove.value = true
    errorMove.value = null

    try {
        const resMove = await fetch(`https://pokeapi.co/api/v2/move/${name}`)
        const dataMove = await resMove.json()
        move.value = dataMove
        console.log(dataMove)
    } catch (err) {
        errorMove.value = err
    } finally {
        loadingMove.value = false
    }
}

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

  return { pokemon, loading, error, fetchPokemon , move, loadingMove, errorMove, fetchMove }
})
