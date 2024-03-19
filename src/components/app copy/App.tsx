import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import './App.css'
import { useEffect, useState } from 'react'
import capitalizeFirtsLetter from '../../utils/capitalize-first-letter'
import getPokemonsService from '../../services/get-pokemons.service'
import getPokemonService from '../../services/get-pokemon.service'

type PokemonType = {
  name: string;
  url: string;
}

type ResponseType = {
  count: number;
  next: string;
  previous: string;
  results: PokemonType[];
}

function App() {
  const [pokemons, setPokemons] = useState<PokemonType[]>([])
  const [pokemonInfo, setPokemonInfo] = useState<any>([])

  useEffect(() => {
    async function getData() {
      const result = await getPokemonsService()
      setPokemons(result)
    }

    getData()
  }, [])

  return (
    <Box maxWidth={"200px"}>
      <TableContainer component={Paper}>
        <Table size="small" aria-label="Pokemon list">
          <TableHead>
            <TableRow>
              <TableCell sx={{fontWeight: "bold"}}>Pokemon name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pokemons.map((row) => (
              <TableRow
                key={row.name}
                onClick={async () => {
                  const result = await getPokemonService(row.name)
                  console.log(result)
                  setPokemonInfo(result)
                }}
                sx={{
                  "&:hover": {
                    cursor: "pointer"
                  }
                }}
              >
                <TableCell component="th" scope="row">
                  {capitalizeFirtsLetter(row.name)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box>
                {pokemonInfo.base_experience}
      </Box>
    </Box>
  )
}

export default App
