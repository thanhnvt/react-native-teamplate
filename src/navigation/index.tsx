import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import AuthStackNavigation from './stack/auth';
import MainStackNavigator from './stack/main';
import { RootState } from '../redux';
import { navigationRef } from './actions';

function AppNavigation() {
  const { isLogin } = useSelector((state: RootState) => state.auth);
  return (
    <NavigationContainer ref={navigationRef}>
      {!isLogin ? <AuthStackNavigation /> : <MainStackNavigator />}
    </NavigationContainer>
  );
}

export default AppNavigation;
