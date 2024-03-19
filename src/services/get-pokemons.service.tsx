import axios from "axios";
import { commonUrl } from "../config/config";

const getPokemonsService = async () => {
    const { data } = (await axios.get(`${commonUrl}/pokemon`));
    return data.results
}

export default getPokemonsService;