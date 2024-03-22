import { TableCell, TableRow } from '@mui/material'

import capitalizeFirtsLetter from '../utils/capitalize-first-letter'

type Props = { 
  name: string
  onGetPokemon: () => void
}

function PokemonListRow(props: Props) {
  const { name, onGetPokemon } = props

  return (
    <TableRow
      key={name}
      onClick={onGetPokemon}
      sx={{
        '&:hover': {
          cursor: 'pointer'
        }
      }}
    >
      <TableCell component='th' scope='row'>
        {capitalizeFirtsLetter(name)}
      </TableCell>
    </TableRow>
  )
}

export default PokemonListRow
