import React from 'react';
import {View} from 'react-native'
import { NavigationContainer } from "@react-navigation/native"
import AuthStackNavigation from './stack/auth';
import MainStackNavigator from './stack/main';
import { useSelector } from 'react-redux';
import { AuthStates } from '../redux/stores/auth';

const AppNavigation=()=>{
    const isLogin = useSelector((state: any) => state.todo.auth.isLogin)    
    return (
      <NavigationContainer>
        {
          !isLogin?<AuthStackNavigation/>:<MainStackNavigator/>
        }
      </NavigationContainer>
    );
  }

  export default AppNavigation