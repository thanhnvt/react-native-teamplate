import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from 'redux-persist';
import { PersistConfig } from 'redux-persist/es/types';
import {
  applyMiddleware,
  compose,
  configureStore,
  StoreEnhancer,
} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import reducers from './stores';
import saga from '../sagas/auth';

export type RootState = ReturnType<typeof reducers>;

const sagaMiddleware = createSagaMiddleware();

const persistConfig: PersistConfig<RootState> = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  whitelist: ['auth'],
  throttle: 0,
};

const newEnhancer: StoreEnhancer = compose(applyMiddleware(sagaMiddleware));
const rootReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false, serializableCheck: false }),
  enhancers: [newEnhancer],
});

sagaMiddleware.run(saga);
export const persistor = persistStore(store);
export default store;
