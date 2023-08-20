/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
// import dotenv from 'dotenv';
// dotenv.config();

import React from 'react';

import LoginScreen from './pages/Login';
import DashboardScreen from './pages/Dashboard';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export const UrlContext = React.createContext(process.env.DATABASE_URL);
const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  const url: string | undefined =
    process.env.DATABASE_URL ?? 'http://103.175.219.31:8080/';

  return (
    <UrlContext.Provider value={url}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Dashboard" component={DashboardScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </UrlContext.Provider>
  );
}

export default App;
