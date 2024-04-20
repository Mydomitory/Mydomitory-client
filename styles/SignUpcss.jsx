import { StyleSheet } from "react-native";

const SignUpcss = StyleSheet.create({
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
    marginTop: 30 ,
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

export default SignUpcss;