import React from 'react';
import {Text, View, Image, TouchableOpacity, Alert} from 'react-native';
import {stylesWNC} from '../screens/stylesWNC';
import { useNavigation } from '@react-navigation/native';
import { getAuth} from "firebase/auth";
import { firebaseConfig } from "../firebase";
import { initializeApp } from "firebase/app";

//Nor Bedriah Binti Munadi
const Profile = () => {  

    const navigation = useNavigation()
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const handleSginOut = () =>
    auth
    .signOut()
    .then (() => {
        navigation.navigate("Login")
        Alert.alert('Are you sure want to sign out?')
    }) 

    return (
<View style={stylesWNC.container}>
  {/* syntax for big title at the top of the screen for WashNClean */}
  <Text style={stylesWNC.TopTitle}>WashNClean</Text>

<Text style={{top:'10%', left:'-30%', fontSize:20}}>Email: </Text>
<Text style={{top:'6%', left:'20%', fontSize:20}}>{auth.currentUser?.email}</Text>

<TouchableOpacity
         style={stylesWNC.buttonSignOut}
         onPress={handleSginOut}>
         <Text style={stylesWNC.textSignOut}>Sign Out</Text>
</TouchableOpacity>
 
  {/* from here to below are navigation syntax navigate to related screen */}
  <TouchableOpacity style={stylesWNC.CHome} onPress={() => navigation.navigate("Homepage")}>  
    <Text style={stylesWNC.navtext}>Home</Text>
    <Image style={stylesWNC.Homepage} source={require('../assets/home.png')}/>
  </TouchableOpacity>
  
  <TouchableOpacity style={stylesWNC.CLocation} onPress={() => navigation.navigate()}>
    <Text style={stylesWNC.navtext}>Location</Text>
    <Image style={stylesWNC.Location} source={require('../assets/location.png')}/>
  </TouchableOpacity>

  <TouchableOpacity style={stylesWNC.CTracker} onPress={() => navigation.navigate()}>
    <Text style={stylesWNC.navtext}>Tracker</Text>
    <Image style={stylesWNC.Tracker} source={require('../assets/track.png')}/>
  </TouchableOpacity>
  
  <View style={stylesWNC.CProfile}>
  <Text style={stylesWNC.navtext}>Profile</Text>
  <Image style={stylesWNC.Profile} source={require('../assets/profile.png')}/>
  </View>
  
  </View>      
  );
}  

export default Profile
