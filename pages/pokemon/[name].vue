<script setup>
import { useRoute } from 'vue-router'
import PokeResume from '@/components/PokeResume.vue'

const route = useRoute()
const pokemonName = route.params.name
</script>

<template>
  <div>
    <PokeResume :pokemonName="pokemonName" />
  </div>
</template>

<style scoped>

</style>