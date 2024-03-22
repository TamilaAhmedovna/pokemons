import { PokemonType } from '../models/models'

const sortPokemonsByAsc = (pokemons: PokemonType[]) => {
  return pokemons.sort((a, b) => {
    if (a.name < b.name) {
      return -1
    }
    if (a.name > b.name) {
      return 1
    }
    return 0
  })
}

export default sortPokemonsByAsc
