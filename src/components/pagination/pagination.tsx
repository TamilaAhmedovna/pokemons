import { Pagination } from '@mui/material'

function PaginationComponent(
  {pagesAmount, currentPage, onChangePage}: {
    pagesAmount: number, 
    currentPage: number,
    onChangePage: (page: number) => void
  }) {

  return (
    <Pagination 
        count={pagesAmount}
        siblingCount={0}
        page={currentPage}
        boundaryCount={1}
        onChange={(event, page) => onChangePage(page)}
      />
  )
}

export default PaginationComponent
