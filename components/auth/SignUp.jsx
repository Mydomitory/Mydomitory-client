import React, { useState } from "react";
import { View, ScrollView, Text, TouchableOpacity, TextInput } from 'react-native';
import SignUpcss from "../../styles/SignUpcss";

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
    <ScrollView contentContainerStyle={SignUpcss.container}>
      <Text style={SignUpcss.text}>학교</Text>
      <TextInput
        style={SignUpcss.input}
        placeholder="학교"
      />

      <Text style={SignUpcss.text}>이름</Text>
      <TextInput
        style={SignUpcss.input}
        placeholder="이름"
      />

      <Text style={SignUpcss.text}>이메일</Text>
      <TextInput
        style={SignUpcss.input}
        placeholder="이메일"
      />

      <View style={SignUpcss.passInputContent}>
        <Text style={SignUpcss.text}>비밀번호</Text>
        <TextInput
          style={SignUpcss.passInput}
          placeholder="비밀번호"
          secureTextEntry={true}
          onChangeText={handlePasswordChange}
        />


        <TextInput
          style={SignUpcss.passInput}
          placeholder="비밀번호 확인"
          secureTextEntry={true}
          onChangeText={handleConfirmPasswordChange}
        />

        {passwordError ? <Text style={SignUpcss.errorText}>{passwordError}</Text> : null}
      </View>
      <TouchableOpacity onPress={handleSignUpButtonPress} style={SignUpcss.SignUp}>
        <Text style={SignUpcss.SignUpBtn}>가입하기</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};



export default SignUp;
