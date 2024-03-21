import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import getPokemonsService from '../../services/get-pokemons.service'
import PokemonListItem from '../pokemon-list-item/pokemon-list-item'
import { useDispatch, useSelector } from 'react-redux'
import { pokemonRequested, selectPokemonInfo } from '../../store/features/pokemon/pokemonSlice'
import { PokemonType } from '../../models/models'
import PaginationComponent from '../pagination/pagination'
import sortPokemonsByAsc from '../../utils/sort-pokemons-by-asc'
import { pagination } from '../../config/config'

function PokemonList() {
  const [pokemonsSorted, setPokemonsSorted] = useState<PokemonType[]>([])
  const [count, setCount] = useState<number>(0)
  const [sortingOrder, setSortingOrder] = useState<'asc' | 'desc'>('asc')
  const [currentPage, setCurrentPage] = useState<number>(1)

  const dispatch = useDispatch()
  const pokemon = useSelector(selectPokemonInfo)

  useEffect(() => {
    getPokemons(currentPage)
  }, [])
  
  const getPokemon = async (name: string) => {
    if (pokemon.name === name) return null

    dispatch(pokemonRequested({ name }))
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
      <TableContainer component={Paper}>
        <Table size="small" aria-label="Pokemon list">
          <TableHead>
            <TableRow>
              <TableCell
                sortDirection={sortingOrder}
              >
                <TableSortLabel
                  active={true}
                  direction={sortingOrder}
                  onClick={() => {
                    setSortingOrder(sortingOrder === 'asc' ? 'desc' : 'asc')
                    setPokemonsSorted(state => state.toReversed())
                  }}
                >
                  <Typography fontWeight={"bold"}>Pokemon name</Typography>
                </TableSortLabel>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pokemonsSorted.map(({ name }) => (
              <PokemonListItem
                onGetPokemon={getPokemon}
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
