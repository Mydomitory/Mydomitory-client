import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native'; // Image와 StyleSheet 모듈 추가

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login'); // 스플래시 화면을 로그인 화면으로 교체
    }, 2000); // 2초 후에 로그인 화면으로 교체 (시간은 필요에 따라 조정 가능)

    return () => clearTimeout(timer); // 컴포넌트가 언마운트될 때 타이머 해제
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
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
