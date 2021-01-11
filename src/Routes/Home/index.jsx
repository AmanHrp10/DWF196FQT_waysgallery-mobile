import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//? Module
import Home from '../../screens/Home/index';

export default function StackRouteHome() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Home}
        name='HomeScreen'
        options={{
          title: 'Home',
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
}
