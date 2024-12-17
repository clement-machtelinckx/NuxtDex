<script setup>
import { useRoute } from 'vue-router'
import { onMounted, computed } from 'vue'
import { usePokeResume } from '@/stores/PokeResume'

const route = useRoute()
const pokemonName = route.params.name

const pokemonResume = usePokeResume()

const pokemon = computed(() => pokemonResume.pokemon)
const isLoading = computed(() => pokemonResume.loading)
const error = computed(() => pokemonResume.error)

onMounted(() => {
  pokemonResume.fetchPokemon(pokemonName)  // Appeler la fonction pour récupérer le Pokémon
})
</script>

<template>
  <div v-if="isLoading">Chargement...</div>
  <div v-else-if="error">{{ error }}</div>
  <div v-else-if="pokemon">
    <div>
        <v-card class="m-10 border-md" text="">
            <v-card-title>{{ pokemon.name }}</v-card-title>
            <img :src="pokemon.sprites.front_default" alt="Image du Pokémon" />
            <v-card-text><strong>Type:</strong>  {{ pokemon.types.map(type => type.type.name).join(', ') }} </v-card-text>
            <v-card-text><strong>Poids:</strong>  {{ pokemon.weight }} hectogrammes </v-card-text>
            <v-card-text><strong>Taille:</strong> {{ pokemon.height }} décimètres</v-card-text>
            <v-card-text><strong>Numéro du Pokémon:</strong> #{{ pokemon.id }}</v-card-text>
        </v-card>

    </div>
  </div>
  <div v-else>
    Pokémon non trouvé.
  </div>
</template>

<style scoped>
img {
  width: 200px;
  height: 200px;
}

.v-card {
  width: 300px;
  margin: 10px;
  /* border:solid, black, 2px; */

}
</style>
