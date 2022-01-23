
//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  StyleSheet,Text,Image, View,Button,TouchableOpacity } from 'react-native';
import MapView, {PROVIDER_GOOGLE,Marker} from 'react-native-maps';
import {stylesWNC} from '../screens/stylesWNC';
import {Card} from 'react-native-shadow-cards';
import { useNavigation } from '@react-navigation/native';
import Feedback from './feedback';
import profile from './profile';


const API_KEY= 'AIzaSyDX3A7a8aviSb5eAB1Fn21J9MVEGx5z-fo'
//export default function App()
const Location = () =>
{
  
    const navigation = useNavigation()
    
    let location = {
        latitude: 3.234318,
        longitude: 101.696340,
        latitudeDelta: 0.009,
        longitudeDelta: 0.009,
    }
    
  return (
    <View style={stylesWNC.container}>
        <Text style={stylesWNC.TopTitle}>WashNClean</Text>

     <View style={stylesWNC.mapstyle}>   
        <MapView 
            style={StyleSheet.absoluteFillObject}
            provider={PROVIDER_GOOGLE}
            mapType='standard'
            region={location}
            >
          <Marker coordinate={{latitude: 3.234318,longitude: 101.696340}}
          title={'We are here!'}
         />
          
        </MapView>
        </View>
     
        <Card style={stylesWNC.CardPos}>
        <Text style={stylesWNC.textStyle}>Working hour - 9:00 a.m until 9:00 p.m</Text>
        <Button
          title="Feedback"
          onPress={() => navigation.navigate(Feedback)}
        />
        </Card>
      

   {/*Navigation bar*/} 

  <TouchableOpacity style={stylesWNC.CHome} onPress={() => navigation.navigate("Homepage")}>  
    <Text style={stylesWNC.navtext}>Home</Text>
    <Image style={stylesWNC.Homepage} source={require('../assets/home.png')}/>
  </TouchableOpacity>
  
  {/* from here to below are navigation syntax navigate to related screen */}
  <View style={stylesWNC.CLocation}>
    <Text style={stylesWNC.navtext}>Location</Text>
    <Image style={stylesWNC.Location} source={require('../assets/location.png')}/>
  </View>

  <TouchableOpacity style={stylesWNC.CTracker} onPress={() => navigation.navigate("OrderForm")}>
    <Text style={stylesWNC.navtext}>Tracker</Text>
    <Image style={stylesWNC.Tracker} source={require('../assets/track.png')}/>
  </TouchableOpacity>
  
  <TouchableOpacity style={stylesWNC.CProfile} onPress={() => navigation.navigate(profile)}>
    <Text style={stylesWNC.navtext}>Profile</Text>
    <Image style={stylesWNC.Profile} source={require('../assets/profile.png')}/>
  </TouchableOpacity> 
 
    </View>

    
  );
}

export default Location

//3.234318, 101.696340
//23.259933, 77.412613