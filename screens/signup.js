import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  ActivityIndicator,
  Touchable,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase";
import { getFirestore, setDoc, doc, collection, addDoc} from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

function SignUpScreen() {
  const [signupemail, setSignupEmail] = React.useState("");
  const [signuppassword, setSignUpPassword] = React.useState("");
  const [signuprepassword, setSignUpRePassword] = React.useState("");
  const [signupUsername, setSignUpUsername] = React.useState("");
  const [signupAddress, setSignUpAddress] = React.useState("");

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const firestore = getFirestore(app);

  const navigation = useNavigation()

  async function handleSignUp() {
    if (
      signupUsername === "" &&
      signupemail === "" &&
      signuppassword === "" &&
      signuppassword === "" &&
      signupAddress === ""
    ) {
      Alert.alert("Enter Details to Sign Up!");
    } else {
      if (signuprepassword != signuppassword) {
        Alert.alert("Please Enter the same password!");
      } else {
        await createUserWithEmailAndPassword(auth, signupemail, signuppassword)
          .then((userCredential) => {
            console.log("Account Created");
            const user = userCredential.user;
            console.log(user);
            const data = {
              username: signupUsername,
              email: signupemail,
              uid: auth.currentUser.uid,
            }
            const userProfile = doc(firestore, 'users', auth.currentUser.email)
            const docData = {
              'username': signupUsername,
              'email': auth.currentUser.email,
              'uid': auth.currentUser.uid,
              'address': signupAddress,
            }
            setDoc(userProfile, docData)
            .then(() => {
              console.log('User Profile Added')
            }).catch((error) => {
              console.log(error);
              Alert.alert(error.message);
            })
            
          })
          .catch((error) => {
            console.log(error);
            Alert.alert(error.message);
          });
      }
      navigation.replace("Homepage"); 
    }    
  };

  //   registerUser = () => {
  //     if (this.state.email === "" && this.state.password === "") {
  //       Alert.alert("Enter details to signup!");
  //     } else {
  //       if (this.state.signuppassword != this.state.signuprepassword) {
  //         Alert.alert("Please enter the same password");
  //       } else {
  //         this.setState({
  //           isLoading: true,
  //         });
  //       }
  //     }
  return (
    <View style={styles.container}>
      
      <Text style={styles.washnclean_logo}>WashNClean</Text>
      <TextInput
        style={styles.inputView}
        placeholder="Name"
        placeholderTextColor= "#00000073"
        value={signupUsername}
        onChangeText={(val) => setSignUpUsername(val)}
      />
      <TextInput
        style={styles.inputView}
        placeholder="Email"
        placeholderTextColor="#00000073"
        value={signupemail}
        onChangeText={(val) => setSignupEmail(val)}
      />
      <TextInput
        style={styles.inputView}
        placeholder="Password"
        placeholderTextColor="#00000073"
        value={signuppassword}
        onChangeText={(val) =>
          setSignUpPassword(val)
        }
        secureTextEntry={true}
      />
      <TextInput
        style={styles.inputView}
        placeholder="Re-enter Password"
        placeholderTextColor="#00000073"
        value={signuprepassword}
        onChangeText={(val) =>
          setSignUpRePassword(val)
        }
        secureTextEntry={true}
      />
      <TextInput
        style={styles.inputView}
        multiline={true}
        numberOfLines={3}
        placeholder="Address"
        placeholderTextColor= "#00000073"
        value={signupAddress}
        onChangeText={(val) => setSignUpAddress(val)}
      />

      <TouchableOpacity
        style={styles.signupButton}
        onPress={handleSignUp}
      >
        <Text style={styles.signupText}>Sign Up</Text>
      </TouchableOpacity>

      <Text style={styles.loginorsignup}>Have an account?</Text>
      <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
        <Text style={styles.toLogin}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#2e9cc5",
  },

  washnclean_logo: {
    fontSize: 60,
    textAlign: "center",
    marginBottom: 15,
    fontStyle: "normal",
    fontWeight: "bold",
    color: "white",
  },

  inputView: {
    backgroundColor: "white",
    borderRadius: 20,
    width: "80%",
    height: 55,
    marginBottom: 10,
    marginLeft: 40,
    marginRight: 40,
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },

  forgot_button: {
    height: 30,
    marginBottom: 10,
    alignItems: "center",
    textAlign: "center",
  },

  signupButton: {
    width: "80%",
    borderWidth: 3,
    borderColor: "white",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
    backgroundColor: "#0000ff",
    marginLeft: 40,
    marginRight: 40,
  },

  signupText: {
    fontWeight: "bold",
    color: "#ffffff",
    fontSize: 18,
  },

  loginorsignup: {
    marginTop: 10,
    textAlign: "center",
    color: "#36565d",
    fontWeight: "bold",
  },

  toLogin: {
    color: "#f5e1a1",
    textAlign: "center",
    fontWeight: "bold",
  },
});
export default SignUpScreen