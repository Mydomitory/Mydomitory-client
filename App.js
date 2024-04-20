import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashPage from './components/auth/SplashScreen'; 
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashPage} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomePage} options={{ headerShown: false}}/>
        <Stack.Screen name="SignUp" component={SignUpPage} options={{headerTitle:"가입하기"}} />
        <Stack.Screen name="Login" component={LoginPage} options={{headerTitle:"로그인"}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
