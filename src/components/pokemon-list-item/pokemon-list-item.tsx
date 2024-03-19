import { TableCell, TableRow } from '@mui/material'
import './pokemon-list-item.css'
import capitalizeFirtsLetter from '../../utils/capitalize-first-letter'
import getPokemonService from '../../services/get-pokemon.service'
import { useDispatch } from 'react-redux'
import { pokemonReceived, pokemonLoading } from '../../store/pokemonSlice'

function PokemonListItem({ name }: { name: string }) {
  const dispatch = useDispatch()

  const getPokemon = async () => {
    dispatch(pokemonLoading())
    const result = await getPokemonService(name)
    dispatch(pokemonReceived(result))
  }

  return (
    <TableRow
      key={name}
      onClick={getPokemon}
      sx={{
        "&:hover": {
          cursor: "pointer"
        }
      }}
    >
      <TableCell component="th" scope="row">
        {capitalizeFirtsLetter(name)}
      </TableCell>
    </TableRow>
  )
}

export default PokemonListItem
