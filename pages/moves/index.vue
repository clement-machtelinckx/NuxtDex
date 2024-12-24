<script setup lang="ts">
import { useMoveStore } from '@/stores/useMoveStore'
import { onMounted } from 'vue'

const moveStore = useMoveStore()
onMounted(() => {
  moveStore.fetchMove()
});

</script>

<template>
  <v-container class="mt-16">
    <h1 class="mb-6">Move List</h1>

    <v-progress-circular 
      v-if="moveStore.isLoading" 
      indeterminate 
      color="primary" 
      size="40"
    />

    <v-alert 
      v-else-if="moveStore.error" 
      type="error" 
      text
    >
      {{ moveStore.error }}
    </v-alert>

    <v-list 
      v-else-if="!moveStore.isLoading && !moveStore.error && moveStore.move.results" 
      dense
    >
    <v-list-item
              v-for="move in moveStore.move.results"
              :key="move.name"
              :to="{ name: 'moves-name', params: { name: move.name } }"
              link
            >
              <v-list-item-content>
                <v-list-item-title>{{ move.name }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
    </v-list>

    <v-row v-if="moveStore.move.next || moveStore.move.previous" justify="center" class="mt-6">
      <v-btn 
        v-if="moveStore.move.previous" 
        color="primary" 
        outlined 
        class="mx-2"
        @click="moveStore.fetchMoveByUrl(moveStore.move.previous)"
      >
        Previous
      </v-btn>
      <v-btn 
        v-if="moveStore.move.next" 
        color="primary" 
        outlined 
        class="mx-2"
        @click="moveStore.fetchMoveByUrl(moveStore.move.next)"
      >
        Next
      </v-btn>
    </v-row>
  </v-container>
</template>
<style scoped>

</style>
