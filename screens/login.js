import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  ActivityIndicator,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase";
import { useNavigation } from "@react-navigation/native";

function LoginScreen() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const navigation = useNavigation()

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Signed In");
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
        Alert.alert(error.message);
      });
      navigation.replace("Homepage")
  };

//   userLogin = () => {
//     if (this.state.email === "" && this.state.password === "") {
//       Alert.alert("Enter your login details!");
//     } else {
//       this.setState({ isLoading: true });
//     }

//     auth()
//       .signInWithEmailAndPassword(this.state.email, this.state.password)
//       .then((res) => {
//         console.log(res);
//         console.log("User logged in successfully!");
//         this.setState({
//           isLoading: false,
//           email: "",
//           password: "",
//         });
//         this.props.navigation.navigate("Homepage");
//       })
//       .catch((error) => this.setState({ errorMessage: error.message }));
//   };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputView}
        placeholder="Email"
        placeholderTextColor="black"
        value={email}
        onChangeText={(val) => setEmail(val)}
      />
      <TextInput
        style={styles.inputView}
        placeholder="Password"
        placeholderTextColor="black"
        value={password}
        onChangeText={(val) => setPassword(val)}
        secureTextEntry={true}
      />

      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton}
        onPress = {handleSignIn}
      >
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.loginorsignup}>Don't have an account?</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("SignUpScreen")}
      >
        <Text style={styles.toSignup}>Sign Up</Text>
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
    width: "70%",
    height: 45,
    marginBottom: 20,
    marginLeft: 50,
    marginRight: 50,
    alignItems: "center",
    paddingLeft: 20,
  },

  // TextInput: {
  //     height: 50,
  //     flex: 1,
  //     padding: 10,
  //     marginLeft: 20,
  //     alignItems: "center",
  //     marginRight: 20,
  // },

  forgot_button: {
    height: 30,
    marginBottom: 10,
    alignItems: "center",
    textAlign: "center",
  },

  loginButton: {
    width: "80%",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
    backgroundColor: "#FF1493",
    marginLeft: 40,
    marginRight: 40,
  },

  loginText: {
    fontWeight: "bold",
    color: "#ffffff",
  },

  loginorsignup: {
    marginTop: 10,
    textAlign: "center",
  },

  toSignup: {
    color: "yellow",
    textAlign: "center",
  },
});
export default LoginScreen
