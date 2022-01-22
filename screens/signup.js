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
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

function SignUpScreen() {
  const [signupemail, setSignupEmail] = React.useState("");
  const [signuppassword, setSignUpPassword] = React.useState("");
  const [signuprepassword, setSignUpRePassword] = React.useState("");
  const [signupUsername, setSignUpUsername] = React.useState("");

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const firestore = getFirestore(app);

  const navigation = useNavigation()

  const handleSignUp = () => {
    if (
      signupUsername === "" &&
      signupemail === "" &&
      signuppassword === "" &&
      signuppassword === ""
    ) {
      Alert.alert("Enter Details to Sign Up!");
    } else {
      if (signuprepassword != signuppassword) {
        Alert.alert("Please Enter the same password!");
      } else {
        createUserWithEmailAndPassword(auth, signupemail, signuppassword)
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
    }
    navigation.replace("Homepage");
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
      <TextInput
        style={styles.inputView}
        placeholder="Name"
        placeholderTextColor="black"
        value={signupUsername}
        onChangeText={(val) => setSignUpUsername(val)}
      />
      <TextInput
        style={styles.inputView}
        placeholder="Email"
        placeholderTextColor="black"
        value={signupemail}
        onChangeText={(val) => setSignupEmail(val)}
      />
      <TextInput
        style={styles.inputView}
        placeholder="Password"
        placeholderTextColor="black"
        value={signuppassword}
        onChangeText={(val) =>
          setSignUpPassword(val)
        }
        secureTextEntry={true}
      />
      <TextInput
        style={styles.inputView}
        placeholder="Re-enter Password"
        placeholderTextColor="black"
        value={signuprepassword}
        onChangeText={(val) =>
          setSignUpRePassword(val)
        }
        secureTextEntry={true}
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
  },

  inputView: {
    backgroundColor: "white",
    borderRadius: 30,
    width: "90%",
    height: 45,
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 15,
    alignItems: "center",
    paddingLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 10,
    alignItems: "center",
    textAlign: "center",
  },

  signupButton: {
    width: "80%",
    borderWidth: 1,
    borderRadius: 25,
    borderColor: "black",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
    backgroundColor: "#FF1493",
    marginLeft: 40,
    marginRight: 40,
  },

  signupText: {
    fontWeight: "bold",
    color: "#ffffff",
  },

  loginorsignup: {
    marginTop: 10,
    textAlign: "center",
  },

  toLogin: {
    color: "yellow",
    textAlign: "center",
  },
});
export default SignUpScreen