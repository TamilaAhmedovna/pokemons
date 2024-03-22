import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Paper, Table, TableBody, TableContainer, TableHead, } from '@mui/material'

import getPokemonsService from '../services/get-pokemons.service'
import PokemonListRow from './pokemon-list-row'
import { pokemonRequested, selectPokemonInfo } from '../store/features/pokemon/pokemonSlice'
import { PokemonType } from '../models/models'
import PaginationComponent from './pagination'
import sortPokemonsByAsc from '../utils/sort-pokemons-by-asc'
import { pagination } from '../config/config'
import PokemonListHead from './pokemon-list-head'

function PokemonList() {
  const [pokemonsSorted, setPokemonsSorted] = useState<PokemonType[]>([])
  const [count, setCount] = useState<number>(0)
  const [currentPage, setCurrentPage] = useState<number>(1)

  const dispatch = useDispatch()
  const pokemon = useSelector(selectPokemonInfo)

  useEffect(() => {
    getPokemons(currentPage)
  }, [])

  const getPokemon = async (name: string, url: string) => {
    if (pokemon.name === name) return null

    dispatch(pokemonRequested({ url }))
  }

  const getPokemons = async (page: number) => {
    const { count, results } = await getPokemonsService(page)
    setCount(count)
    setPokemonsSorted(sortPokemonsByAsc(results))
  }

  const changePage = (page: number) => {
    setCurrentPage(page)
    getPokemons(page)
  }

  return (
    <Box>
      <TableContainer component={Paper} >
        <Table size='medium' aria-label='Pokemon list'>
          <TableHead>
            <PokemonListHead
              onSetPokemonsSorted={() => setPokemonsSorted(state => state.toReversed())}
            />
          </TableHead>
          <TableBody>
            {pokemonsSorted.map(({ name, url }) => (
              <PokemonListRow
                onGetPokemon={() => getPokemon(name, url)}
                key={name}
                name={name}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <PaginationComponent
        pagesAmount={Math.ceil(count / pagination.maxRowsPerPage)}
        currentPage={currentPage}
        onChangePage={changePage}
      />
    </Box>
  )
}

export default PokemonList
