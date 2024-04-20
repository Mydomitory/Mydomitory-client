import React from "react";
import { View, Image, Text, TextInput,TouchableOpacity } from 'react-native';
import Logincss from '../../styles/Loincss'

export default function Login() {
  const handleLoginButtonPress = () =>{
    console.log('로그인 완');
  }
  return (
    <View style={Logincss.container}>
      <Image source={require('../../assets/logo.png')} style={Logincss.logo} />
      <Text style={Logincss.titleText}>My Domitory</Text>
      <View style={Logincss.textContainer}>
        <Text style={Logincss.text}>Login your Account</Text>
      </View>

      <View style={Logincss.TextInputContainer}>
        <TextInput
          style={Logincss.emailInput}
          placeholder="이메일"
        />

        <TextInput
          style={Logincss.passInput}
          placeholder="비밀번호"
        />
      </View>

      <TouchableOpacity onPress={handleLoginButtonPress} style={Logincss.Login}>
        <Text style={Logincss.LoginBtn}>로그인</Text>
      </TouchableOpacity>
    </View>
  );
};
