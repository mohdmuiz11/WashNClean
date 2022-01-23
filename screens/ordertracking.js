//unused page, time constraint - muiz

import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image
} from "react-native";
import StepIndicator from 'react-native-step-indicator';
import { Button } from "react-native-elements";
import { Input } from "react-native-elements";
import moment from "moment";
import { stylesWNC } from "../screens/stylesWNC";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { ScrollView } from "react-native-gesture-handler";

// for custom step indicator
const labels = ["On the way to pickup your laundry",
                "Your laundry is on its way!",
                "Preparing your laundry...",
                "Washing up your laundry",
                "Drying your laundry",
                "Your laundry is on its way home..",
                "Your laundry has arrived!"];
const customStyles = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize:30,
  separatorStrokeWidth: 6,
  currentStepStrokeWidth: 5,
  stepStrokeCurrentColor: 'white',
  stepStrokeWidth: 4,
  stepStrokeFinishedColor: '#fe7013',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#fe7013',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#fe7013',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: 'skyblue',
  stepIndicatorLabelFontSize: 12,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: 'white',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 18,
  labelAlign: 'center',
  currentStepLabelColor: 'skyblue'
}

const OrderTrack = () => {
    const [currentPosition, setCurrentPosition] = useState(0);
    const navigation = useNavigation();

    return (
        <View style={stylesWNC.container}>

            <Image style={styles.picture} source={require('../assets/trackProgress.png')}/>
            <View style={styles.stepcontainer}>
                <StepIndicator
                    customStyles={customStyles}
                    stepCount={7}
                    currentPosition={currentPosition}
                    labels={labels}
                    direction="vertical"
                />
            </View>

            <TouchableOpacity style={stylesWNC.CHome}  onPress={() => navigation.navigate("Homepage")}>  
                <Text style={stylesWNC.navtext}>Home</Text>
                <Image style={stylesWNC.Homepage} source={require('../assets/home.png')} />
            </TouchableOpacity>

            <TouchableOpacity style={stylesWNC.CLocation} onPress={() => navigation.navigate("Location")}>
                <Text style={stylesWNC.navtext}>Location</Text>
                <Image style={stylesWNC.Location} source={require('../assets/location.png')}/>
            </TouchableOpacity>

            {/* cant be bothered to utilized navigation stack */}

            <View style={stylesWNC.CTracker}>
                <Text style={stylesWNC.navtext}>Order</Text>
                <Image style={stylesWNC.Tracker} source={require('../assets/track.png')}/>
            </View>
            
            <TouchableOpacity style={stylesWNC.CProfile} onPress={() => navigation.navigate("Profile")}>
                <Text style={stylesWNC.navtext}>Profile</Text>
                <Image style={stylesWNC.Profile} source={require('../assets/profile.png')}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    stepcontainer: {
        width: "90%",
        height: "70%",
        marginLeft: "15%"
        // alignItems: "flex-start"
    },
    picture: {
        width: 300,
        height: 100,
    },

})

export default OrderTrack;