import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//? Module
import Profile from '../../screens/Profile/index';

export default function StackRouteHome() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Profile}
        name='ProfileScreen'
        options={{
          title: 'My Profile',
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
}
