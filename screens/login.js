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

  async function handleSignIn() {
    if (
      email === "" &&
      password === ""
    ) {
      Alert.alert("Enter Details to Log In!");
    } else {
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Signed In");
        const user = userCredential.user;
        console.log(user);
        navigation.replace("Homepage")
      })
      .catch((error) => {
        console.log(error);
        Alert.alert(error.message);
      });
    }
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

      <Text style={styles.washnclean_logo}>WashNClean</Text>

      <TextInput
        style={styles.inputView}
        placeholder="Email"
        placeholderTextColor="#00000073"
        value={email}
        onChangeText={(val) => setEmail(val)}
      />
      <TextInput
        style={styles.inputView}
        placeholder="Password"
        placeholderTextColor="#00000073"
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
    fontWeight: "bold",
    color: "#36565d"
  },

  loginButton: {
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

  loginText: {
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

  toSignup: {
    color: "#f5e1a1",
    textAlign: "center",
    fontWeight: "bold",
  },
});
export default LoginScreen
