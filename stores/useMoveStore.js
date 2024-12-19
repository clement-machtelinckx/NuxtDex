import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMoveStore = defineStore('move', () => {
  const move = ref({ results: [] }) // Initialisation avec un objet vide
  const isLoading = ref(false)
  const error = ref(null)

  const fetchMove = async () => {
    isLoading.value = true
    error.value = null
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/move`)
      const data = await response.json()
      move.value = data
    } catch (err) {
      error.value = err
    } finally {
      isLoading.value = false
    }
  }

  const fetchMoveByUrl = async (url) => {
    isLoading.value = true
    error.value = null
    try {
      const response = await fetch(url)
      const data = await response.json()
      move.value = data
    } catch (err) {
      error.value = err
    } finally {
      isLoading.value = false
    }
  }

  return { move, isLoading, error, fetchMove, fetchMoveByUrl }
})
