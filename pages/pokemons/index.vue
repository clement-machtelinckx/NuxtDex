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
  <title>Liste des Pokémon - Explorez les détails de chaque Pokémon</title>
  <meta name="description" content="Découvrez une liste détaillée des Pokémon avec leurs types, tailles, poids et attaques. Parfait pour les fans et les curieux !" />

  <v-container class="mt-16">
    <h1 class="mb-6">Liste des Pokémon</h1>
    <v-row class="mb-4">
      <v-col>
        <PokeCounter />
      </v-col>
    </v-row>

    <v-row v-if="pokemonStore.isLoading" justify="center">
      <v-col cols="12" sm="8">
        <v-alert type="info" text>Chargement...</v-alert>
      </v-col>
    </v-row>

    <v-row v-if="pokemonStore.error" justify="center">
      <v-col cols="12" sm="8">
        <v-alert type="error" text>{{ pokemonStore.error }}</v-alert>
      </v-col>
    </v-row>

    <v-row v-if="!pokemonStore.isLoading && !pokemonStore.error">
      <v-col cols="4">
        <v-list>
          <v-list-item-group>
            <v-list-item
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
  </v-container>
</template>

  

  