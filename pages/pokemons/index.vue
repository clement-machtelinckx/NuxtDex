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
      <v-col cols="12">
        <v-row>
          <v-col
            v-for="pokemon in pokemonStore.pokemons"
            :key="pokemon.name"
            cols="12"
            sm="6"
            md="3"
          >
            <v-card class="mx-auto" max-width="344">
              <v-list-item
                :to="{ name: 'pokemons-name', params: { name: pokemon.name } }"
                link
              >
                <v-list-item-content>
                  <v-list-item-title><strong>{{ pokemon.name }}</strong></v-list-item-title>
                </v-list-item-content>
                <v-list-item-avatar>
                  <v-img :src="pokemonStore.pokemonDetails[pokemon.name]?.sprite" class="h-25 w-25" lazy-src="" />
                </v-list-item-avatar>
                
                <v-list-content>
                <span v-for="stat in pokemonStore.pokemonDetails[pokemon.name]?.stats" :key="stat.name">
                  <v-card-text class="mb-n4">{{ stat.name }}: {{ stat.value }}</v-card-text>
                </span>
              </v-list-content>
            </v-list-item>
            </v-card>
          </v-col>
        </v-row>
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