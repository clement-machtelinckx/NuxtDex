<script>
import { useRoute } from 'vue-router'
import PokeMove from '@/components/PokeMove.vue'

const route = useRoute()
const moveName = route.params.name

</script>
<template>
    <div>
        <PokeMove :moveName="moveName" />
    </div>
</template>
<style>

</style>