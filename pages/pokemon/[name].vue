<script setup lang="ts">
import { useRoute } from 'vue-router'
import PokemonResume from '@/components/PokeResume.vue'
const route = useRoute()
const id = route.params.id
console.log(id)

</script>
<template>

    <PokemonResume />
</template>