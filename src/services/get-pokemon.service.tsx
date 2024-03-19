import axios from "axios";
import { commonUrl } from "../config/config";

const getPokemonService = async (name: string) => {
    const { data } = (await axios.get(`${commonUrl}/pokemon/${name}`));
    return data
  }

  export default getPokemonService;
