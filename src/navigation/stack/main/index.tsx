import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreensName from '../../../constant/screensName';
import TabNavigation from '../../tab';

const MainStack = createNativeStackNavigator();

function MainStackNavigator() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name={ScreensName.MAIN}
        component={TabNavigation}
        options={{
          headerShown: false,
        }}
      />
    </MainStack.Navigator>
  );
}

export default MainStackNavigator;
