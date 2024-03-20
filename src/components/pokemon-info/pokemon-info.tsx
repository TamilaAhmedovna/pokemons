import { Box } from "@mui/material"
import { useSelector } from "react-redux"
import { selectPokemonInfo, selectPokemonLoading } from "../../store/features/pokemon-info/pokemonSlice"
import CircularProgress from '@mui/material/CircularProgress';

const PokemonInfo = () => {
  const pokemon = useSelector(selectPokemonInfo)
  const isLoading = useSelector(selectPokemonLoading)
  if (!pokemon) return null

  return (
    <Box>
      {isLoading === 'pending'
        ? <CircularProgress />
        : pokemon.base_experience
      }
    </Box>
  )
}

export default PokemonInfo
