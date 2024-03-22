import { Box } from '@mui/material'

import PokemonList from './pokemon-list'
import PokemonInfo from './pokemon-info'

function App() {

  return (
    <Box maxWidth={'300px'} m={'0 auto'}>
      <PokemonList />
      <PokemonInfo />
    </Box>
  )
}

export default App
