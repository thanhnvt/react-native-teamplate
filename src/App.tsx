import React from 'react'
import { Provider } from 'react-redux';
import LoginScreen from './screens/home'
import store from './redux'

const App=()=>{
    return(
        <Provider store={store}>
            <LoginScreen/>
        </Provider>
    )
}

export default App;