import { configureStore } from '@reduxjs/toolkit'
import pokemonInfoReducer from './features/pokemon-info/pokemonSlice'
import createSagaMiddleware from 'redux-saga'
import { watcherSaga } from './features/pokemon-info/getPokemonSaga'

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

export default configureStore({
    reducer: {
        pokemonInfo: pokemonInfoReducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(middleware)
})

// Run the saga effects
sagaMiddleware.run(watcherSaga)
