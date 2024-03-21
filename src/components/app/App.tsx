import { Box } from '@mui/material'
import PokemonList from '../pokemon-list/pokemon-list'
import PokemonInfo from '../pokemon-info/pokemon-info'
import './App.css'

function App() {

  return (
    <Box maxWidth={'200px'}>
      <PokemonList />
      <PokemonInfo />
    </Box>
  )
}

export default App
