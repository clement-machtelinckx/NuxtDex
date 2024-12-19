import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMoveStoreResume = defineStore('moveStoreResume', () => {
  const move = ref(null)
  const isLoading = ref(false)
  const error = ref(null)

  const fetchMoveResume = async (name) => {
    isLoading.value = true
    error.value = null

    try {
      const response = await fetch(`https://pokeapi.co/api/v2/move/${name}`)
      const data = await response.json()
      move.value = data
    } catch (err) {
      error.value = err
    } finally {
      isLoading.value = false
    }
  }

  return { move, isLoading, error, fetchMoveResume }
})