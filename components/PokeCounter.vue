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
      <button class="increment" @click="increment">Incrementer</button>
      <button class="decrement" @click="reset">Réinitialiser</button>
    </div>
</template>
<style scoped>
  .increment {
    color: white;
    padding: 10px;
    background-color: green;
    border: black, solid, 2px;
    margin-left: 10px;
  }
  .decrement {
    color: white;
    padding: 10px;
    background-color: red;
    border: black, solid, 2px;
    margin-left: 10px;
  }
</style>
