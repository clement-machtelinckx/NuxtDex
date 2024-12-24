<script setup>
import { ref } from 'vue'
import {useCounterStore} from '@/stores/counterStore'

const counterStore = useCounterStore()

const increment = () => {
    counterStore.increment()
}

const reset = () => {
    counterStore.reset()
}
</script>

<template>
  <v-container>
    <p>Compteur: {{ counterStore.counter }}</p>
    <v-row class="mb-4">
      <v-col cols="4" sm="4">
        <v-btn color="success" @click="increment">Incrementer</v-btn>
      </v-col>
      <v-col cols="4" sm="4">
        <v-btn color="error" @click="reset">Réinitialiser</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
</style>
