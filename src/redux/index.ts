import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import reducers from './stores';
import saga from '../sagas/auth';

export type RootState = ReturnType<typeof reducers>;

const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const store = configureStore({
  reducer: {
    todo: reducers,
  },
  middleware,
});

sagaMiddleware.run(saga);

export default store;
