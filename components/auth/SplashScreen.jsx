import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native'; 

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Home'); 
    }, 2000); 

    return () => clearTimeout(timer); 
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
      <Text style={styles.text}>MY Domitory</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', 
  },
  logo: {
    width: 100, 
    height: 100, 
  },
  text:{
    color:"#F5CA00",
    marginTop: '10%',
    fontSize: 20,
    fontWeight: '800',
  }
});

export default SplashScreen;
