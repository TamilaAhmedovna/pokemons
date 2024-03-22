import axios from 'axios'
import { api, pagination } from '../config/config'

const getPokemonsService = async (page: number = 1) => {
    const { data } = (await axios.get(
        `${api.commonUrl}/pokemon?offset=${(page - 1)*pagination.maxRowsPerPage}&&limit=${pagination.maxRowsPerPage}`
    ))

    return data
}

export default getPokemonsService