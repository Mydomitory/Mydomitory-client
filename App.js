import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './SplashScreen'; 
import Home from './Home/Home'; 
import SignUp from './Home/SignUp'
import Login from './Home/Login'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false}}/>
        <Stack.Screen name="SignUp" component={SignUp} options={{headerTitle:"가입하기"}} />
        <Stack.Screen name="Login" component={Login} options={{headerTitle:"로그인"}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
