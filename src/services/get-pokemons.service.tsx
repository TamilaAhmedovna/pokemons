import axios from "axios";
import { commonUrl, pagination } from "../config/config";

const getPokemonsService = async (page: number = 1) => {
    const { data } = (await axios.get(
        `${commonUrl}/pokemon?offset=${(page - 1)*pagination.maxRowsPerPage}&&limit=${pagination.maxRowsPerPage}`
    ));

    return data
}

export default getPokemonsService;