<script setup>
import { defineProps, onMounted, computed, ref } from 'vue'
import { usePokeResume } from '@/stores/pokeResume'
import PokemonEvolution from '@/components/PokemonEvolution.vue'

const props = defineProps({
  pokemonName: {
    type: String,
    required: true
  }
})

const typeColors = {
  normal: '#A8A77A',
  fire: '#EE8130',
  water: '#6390F0',
  grass: '#7AC74C',
  electric: '#F7D02C',
  ice: '#96D9D6',
  fighting: '#C22E28',
  poison: '#A33EA1',
  ground: '#E2BF65',
  flying: '#A98FF3',
  psychic: '#F95587',
  bug: '#A6B91A',
  rock: '#B6A136',
  ghost: '#735797',
  dragon: '#6F35FC',
  dark: '#705746',
  steel: '#B7B7CE',
  fairy: '#D685AD'
};


const pokemonResume = usePokeResume()

const pokemon = computed(() => pokemonResume.pokemon)
const isLoading = computed(() => pokemonResume.loading)
const error = computed(() => pokemonResume.error)

const showAllMoves = ref(false)

onMounted(() => {
  pokemonResume.fetchPokemon(props.pokemonName)
})

const visibleMoves = computed(() => pokemon.value?.moves.slice(0, 4) || [])
const hiddenMoves = computed(() => pokemon.value?.moves.slice(4) || [])
</script>

<template >
<div class="mt-10">


  <div v-if="isLoading">Chargement...</div>
  <div v-else-if="error">{{ error }}</div>
  <div v-else-if="pokemon">
    <v-container class="pa-4">
      <v-card class="mx-auto" max-width="600" elevation="3">
        <v-card-title><strong>{{ pokemon.name }}</strong></v-card-title>
        <v-card-item class="image-container">
          <div>
            <img :src="pokemon.sprites.other.home.front_default" alt="Image par défaut du Pokémon" />
          </div>
          <div>
            <img :src="pokemon.sprites.other.home.front_shiny" alt="Image shiny du Pokémon" />
          </div>
        </v-card-item>
        <v-card-item v-for="type in pokemon.types" :key="type.type.name">
          <v-chip :style="{ backgroundColor: typeColors[type.type.name] }">
            {{ type.type.name }}
          </v-chip>
        </v-card-item>
        <v-card-text class="mb-n4"><strong>Poids:</strong> {{ pokemon.weight }} hectogrammes</v-card-text>
        <v-card-text class="mb-n4"><strong>Taille:</strong> {{ pokemon.height }} décimètres</v-card-text>
        <v-card-text class="mb-4"><strong>Numéro du Pokémon:</strong> #{{ pokemon.id }}</v-card-text>
        <v-card-title class="mb-4"><strong>BASE STATS: </strong></v-card-title>
        <v-card-text class="mb-n4"><strong>HP: </strong> {{ pokemon.stats[0].base_stat }} </v-card-text>
        <v-card-text class="mb-n4"><strong>ATTACK: </strong> {{ pokemon.stats[1].base_stat }} </v-card-text>
        <v-card-text class="mb-n4"><strong>DEFFENSE: </strong> {{ pokemon.stats[2].base_stat }} </v-card-text>
        <v-card-text class="mb-n4"><strong>SPECIAL-ATTACK: </strong> {{ pokemon.stats[3].base_stat }} </v-card-text>
        <v-card-text class="mb-n4"><strong>SPECIAL-DEFENCE: </strong> {{ pokemon.stats[4].base_stat }} </v-card-text>
        <v-card-text class="mb-4"><strong>SPEED: </strong> {{ pokemon.stats[5].base_stat }} </v-card-text>
        <PokemonEvolution :pokemonName="props.pokemonName" class="ml-4"/>
        <v-card-text><strong>Attaques:</strong></v-card-text>
        <v-list class="list-group">
          <v-list-item 
          v-for="move in visibleMoves" 
          :key="move.move.name"
          :to="{ name: 'moves-name', params: { name: move.move.name } }"link
          >
            {{ move.move.name }}
            <span v-if="move.version_group_details.length > 0">
              lvl {{ move.version_group_details[0].level_learned_at }}
            </span>
            <span v-else>
              (niveau inconnu)
            </span>
          </v-list-item>

          <template v-if="hiddenMoves.length > 0">
            <v-list-item 
            v-show="showAllMoves" 
            v-for="move in hiddenMoves" 
            :key="move.move.name"
            :to="{ name: 'moves-name', params: { name: move.move.name } }"link
            >
              {{ move.move.name }}
              <span v-if="move.version_group_details.length > 0">
                lvl {{ move.version_group_details[0].level_learned_at }}
              </span>
              <span v-else>
                (niveau inconnu)
              </span>
            </v-list-item>
            <v-list-item>

              <button @click="showAllMoves = !showAllMoves" class="toggle-button">
                {{ showAllMoves ? 'Masquer les autres attaques' : 'Afficher plus d\'attaques' }}
              </button>
            </v-list-item>
          </template>
        </v-list>
      </v-card>
    </v-container>
  </div>
</div>
</template>

<style scoped>
.v-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  width: 200px;
  height: 200px;
}

.image-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.v-card {
  width: 70vw;
  margin: 10px;

}

.toggle-button {
  background-color: #1976d2;
  color: white;
  border: none;
  padding: 5px 10px;
  margin-top: 5px;
  cursor: pointer;
  border-radius: 4px;
}

.toggle-button:hover {
  background-color: #1565c0;
}

.list-group {
  list-style-type: none;
  padding: 0;
  margin-left: 10px;
}
</style>
