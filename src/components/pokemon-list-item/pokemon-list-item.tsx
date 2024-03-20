import { TableCell, TableRow } from '@mui/material'
import './pokemon-list-item.css'
import capitalizeFirtsLetter from '../../utils/capitalize-first-letter'

type Props = { 
  name: string
  onGetPokemon: (name: string) => void
}

function PokemonListItem(props: Props) {
  const { name, onGetPokemon } = props

  return (
    <TableRow
      key={name}
      onClick={() => onGetPokemon(name)}
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
