import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { useEffect, useState } from 'react'
import getPokemonsService from '../../services/get-pokemons.service'
import PokemonListItem from '../pokemon-list-item/pokemon-list-item'
import { PokemonType } from '../../models/models'
import { useDispatch, useSelector } from 'react-redux'
import { pokemonRequested, selectPokemonInfo } from '../../store/features/pokemon-info/pokemonSlice'

function PokemonList() {
  const [pokemons, setPokemons] = useState<PokemonType[]>([])
  const dispatch = useDispatch()
  const pokemon = useSelector(selectPokemonInfo)

  const getPokemon = async (name: string) => {
    if (pokemon.name === name) return null
    
    dispatch(pokemonRequested({ name }))
  }

  useEffect(() => {
    async function getData() {
      const result = await getPokemonsService()
      setPokemons(result)
    }

    getData()
  }, [])

  return (
    <TableContainer component={Paper}>
    <Table size="small" aria-label="Pokemon list">
      <TableHead>
        <TableRow>
          <TableCell sx={{fontWeight: "bold"}}>
            Pokemon name
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {pokemons.map((item) => (
          <PokemonListItem 
            onGetPokemon={getPokemon}
            key={item.name} 
            name={item.name} 
          />
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default PokemonList
