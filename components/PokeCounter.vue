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
    <div>
      <p>Compteur: {{ counterStore.counter }}</p>
      <button @click="increment">Incrementer</button>
      <button @click="reset">Réinitialiser</button>
    </div>
  </template>
