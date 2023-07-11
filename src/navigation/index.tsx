import React from 'react';
import {View} from 'react-native'
import { NavigationContainer } from "@react-navigation/native"
import AuthStackNavigation from './stack/auth';
import MainStackNavigator from './stack/main';

const AppNavigation=()=>{
    const isAuth = false
    return (
      <NavigationContainer>
        {
          !isAuth?<AuthStackNavigation/>:<MainStackNavigator/>
        }
      </NavigationContainer>
    );
  }

  export default AppNavigation