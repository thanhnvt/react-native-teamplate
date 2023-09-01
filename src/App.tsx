import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import store, { persistor } from './redux';
import RootScreen from './screens/rootScreen';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RootScreen />
      </PersistGate>
    </Provider>
  );
}

export default App;
