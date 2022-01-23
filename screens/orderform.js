// Mohammad Mu'izzuddin bin Mohammad Ali 1918855

import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { Button } from "react-native-elements";
import DateTimePicker from '@react-native-community/datetimepicker';
import { Dropdown } from 'react-native-material-dropdown-v2';
import { Input } from "react-native-elements";
import moment from "moment";
import { stylesWNC } from "../screens/stylesWNC";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// this function is exclusively for datetimepicker in order to
// put pickup and delivery time (two instance of datetimepicker)
function useInput() {
    const [date, setDate] = useState(new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

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

    return {
        date,
        showDatepicker,
        showTimepicker,
        show,
        mode,
        onChange
    }

}

const OrderForm = () => {
    //for two datetimepicker
    const input = useInput(new Date());
    const input2 = useInput(new Date());
    
    //some usestate variable to be used
    const [price, setPrice] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [serviceType, setServiceType] = useState("--Select a service--");
    const [weight, setWeight] = useState(0);

    const navigation = useNavigation();

    //list of laundry services with price
    const serviceTypeData = [
        { value: "Normal Wash (RM 3/kg)" },
        { value: "Dry+Fold Only (RM 1.80/kg)" },
        { value: "Handwash (RM 3/pc)" },
        { value: "Ironing (RM 2/pc)" },
        { value: "Dry Cleaning (RM 15/pc)" }
      ]
      
    // calculate price everytime there is some changes to
    // weight and serviceType
    useEffect(() => {
        let total = price * weight;
        setTotalPrice(total);
    }, [weight, serviceType]);

    const chooseService = (whatService, index) => {
        switch(index){
            case 0: setPrice(3); break;
            case 1: setPrice(1.8); break;
            case 2: setPrice(3); break;
            case 3: setPrice(2); break;
            case 4: setPrice(15); break;
        }
        setServiceType(whatService);
    }

    const checkEmpty = () => {
        if (totalPrice == 0) {
            Alert.alert("Invalid input!")
        }
        else
        {
            navigation.navigate("Payment");
        }
    }

    return (
        <View style={stylesWNC.container}>
            <Text style={stylesWNC.TopTitle}>WashNClean</Text>
            <Text style={styles.title}>Your Order</Text>
            <View style={styles.normalcontainer}>
                <Text style={styles.subtitle}>What kind of service do you want?</Text>

                {/* dropdown menu */}
                <Dropdown style={styles.dropdowninput} data={serviceTypeData} value={serviceType} onChangeText={(serviceType, index) => chooseService(serviceType, index)}/>
            </View>

            {/* Input weight laundry */}
            <View style={styles.normalcontainer}>
                <Text style={styles.subtitle}>How much weight is your laundry?</Text>
                <Input
                    containerStyle={{alignSelf: "center", marginBottom:-30}}
                    disabledInputStyle={{ background: "#ddd" }}
                    inputContainerStyle={{width: 60}}
                    keyboardType='numeric'
                    maxLength={2}
                    rightIcon={
                        <Icon name="weight-kilogram" size={30} />
                    }
                    placeholder="0"
                    value={weight}
                    onChangeText={(weight) => setWeight(weight)}
                    />
            </View>

            <Text style={styles.subtitle}>Schedule your laundry:</Text>

            {/* pickup time scheduling */}
            <View style={styles.rowcontainer}>
                <Text style={styles.formlabel}>Pickup</Text>
                <Button
                    buttonStyle={{}}
                    containerStyle={{ margin: 5 }}
                    onPress={input.showDatepicker}
                    title={moment(input.date).format("ddd, Do MMM")}
                    titleStyle={{ marginHorizontal: 5, fontSize: 15}}
                    type="outline"
                />
                <Button
                    buttonStyle={{}}
                    containerStyle={{ margin: 5 }}
                    onPress={input.showTimepicker}
                    title={moment(input.date).format("LT")}
                    titleStyle={{ marginHorizontal: 5, fontSize: 15}}
                    type="outline"
                />
                {input.show && (
                    <DateTimePicker
                        testID="dateTimePicker1"
                        value={input.date}
                        mode={input.mode}
                        is24Hour={false}
                        display="default"
                        onChange={input.onChange}
                        //set minimum date by today
                        minimumDate={new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate())}
                    />
                )}
            </View>

            {/* delivery time scheduling */}
            <View style={styles.rowcontainer2}>
                <Text style={styles.formlabel}>Delivery</Text>
                <Button
                    buttonStyle={{}}
                    containerStyle={{ margin: 5 }}
                    onPress={input2.showDatepicker}
                    title={moment(input2.date).format("ddd, Do MMM")}
                    titleStyle={{ marginHorizontal: 5, fontSize: 15}}
                    type="outline"
                />
                <Button
                    buttonStyle={{}}
                    containerStyle={{ margin: 5 }}
                    onPress={input2.showTimepicker}
                    title={moment(input2.date).format("LT")}
                    titleStyle={{ marginHorizontal: 5, fontSize: 15}}
                    type="outline"
                />
                {input2.show && (
                    <DateTimePicker
                        testID="dateTimePicker1"
                        value={input2.date}
                        mode={input2.mode}
                        is24Hour={false}
                        display="default"
                        onChange={input2.onChange}
                        //set minimum date by today
                        minimumDate={new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate())}
                    />
                )}
            </View>

            {/* small notes for schedule, cant be bother with automating this process */}
            <View style={styles.viewsmall}>
                <Text style={styles.small}>Note: Pickup and delivery time should</Text>
                <Text style={styles.small}>be at least between 2 hours</Text>
            </View>
            
            {/* total price, calculated automatically */}
            <View style={styles.rowcontainer}>
                <Text style={styles.priceTitle}>Total Price:</Text>
                <Text style={styles.price}>RM {totalPrice}</Text>
            </View>
            
            {/* proceed to payment page */}
            <Button
                buttonStyle={{ backgroundColor: "green", borderWidth: 2, borderRadius: 30 }}
                containerStyle={{ width: 200, margin: 5 }}
                title="PAY NOW"
                onPress={() => checkEmpty()}
                titleStyle={{ marginHorizontal: 10, fontSize: 20}}
                type="solid"
            />


            {/* Navigation buttons */}
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

//custom stylesheet for this screen
const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 25,
    },
    button: {
        color: 'black'
    },
    subtitle: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    priceTitle: {
        fontSize: 30,
        fontWeight: "bold",
        marginRight: "10%"
    },
    price: {
        fontSize: 30,
        fontWeight: "bold",
        color: "blue"
    },
    formlabel: {
      fontSize: 15,
      fontWeight: "bold",
    },
    rowcontainer: {
        flex: 0.2,
        flexDirection: "row",
        alignItems: "baseline"
        // justifyContent: "space-between",
        // marginHorizontal: 20
    },
    rowcontainer2: {
        flex: 0.2,
        flexDirection: "row",
        alignItems: "baseline",
        marginTop: -15,
        marginBottom: -15,
        // justifyContent: "space-between",
        // marginHorizontal: 20
    },
    normalcontainer:{
        marginBottom: 20,
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
    viewsmall: {
        marginBottom: 10,
        alignItems: "center"
    },
    small: {
        fontSize: 13,
    }
});

export default OrderForm;
