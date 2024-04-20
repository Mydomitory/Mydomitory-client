import React from 'react';
import { View, Image, Text, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Startcss from '../../styles/Startcss'


export default function Start() {
  const navigation = useNavigation();

  const handleLoginButtonPress = () => {
    navigation.navigate('Login');
  };

  const handleSingUpButtonPress = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={Startcss.container}>
      <View style={Startcss.logoContainer}>
        <Image source={require('../../assets/logo.png')} style={Startcss.logo} />
      </View>
      <View style={Startcss.title}>
        <Text style={Startcss.title_text}>My Domitory</Text>
      </View>
      <TouchableOpacity onPress={handleLoginButtonPress} style={Startcss.login}>
        <Text style={Startcss.loginBtn}>로그인</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSingUpButtonPress} style={Startcss.signUp}>
        <Text style={Startcss.SignUpBtn}>가입하기</Text>
      </TouchableOpacity>
    </View>
  );
};


