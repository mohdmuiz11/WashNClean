import React, {useState, useEffect} from 'react';
import PaymentConfirmation from './paymentconfirmation';
import { useNavigation } from '@react-navigation/native';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';

function Payment() {
  
  const navigation = useNavigation();
return (
  <SafeAreaView style={{flex: 1}}>
    <Text style={styles.text}>
    Choose Payment Method</Text>
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttonVISAStyle}
        activeOpacity={0.5}
        onPress={() => navigation.navigate(PaymentConfirmation)}
        >
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png',
          }}
          style={styles.buttonImageIconStyle}
        />
        <View style={styles.buttonIconSeparatorStyle} 
         />
        <Text style={styles.buttonTextStyle}>
          VISA/Master Card
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonFPXStyle}
        activeOpacity={0.5}
        onPress={() => navigation.navigate(PaymentConfirmation)}>
        <Image
          source={{
            uri:
              'https://vectorise.net/logo/wp-content/uploads/2019/09/Logo-FPX.png',
          }}
          style={styles.buttonImageIconStyle}
        />
        <View style={styles.buttonIconSeparatorStyle} />
        <Text style={styles.buttonTextStyle}>
          FPX Online Banking
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonEwalletStyle}
        activeOpacity={0.5}
        onPress={() => navigation.navigate(PaymentConfirmation)}>
        <Image
          source={{
            uri:
              'https://seeklogo.com/images/T/touch-n-go-ewallet-logo-CFCE2E1540-seeklogo.com.png',
          }}
          style={styles.buttonImageIconStyle}
        />
        <View style={styles.buttonIconSeparatorStyle} />
        <Text style={styles.buttonTextStyle}>
          FPX Online Banking
        </Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
);
};
export default Payment

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    marginTop: 10,
    padding: 10,
  },
  buttonFPXStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#dc4e41',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 60,
    borderRadius: 5,
    margin: 5,
  },
  buttonVISAStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#dc4e41',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 60,
    borderRadius: 5,
    margin: 5,
  },
  buttonEwalletStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#dc4e41',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 60,
    borderRadius: 5,
    margin: 5,
  },
  buttonImageIconStyle: { 
    padding: 10,
    margin: 15,
    height: 40,
    width: 40,
    resizeMode: 'stretch',
  },
  buttonTextStyle: {
    color: '#fff',
    marginBottom: 4,
    marginLeft: 10,
  },
  buttonIconSeparatorStyle: {
    backgroundColor: '#fff',
    width: 1,
    height: 40,
  },
  text:{
    padding: 30,
    margin: 30, 
    textAlign: 'center',
    fontSize: 25,
  },
});