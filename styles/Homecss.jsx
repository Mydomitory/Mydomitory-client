import { StyleSheet } from "react-native";


const Homecss = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: "rgba(255, 244, 188, 0.38)",
  },
  logoContainer: {
    marginBottom: 20,
  },
  logo: {
    marginTop: 190,
    width: 100,
    height: 100,
  },
  title: {
    marginBottom: 20,
  },
  title_text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#F5CA00",
  },
  login: {
    marginTop: 240,
    borderColor: "#F5CA00",
    borderWidth: 2,
    padding: 13,
    borderRadius: 10,
    width: 300,
  },
  signUp: {
    marginTop: 28,
    backgroundColor: "#FFC61B",
    padding: 13,
    borderRadius: 10,
    width: 300,
  },
  loginBtn: {
    color: 'rgba(93, 88, 88, 0.94)',
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
  },
  SignUpBtn: {
    color: 'rgba(93, 88, 88, 0.94)',
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
  },
});

export default Homecss;