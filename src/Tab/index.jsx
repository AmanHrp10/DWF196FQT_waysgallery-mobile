import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'native-base';

//? Module
import Home from '../Routes/Home/index';
import MyProfile from '../Routes/Profile/index';
import Register from '../screens/Register/index';
import { AppContext } from '../context/AppContext';
import Login from '../screens/Login/index';

const Tab = () => {
  const [state] = useContext(AppContext);

  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      {!state.isLogin ? (
        <Stack.Navigator>
          <Stack.Screen
            component={Login}
            name='LoginScreen'
            options={{
              title: 'Login',
              headerShown: false,
            }}
          />
          <Stack.Screen
            component={Register}
            name='RegisterScreen'
            options={{
              title: 'Register',
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      ) : (
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: '#2fc4b2',
          }}
        >
          <Tab.Screen
            name='HomeScreen'
            component={Home}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color, size }) => {
                <Icon name='home-outline' color={color} size={size} />;
              },
            }}
          />
          <Tab.Screen
            name='ProfileScreen'
            component={MyProfile}
            options={{
              tabBarLabel: 'My Profile',
              tabBarIcon: ({ color, size }) => {
                <Icon
                  type='FontAwesome'
                  name='home'
                  android='md-home'
                  color={color}
                  size={size}
                />;
              },
            }}
          />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Tab;
