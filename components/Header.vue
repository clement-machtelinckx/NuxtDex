<script lang="ts" setup>
</script>

<template>
  <v-app-bar app color="primary" dark>
    <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
    <v-toolbar-title>PokeApp</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn text to="/">
      Accueil
    </v-btn>
    <v-btn text to="/pokemons">
      Pokémon
    </v-btn>
    <v-btn text to="/moves">
      Moves
    </v-btn>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<style scoped>
.v-app-bar {
  position: sticky;
  top: 0;
  z-index: 1000;
}
</style>
