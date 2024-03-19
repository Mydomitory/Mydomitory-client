import React from "react";
import { View, StyleSheet, Image, Text, TextInput,TouchableOpacity } from 'react-native';


const Login = () => {
  const handleLoginButtonPress = () =>{
    console.log('로그인 완');
  }
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.titleText}>My Domitory</Text>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Login your Account</Text>
      </View>

      <View style={styles.TextInputContainer}>
        <TextInput
          style={styles.emailInput}
          placeholder="이메일"
        />

        <TextInput
          style={styles.passInput}
          placeholder="비밀번호"
        />
      </View>

      <TouchableOpacity onPress={handleLoginButtonPress} style={styles.Login}>
        <Text style={styles.LoginBtn}>로그인</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    paddingLeft: 20,
  },
  logo: {
    marginTop: 30,
    marginLeft: 110,
    width: 100,
    height: 100,
  },
  titleText: {
    marginLeft: 100,
    marginTop: 10,
    fontSize: 20,
    color: "#F5CA00",
    fontWeight: 'bold',
  },
  textContainer: {
    marginTop: 20,
  },
  text: {
    color: 'rgba(0, 0, 0, 0.55)',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 50,
    marginLeft: 10,
  },
  TextInputContainer: {
    marginTop: 30,
  },
  emailInput: {
    marginBottom: 20,
    borderColor: 'rgba(0, 0, 0, 0.12)',
    padding: 10,
    borderWidth: 2,
    marginTop: 10,
    borderRadius: 10,
    width: 320,
  },
  passInput: {
    borderColor: 'rgba(0, 0, 0, 0.12)',
    padding: 10,
    borderWidth: 2,
    marginTop: 10,
    borderRadius: 10,
    width: 320,
  },
  LoginBtn:{
    backgroundColor:"#FFC61B",
    padding:13,
    marginTop:40,
    width:320,
    textAlign:'center',
    borderRadius:10,
  },
});

export default Login;
