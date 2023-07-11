import React from 'react'
import { Provider } from 'react-redux';
import store from './redux'
import RootScreen from './screens/rootScreen';

const App=()=>{
    return(
        <Provider store={store}>
            <RootScreen/>
        </Provider>
    )
}

export default App;