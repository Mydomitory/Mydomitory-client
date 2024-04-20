import React from "react";
import { StyleSheet } from "react-native";


const Splashcss = StyleSheet.create({
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

export default Splashcss;