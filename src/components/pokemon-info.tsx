import { Box, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import CircularProgress from '@mui/material/CircularProgress'

import capitalizeFirtsLetter from '../utils/capitalize-first-letter'

import {
  selectPokemonInfo,
  selectPokemonLoading
} from '../store/features/pokemon/pokemonSlice'

const PokemonInfo = () => {
  const pokemon = useSelector(selectPokemonInfo)
  const isLoading = useSelector(selectPokemonLoading)

  if (!pokemon.name && (isLoading === 'idle')) return null

  return (
    <Box>
      {isLoading === 'pending'
        ? <CircularProgress />
        : <Box>
          <Typography fontWeight={'bold'}>
            {capitalizeFirtsLetter(pokemon.name)} experience:
          </Typography>
          <Typography fontWeight={'bold'}>
            {pokemon.base_experience || '-'}
          </Typography>
        </Box>
      }
    </Box>
  )
}

export default PokemonInfo
