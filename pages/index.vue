<script setup lang="ts">
import  PokeCounter from '@/components/PokeCounter.vue'
import { usePokemonStore } from '@/stores/usePokemonStore'
import { useMoveStore } from '@/stores/useMoveStore'
import { onMounted } from 'vue'





const pokemonStore = usePokemonStore()
const moveStore = useMoveStore()
onMounted(() => {
  pokemonStore.fetchPokemons()
  moveStore.fetchMove()

})
</script>

<template>
  <v-container>
    <v-row class="mt-16">
      <h1>Counter</h1>
      <v-col>
        <PokeCounter />
      </v-col>
    </v-row>

  </v-container>
</template>

  

  