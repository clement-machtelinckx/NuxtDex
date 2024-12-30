<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()
const goBack = () => {
  router.back()
}

const isMenuOpen = ref(false)
</script>

<template>
  <v-app-bar app color="primary" dark>
    <v-btn icon @click="goBack" class="ml-8">
      <v-icon>mdi-arrow-left</v-icon>
      Return
    </v-btn>
    <v-spacer></v-spacer>

    <v-btn icon @click="isMenuOpen = !isMenuOpen" class="d-md-none">
      <v-icon>mdi-menu</v-icon>
    </v-btn>

    <v-menu v-model="isMenuOpen" offset-y>

      <v-list>
        <v-list-item to="/">
          <v-list-item-title>Accueil</v-list-item-title>
        </v-list-item>
        <v-list-item to="/pokemons">
          <v-list-item-title>Pokémon</v-list-item-title>
        </v-list-item>
        <v-list-item to="/moves">
          <v-list-item-title>Moves</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-spacer class="d-none d-md-flex"></v-spacer>

    <v-btn text to="/" class="d-none d-md-flex mr-2">
      Accueil
    </v-btn>
    <v-btn text to="/pokemons" class="d-none d-md-flex mr-2">
      Pokémon
    </v-btn>
    <v-btn text to="/moves" class="d-none d-md-flex mr-2">
      Moves
    </v-btn>

    <v-spacer class="d-none d-md-flex"></v-spacer>
  </v-app-bar>
</template>

<style scoped>
.v-app-bar {
  position: sticky;
  top: 0;
  z-index: 1000;
}
</style>