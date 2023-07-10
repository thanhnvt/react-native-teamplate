import {configureStore} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import reducers from './stores'
import saga from '../sagas'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), sagaMiddleware],
})

sagaMiddleware.run(saga);

export default store