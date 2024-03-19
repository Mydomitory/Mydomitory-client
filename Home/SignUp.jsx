import React, { useState } from "react";
import { View, ScrollView, StyleSheet, Text, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform } from 'react-native';

const SignUp = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordMatched, setPasswordMatched] = useState(true);

  const handleSignUpButtonPress = () => {
    if (!password || !confirmPassword) {
      setPasswordError('비밀번호를 입력해주세요.');
      return;
    }

    if (password !== confirmPassword) {
      setPasswordError('비밀번호가 일치하지 않습니다.');
      setPasswordMatched(false);
      return;
    }

    console.log("가입완료");
    // 가입 처리 로직을 이곳에 추가하세요.
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
    if (!passwordMatched) {
      setPasswordMatched(true);
      setPasswordError('');
    }
  };

  const handleConfirmPasswordChange = (text) => {
    setConfirmPassword(text);
    if (!passwordMatched) {
      setPasswordMatched(true);
      setPasswordError('');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text}>학교</Text>
      <TextInput
        style={styles.input}
        placeholder="학교"
      />

      <Text style={styles.text}>이름</Text>
      <TextInput
        style={styles.input}
        placeholder="이름"
      />

      <Text style={styles.text}>이메일</Text>
      <TextInput
        style={styles.input}
        placeholder="이메일"
      />

      <View style={styles.passInputContent}>
        <Text style={styles.text}>비밀번호</Text>
        <TextInput
          style={styles.passInput}
          placeholder="비밀번호"
          secureTextEntry={true}
          onChangeText={handlePasswordChange}
        />


        <TextInput
          style={styles.passInput}
          placeholder="비밀번호 확인"
          secureTextEntry={true}
          onChangeText={handleConfirmPasswordChange}
        />

        {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
      </View>
      <TouchableOpacity onPress={handleSignUpButtonPress} style={styles.SignUp}>
        <Text style={styles.SignUpBtn}>가입하기</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingTop: 25,
  },
  input: {
    height: 45,
    marginBottom: 25,
    borderColor: "#D9D9D9",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  text: {
    marginLeft: 5,
    marginTop: 5,
    marginBottom: 5,
  },
  passInputContent:{
    marginTop:20,
  },
  passInput: {
    height: 45,
    marginBottom: 10,
    borderColor: "#D9D9D9",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  SignUp: {
    backgroundColor: "#FFC61B",
    borderRadius: 10,
    padding: 13,
    marginTop: 30,
  },
  SignUpBtn: {
    textAlign: 'center',
    color: "#5D5858",
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  }
});

export default SignUp;
