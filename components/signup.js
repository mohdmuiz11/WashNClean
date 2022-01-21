import React ,{ Component } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator, Touchable } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { auth } from "../firebase";



export default class SignUp extends Component {

    constructor() {
        super();
        this.state = {
            username: '',
            signupemail: '',
            signuppassword: '',
            signuprepassword: '',
            signupisLoading: false,
        }
    }

    updateSignUpInputValue = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
    }

    handleSignUp = () => {

        if(this.state.email === '' && this.state.password === '') {
            Alert.alert('Enter details to Sign Up!');
        } else {
            if(this.state.signuppassword != this.state.signuprepassword) {
                Alert.alert('Please enter the same password!');
            } else {
                this.setState({
                    signupisLoading: true,
                });
            }
        }
        auth
          .createUserWithEmailAndPassword(this.state.signupemail, this.state.signuppassword)
          .then((res) => {
            res.user.updateProfile({
              displayName: this.state.displayName
            })
            console.log('User registered successfully!')
            this.setState({
              isLoading: false,
              displayName: '',
              email: '', 
              password: ''
            })
            this.props.navigation.navigate('Login')
          })
          .catch(error => this.setState({ errorMessage: error.message }));
          
          this.navigation.navigate('Login');
    }

    // userLogin = () => {
    //     if (this.state.email === '' && this.state.password === '') {
    //         Alert.alert('Enter your login details!');
    //     } else {
    //         this.setState({isLoading: true,});
    //     }

    //     auth()
    //         .signInWithEmailAndPassword(this.state.email, this.state.password)
    //         .then((res) => {
    //             console.log(res);
    //             console.log('User logged in successfully!')
    //             this.setState({
    //                 isLoading: false,
    //                 email: '',
    //                 password: '',
    //             })
    //             this.props.navigation.navigate('Homepage')
    //         })
    //         .catch(error => this.setState({errorMessage: error.message}));
    // }

    registerUser = () => {
        if(this.state.email === '' && this.state.password === '') {
          Alert.alert('Enter details to signup!');
        } else {
            if(this.state.signuppassword != this.state.signuprepassword) {
                Alert.alert('Please enter the same password');
          } else {
              this.setState({
                  isLoading: true,
              })
          }
            }
          
          auth()
          .createUserWithEmailAndPassword(this.state.signupemail, this.state.signuppassword)
          .then((res) => {
            res.user.updateProfile({
              displayName: this.state.displayName
            })
            console.log('User registered successfully!')
            this.setState({
              isLoading: false,
              displayName: '',
              email: '', 
              password: ''
            })
            this.props.navigation.navigate('Login')
          })
          .catch(error => this.setState({ errorMessage: error.message }));
          
          this.navigation.navigate('Login');
        }



    render() {
        if(this.state.isLoading) {
            return(
                <View style={style.preloader}>
                    <ActivityIndicator size='large' color='#9E9E9E'/>
                </View>
            )
        }
        return (
            <View style={styles.container}>
                <TextInput style={styles.inputView}
                    placeholder="Name"
                    placeholderTextColor= "black"
                    value={this.state.email}
                    onChangeText={(val) => this.updateSignUpInputValue(val, 'username')}
                />
                <TextInput style={styles.inputView}
                    placeholder="Email"
                    placeholderTextColor= "black"
                    value={this.state.email}
                    onChangeText={(val) => this.updateSignUpInputValue(val, 'signupemail')}
                />
                <TextInput style={styles.inputView}
                    placeholder="Password"
                    placeholderTextColor= "black"
                    value={this.state.email}
                    onChangeText={(val) => this.updateSignUpInputValue(val, 'signuppassword')}
                    secureTextEntry={true}
                />
                <TextInput style={styles.inputView}
                    placeholder="Re-enter Password"
                    placeholderTextColor= "black"
                    value={this.state.password}
                    onChangeText={(val) => this.updateSignUpInputValue(val, 'signuprepassword')}
                    secureTextEntry={true}
                />

                <TouchableOpacity style={styles.signupButton}
                    onPress={() => this.handleSignUp()}
                >
                    <Text style={styles.signupText}>Sign Up</Text>
                </TouchableOpacity>

                <Text style={styles.loginorsignup}>Have an account?</Text>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Login')}
                >
                    <Text style={styles.toLogin}>Log In</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
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
        alignItems: 'center',
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
        backgroundColor: '#FF1493',
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
})