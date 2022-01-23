import * as React from 'react';
import { Text, View,Button,Image,TextInput,TouchableOpacity, StyleSheet,Alert } from 'react-native';
import Constants from 'expo-constants';
import { useNavigation } from "@react-navigation/native";
import homepage from './homepage';

const PaymentConfirmation = () => {

  const navigation = useNavigation();

  return(
<View style={styles.container}>
      <Image
  source={{ uri: 'https://www.clipartmax.com/png/middle/62-624281_check-circle-ring-correct-right-mark-character-check-mark-icon-png.png' }}
  style={{ height: 60, width: 60, minWidth: 40, minHeight: 40, marginLeft: 40, marginRight: 40,}}
/>
      <Text style={styles.header}>
        Payment Confirmation
      </Text>

      <Text style={styles.content}>
     Payment Success{'\n'} 
      Your Payment was successful{'\n'}
      </Text>

       <Button
        title="Payment Confirmed"
        onPress={() => navigation.navigate("Homepage")}
      /> 
    </View>
  )
};export default PaymentConfirmation

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#89CFF0',
    padding: 8,
    alignItems: "center",
  },
  header: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  content: {
    textAlign:'center',
  },
  field: {
    flex: 0.5,
    backgroundColor: 'white',
    textAlign:'center',
    height : 200,
    //borderWidth: 2,
    borderRadius: 20 ,
    margin:20,

  },
});

