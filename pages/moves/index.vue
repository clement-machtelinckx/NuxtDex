<script setup lang="ts">
import { useMoveStore } from '@/stores/useMoveStore'
import { onMounted } from 'vue'

const moveStore = useMoveStore()
onMounted(() => {
  moveStore.fetchMove()
})
console.log(moveStore.move)
// consoel.log(moveStore.fetchMove())
</script>
<template>
  <div class="ml-10 ">
    <h1>Move List</h1>
    <div v-if="moveStore.isLoading">Loading...</div>
    <div v-if="moveStore.error">{{ moveStore.error }}</div>
    <ul v-if="!moveStore.isLoading && !moveStore.error && moveStore.move.results">
      <li v-for="move in moveStore.move.results" :key="move.name">
        <NuxtLink :to="`/moves/${move.name}`">{{ move.name }}</NuxtLink>
      </li>
    </ul>
    <!-- Pagination -->
    <div v-if="moveStore.move.next || moveStore.move.previous">
      <button 
          class="btn-pagination"
        v-if="moveStore.move.previous" 
        @click="moveStore.fetchMoveByUrl(moveStore.move.previous)">
        Previous
      </button>
      <button 
          class="btn-pagination"
        v-if="moveStore.move.next" 
        @click="moveStore.fetchMoveByUrl(moveStore.move.next)">
        Next
      </button>
    </div>
  </div>
</template>
<style>
.btn-pagination {
  background-color: #1976d2;
  color: white;
  border: none;
  padding: 5px 10px;
  margin-top: 5px;
  margin-left: 10px;
  cursor: pointer;
}
</style>