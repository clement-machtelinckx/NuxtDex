<script setup>
import { defineProps, computed, onMounted } from 'vue';
import { useMoveStoreResume } from '@/stores/pokeMoveResume';

const props = defineProps({
  moveName: {
    type: String,
    required: true
  }
});

const moveStore = useMoveStoreResume();

const move = computed(() => moveStore.move);
const isLoading = computed(() => moveStore.isLoading);
const error = computed(() => moveStore.error);

onMounted(() => {
  moveStore.fetchMoveResume(props.moveName);
});
</script>

<template>
  <div class="mt-16">
    <div v-if="isLoading">Chargement...</div>
    <div v-if="error">
      <v-alert type="error" class="mb-4">{{ error }}</v-alert>
    </div>
    <div v-if="move">
      <v-container class="pa-4">
        <v-card class="mx-auto" max-width="600" elevation="3">
          <v-card-title>
            <span class="text-h6">{{ move.name }}</span>
          </v-card-title>
          <v-card-subtitle>
            <strong>Type:</strong> {{ move.type.name }}
          </v-card-subtitle>
          <v-card-text>
            <p><strong>Puissance:</strong> {{ move.power || 'Non spécifiée' }}</p>
            <p><strong>Précision:</strong> {{ move.accuracy || 'Non spécifiée' }}</p>
            <p><strong>PP:</strong> {{ move.pp }}</p>
            <p><strong>Type de dégâts:</strong> {{ move.damage_class.name }}</p>
            <p><strong>Description:</strong> {{ move.effect_entries[0]?.effect || 'Aucune description disponible' }}</p>
          </v-card-text>
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

.v-card {
  padding: 16px;
}
</style>
