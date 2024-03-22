import { useState } from 'react'
import { TableCell, TableRow, TableSortLabel, Typography } from '@mui/material'

type Props = {
  onSetPokemonsSorted: () => void
}

const PokemonListHead = (props: Props) => {
  const { onSetPokemonsSorted } = props
  const [sortingOrder, setSortingOrder] = useState<'asc' | 'desc'>('asc')

  return (
    <TableRow>
      <TableCell
        sortDirection={sortingOrder}
        align='center'
      >
        <TableSortLabel
          active={true}
          direction={sortingOrder}
          onClick={() => {
            setSortingOrder(sortingOrder === 'asc' ? 'desc' : 'asc')
            onSetPokemonsSorted()
          }}
        >
          <Typography fontWeight={'bold'}>Pokemon name</Typography>
        </TableSortLabel>
      </TableCell>
    </TableRow>
  )
}

export default PokemonListHead
