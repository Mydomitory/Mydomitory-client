import React, { useEffect } from 'react';
import { View, Image, Text } from 'react-native'; 
import Splashcss from '../../styles/Splashcss';
import { useNavigation } from '@react-navigation/native'; 

const SplashScreen = () => {
  const navigation = useNavigation(); 

  useEffect(() => {
    if (navigation) { 
      const timer = setTimeout(() => {
        navigation.replace('Start'); 
      }, 2000); 

      return () => clearTimeout(timer); 
    }
  }, [navigation]);

  return (
    <View style={Splashcss.container}>
      <Image source={require('../../assets/logo.png')} style={Splashcss.logo} />
      <Text style={Splashcss.text}>MY Domitory</Text>
    </View>
  );
};

export default SplashScreen;
