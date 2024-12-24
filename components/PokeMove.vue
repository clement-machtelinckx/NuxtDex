<script setup>
import { defineProps, computed } from 'vue'

import { useMoveStoreResume } from '@/stores/pokeMoveResume'


const props = defineProps({
  moveName: {
    type: String,
    required: true
  }
})

// const route = useRoute()
// const moveName = route.params.name

const moveStore = useMoveStoreResume()

const move = computed(() => moveStore.move)
const isLoading = computed(() => moveStore.isLoading)
const error = computed(() => moveStore.error)

onMounted(() => {
  moveStore.fetchMoveResume(props.moveName)
})
</script>

<template>
  <div>
    <div v-if="isLoading">Chargement...</div>
    <div v-if="error">{{ error }}</div>
    <div v-if="move">
      <h2>{{ move.name }}</h2>
      <p><strong>Type:</strong> {{ move.type.name }}</p>
      <p><strong>Puissance:</strong> {{ move.power }}</p>
      <p><strong>Précision:</strong> {{ move.accuracy }}</p>
    </div>
  </div>
</template>

<style scoped>

</style>