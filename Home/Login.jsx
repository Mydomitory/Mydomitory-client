import React from "react";
import { View, StyleSheet, Image, Text } from 'react-native';


const Login = () => {
  return (
    <View style={styles.container}> 
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <Text style={styles.text}>My Domitory</Text>
    </View>
  )
};


const styles = StyleSheet.create({
  container:{
    alignItems:"center",
    marginTop:50,
  },
  logo:{
    width:100,
    height:100,
  },
  text:{
    marginTop:10,
    fontSize:20,
    color:"#F5CA00",
    fontWeight:'bold',
  },
});

export default Login;