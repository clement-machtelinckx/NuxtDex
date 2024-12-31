<script setup lang="ts">
import { ref } from 'vue'
import { useMoveStore } from '@/stores/useMoveStore'
import DialogMove from '@/components/DialogMove.vue'
import { onMounted } from 'vue'

const moveStore = useMoveStore()
const dialogActive = ref(false)
const selectedMove = ref('')

const openDialog = (moveName) => {
  console.log("Move selected:", moveName);
  selectedMove.value = moveName
  dialogActive.value = true
}

onMounted(() => {
  moveStore.fetchMove()
})
</script>

<template>
  <v-container class="mt-16">
    <h1 class="mb-6">Move List</h1>

    <v-container 
      class="d-flex align-center justify-center" 
      v-if="moveStore.isLoading" 
      style="height: 65vh;"
    >
      <v-progress-circular 
        indeterminate 
        color="primary" 
        size="40"
      />
    </v-container>

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
      class="overflow-y-hidden"
    >
      <v-list-item
        class="mb-n2"
        v-for="move in moveStore.move.results"
        :key="move.name"
        @click="openDialog(move.name)"
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

    <v-dialog v-model="dialogActive" max-width="600">
      <DialogMove :moveName="selectedMove" />
    </v-dialog>
  </v-container>
</template>

<style scoped>
/* Ajoutez vos styles ici si nécessaire */
</style>