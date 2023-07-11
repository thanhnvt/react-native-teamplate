import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import reducers from './stores'
import saga from '../sagas/auth'

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware];

const store = configureStore({
    reducer: reducers,
    middleware,
})

sagaMiddleware.run(saga);

export default store