<script setup lang="ts">
import { usePokemonStore } from '@/stores/usePokemonStore'
import { onMounted } from 'vue'

const pokemonStore = usePokemonStore()
onMounted(() => {
  pokemonStore.fetchPokemons()
})
</script>

<template>
  <v-container class="mt-16">
    <h1 class="mb-6">Liste des Pokémon</h1>

    <v-container 
    class="d-flex align-center justify-center" 
    v-if="pokemonStore.isLoading" 
    style="height: 65vh;"
  >
    <v-progress-circular 
      indeterminate 
      color="primary" 
      size="40"
    />
  </v-container>

    <v-row v-if="pokemonStore.error" justify="center">
      <v-col cols="12" sm="8">
        <v-alert type="error" text>{{ pokemonStore.error }}</v-alert>
      </v-col>
    </v-row>

    <v-row v-if="!pokemonStore.isLoading && !pokemonStore.error">
      <v-col cols="4">
        <v-list
          class="overflow-y-hidden"
        >
          <v-list-item-group>
            <v-list-item
            class="mb-n6"
              v-for="pokemon in pokemonStore.pokemons"
              :key="pokemon.name"
              :to="{ name: 'pokemons-name', params: { name: pokemon.name } }"
              link
            >
              <v-list-item-content>
                <v-list-item-title>{{ pokemon.name }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
    </v-row>

    <v-row v-if="pokemonStore.next || pokemonStore.previous" justify="center" class="mt-6">
      <v-btn 
        v-if="pokemonStore.previous" 
        color="primary" 
        outlined 
        class="mx-2"
        @click="pokemonStore.fetchPokeByUrl(pokemonStore.previous)"
      >
        Previous
      </v-btn>
      <v-btn 
        v-if="pokemonStore.next"
        color="primary" 
        outlined 
        class="mx-2"
        @click="pokemonStore.fetchPokeByUrl(pokemonStore.next)"
      >
        Next
      </v-btn>
    </v-row>
  </v-container>
</template>

<style scoped>
/* Ajoutez vos styles ici si nécessaire */
</style>