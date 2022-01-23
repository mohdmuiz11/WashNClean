import React, { useState } from "react";
import Payment from './payment';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  StyleSheet,
  Alert,
  ActivityIndicator,
  ScrollView,
  Dimensions,
} from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import { Dropdown } from 'react-native-material-dropdown-v2';
import { Card, colors } from "react-native-elements";
import { stylesWNC } from "../screens/stylesWNC";
import { useNavigation } from "@react-navigation/native";
import { getAuth } from "firebase/auth";
import { firebaseConfig } from "../firebase";
import { initializeApp } from "firebase/app";
import {
  doc,
  getFirestore,
  getDoc,
  QueryDocumentSnapshot,
  DocumentSnapshot,
} from "firebase/firestore";

const OrderForm = () => {

    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [serviceType, setServiceType] = useState("--Select a service--");

    const serviceTypeData = [
        { value: "Normal Wash (RM 3/kg)" },
        { value: "Dry+Fold Only (RM 1.80/kg)" },
        { value: "Handwash (RM 3/pc)" },
        { value: "Ironing (RM 2/pc)" },
        { value: "Dry Cleaning (RM 15/pc)" }
      ]

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
      };
    
      const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
      };
    
      const showDatepicker = () => {
        showMode('date');
      };
    
      const showTimepicker = () => {
        showMode('time');
      };

    const navigation = useNavigation();

    return (
        <View style={stylesWNC.container}>
            <Text style={stylesWNC.TopTitle}>WashNClean</Text>
            <Text style={styles.title}>Your Order</Text>
            <View>
                <Text style={styles.subtitle}>What kind of service do you want?</Text>
                <Dropdown style={styles.dropdowninput} data={serviceTypeData} value={serviceType} onChangeText={(serviceType) => setServiceType(serviceType)}/>
            </View>
            <Text>what</Text>

            <View>
                <Button onPress={showDatepicker} title="Show date picker!" />
            </View>
            <View>
                <Button onPress={showTimepicker} title="Show time picker!" />
            </View>
            {show && (
                <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={false}
                display="default"
                onChange={onChange}
                //set minimum date by today
                minimumDate={new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate())}
                />
             <Button
               title="Pay Now"
               onPress={() => navigation.navigate(Payment)}
                 /> 
            )}



            <TouchableOpacity style={stylesWNC.CHome}  onPress={() => navigation.navigate("Homepage")}>  
                <Text style={stylesWNC.navtext}>Home</Text>
                <Image style={stylesWNC.Homepage} source={require('../assets/home.png')} />
            </TouchableOpacity>

            <TouchableOpacity style={stylesWNC.CLocation} onPress={() => navigation.navigate("Location")}>
                <Text style={stylesWNC.navtext}>Location</Text>
                <Image style={stylesWNC.Location} source={require('../assets/location.png')}/>
            </TouchableOpacity>

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
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 25,
    },
    subtitle: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    rowcontainer: {
        flex: 0.1,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    dropdowninput: {
        fontWeight: "bold",
        textAlign: 'center',
        alignContent: "center",
        fontSize: 15,
        backgroundColor: "white",
        width: "100%",
        height: 50,
    },
});

export default OrderForm;
