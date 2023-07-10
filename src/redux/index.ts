import {configureStore} from '@reduxjs/toolkit'
import reducers from './stores'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: reducers,
    middleware:[sagaMiddleware]
})

export default store