<script setup lang='ts'>
import { useRoute } from 'vue-router'
import PokeMove from '@/components/PokeMove.vue'

const route = useRoute()
const moveName = route.params.name

</script>
<template>
  <v-container class="container">
        <PokeMove :moveName="moveName" />
    </v-container>
</template>
<style scoped>
.container {
    display: flex;
    justify-content: center;
    height: 100vh;
  }
</style>