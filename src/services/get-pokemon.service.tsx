import axios from 'axios'

const getPokemonService = async (url: string) => {
    const { data } = (await axios.get(url))

    return data
  }

  export default getPokemonService
