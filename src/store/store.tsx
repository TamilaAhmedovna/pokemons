import { configureStore } from '@reduxjs/toolkit'
import pokemonInfoReducer from './pokemonSlice'

export default configureStore({
    reducer: {
        pokemonInfo: pokemonInfoReducer
    },
})
