<script setup>
import { defineProps, onMounted, computed } from 'vue'
import { usePokeResume } from '@/stores/PokeResume'

const props = defineProps({
  pokemonName: {
    type: String,
    required: true
  }
})

const pokemonResume = usePokeResume()

const pokemon = computed(() => pokemonResume.pokemon)
const isLoading = computed(() => pokemonResume.loading)
const error = computed(() => pokemonResume.error)

onMounted(() => {
  pokemonResume.fetchPokemon(props.pokemonName)
})
</script>

<template>
  <div v-if="isLoading">Chargement...</div>
  <div v-else-if="error">{{ error }}</div>
  <div v-else-if="pokemon">
    <v-card class="m-10 border-md" text="">
      <v-card-title>{{ pokemon.name }}</v-card-title>
      <img :src="pokemon.sprites.front_default" alt="Image du Pokémon" />
      <v-card-text><strong>Type:</strong> {{ pokemon.types.map(type => type.type.name).join(', ') }}</v-card-text>
      <v-card-text><strong>Poids:</strong> {{ pokemon.weight }} hectogrammes</v-card-text>
      <v-card-text><strong>Taille:</strong> {{ pokemon.height }} décimètres</v-card-text>
      <v-card-text><strong>Numéro du Pokémon:</strong> #{{ pokemon.id }}</v-card-text>
      <strong>Attaques:</strong>
      <ul>
        <li v-for="move in pokemon.moves" :key="move.move.name">
          {{ move.move.name }}
          <span v-if="move.version_group_details.length > 0">
            lvl {{ move.version_group_details[0].level_learned_at }}
          </span>
          <span v-else>
            (niveau inconnu)
          </span>
        </li>
      </ul>
    </v-card>
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
