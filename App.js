import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import StartPage from './pages/StartPage';
import SplashPage from './pages/SplashPage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashPage} options={{ headerShown: false }} />
        <Stack.Screen name="Start" component={StartPage} options={{ headerShown: false}}/>
        <Stack.Screen name="SignUp" component={SignUpPage} options={{headerTitle:"가입하기"}} />
        <Stack.Screen name="Login" component={LoginPage} options={{headerTitle:"로그인"}} />
        {/* <Stack.Screen name="Home" component={HomePage} options={{headerTitle:"로그인"}} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
