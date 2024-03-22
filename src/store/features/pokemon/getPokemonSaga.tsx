import { call, put, takeEvery, delay } from 'redux-saga/effects'

import { pokemonReceived, pokemonRequested } from './pokemonSlice'
import getPokemonService from '../../../services/get-pokemon.service'

const performRandomDelay = () => {
    const delayLevel = 1500
    return delay(Math.random() * delayLevel)
}

// Worker saga will be fired on pokemonRequested actions
function* workerSaga(action: { payload: { url: string } }): any {
    try {
        const pokemon = yield call(getPokemonService, action.payload.url)
        yield performRandomDelay()
        yield put(pokemonReceived(pokemon))
    } catch (e: any) {
        console.error(e)
    }
}

// Starts workerSaga on each dispatched pokemonRequested action
export function* watcherSaga() {
    yield takeEvery(pokemonRequested, workerSaga)
}