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
const decrement = () => {
    counterStore.decrement()
}
</script>

<template>
  <v-container>
    <p>Compteur: {{ counterStore.counter }}</p>
    <v-row class="mb-4">
      <v-col cols="4" sm="4">
        <v-btn color="info" @click="increment">Incrementer</v-btn>
      </v-col>
      <v-col cols="4" sm="4">
        <v-btn color="warning" @click="decrement">Decrement</v-btn>
      </v-col>
      <v-col cols="4" sm="4">
        <v-btn color="error" @click="reset">Réinitialiser</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
</style>
