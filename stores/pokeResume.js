import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePokeResume = defineStore('pokeResume', () => {

  const pokemon = ref(null)
  const loading = ref(false)
  const error = ref(null)

  const fetchPokemon = async (name) => {
    loading.value = true
    error.value = null

    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      const data = await response.json()  
      pokemon.value = data  
    } catch (err) {
      error.value = err 
    } finally {
      loading.value = false  
      savePokemon(pokemon.value)
    }
  }

  const savePokemon = async (pokemon) => {
    try {
      const existingPokemonResponse = await fetch(`http://localhost:4041/api/pokemons/pokeId/${pokemon.game_indices[3].game_index}`)
      const existingPokemon = await existingPokemonResponse.json()

      if (existingPokemon.exist == true) {
        console.log('Pokémon with this pokeId already exists:', existingPokemon)
        return
      }

      const response = await fetch('http://localhost:4041/api/pokemons', {
        method: 'POST',
        headers: { 'Content-Type': 'application/ld+json' },
        body: JSON.stringify({
          name: pokemon.name,
          pokeId: pokemon.game_indices[3].game_index,
          height: pokemon.height,
          weight: pokemon.weight,
          hp: pokemon.stats[0].base_stat,
          attack: pokemon.stats[1].base_stat,
          defence: pokemon.stats[2].base_stat,
          specialAttack: pokemon.stats[3].base_stat,
          specialDefence: pokemon.stats[4].base_stat,
          speed: pokemon.stats[5].base_stat,
        }),
      })
      if (!response.ok) {
        throw new Error('Failed to save Pokémon')
      }
    } catch (err) {
      console.error('Error saving Pokémon:', err)
    }
  }

  return { pokemon, loading, error, fetchPokemon }
})
