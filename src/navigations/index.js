import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Custom Component
import Home from '../screens/Home/Home';
import { useTheme } from '@rneui/themed';


const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  const { theme } = useTheme();
  return (
    <NavigationContainer
      theme={theme}// use theme as RN Element's theme
    >
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
