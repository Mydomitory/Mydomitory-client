import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Homecss from '../../styles/Homecss'



export default function Home() {
  const navigation = useNavigation();

  const handleLoginButtonPress = () => {
    navigation.navigate('Login');
  };

  const handleSingUpButtonPress = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={Homecss.container}>
      <View style={Homecss.logoContainer}>
        <Image source={require('../../assets/logo.png')} style={Homecss.logo} />
      </View>
      <View style={Homecss.title}>
        <Text style={Homecss.title_text}>My Domitory</Text>
      </View>
      <TouchableOpacity onPress={handleLoginButtonPress} style={Homecss.login}>
        <Text style={Homecss.loginBtn}>로그인</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSingUpButtonPress} style={Homecss.signUp}>
        <Text style={Homecss.SignUpBtn}>가입하기</Text>
      </TouchableOpacity>
    </View>
  );
};


