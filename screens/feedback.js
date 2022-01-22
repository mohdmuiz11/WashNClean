import * as React from 'react';
import { Text, View,Button,Image,TextInput,TouchableOpacity, StyleSheet,Alert } from 'react-native';
import Constants from 'expo-constants';



class Feedback extends React.Component  {
    render() {
    return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Send us some feedback.
      </Text>

      <Text style={styles.content}>
      Do you satisfied about the service?{'\n'} 
      Do you have a suggestion?{'\n'}
      Let us know in the field below.
      </Text>

      <TextInput style= {styles.field}>
      <Text style={styles.textprop}>
      Describe your experience and issues...
      </Text>
      </TextInput>

       <Button
        title="Send feedback"
        onPress={() => Alert.alert('Thank you!')}
      /> 

  
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#89CFF0',
    padding: 8,
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
  textprop:{
    color: 'grey',

  },
});
export default Feedback

