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

    <v-row>
      <v-col>
        <h1 class="text-h4 mb-4">Liste des Pokémon</h1>
      </v-col>
    </v-row>

    <v-row class="mb-4">
      <v-col>
        <PokeCounter />
      </v-col>
    </v-row>

  </v-container>
</template>

  

  