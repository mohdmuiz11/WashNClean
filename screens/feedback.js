import * as React from 'react';
import { Text, View,Button,Image,TextInput,TouchableOpacity, StyleSheet,Alert } from 'react-native';
import Constants from 'expo-constants';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, addDoc} from 'firebase/firestore';



const Feedback = () => {

  const [feedbackMsg, setFeedbackMsg] = React.useState("");

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const firestore = getFirestore(app);

  const feedbackHandler = async () => {
    if(feedbackMsg === ""){
      Alert.alert("Invalid Input", "Please enter your feedback before submitting")
    } else {
      const userFeedback = collection(firestore, 'userFeedbacks')
      const docData = {
        'feedbackMsg': feedbackMsg,
        'useruid': auth.currentUser.uid,
        'date': new Date(),
      }
      await addDoc(userFeedback, docData)
            .then(() => {
              console.log('Feedback sent')
              Alert.alert('Thank You', 'Feedback sent')
            }).catch((e) => {
              console.log(e);
              Alert.alert('Sending feedback failed', e.message);
            })
    }
  }

  return(
      <View style={styles.container}>
        <Text style={styles.header}>
          Send us some feedback.
        </Text>
  
        <Text style={styles.content}>
        Are you satisfied with the service?{'\n'} 
        Do you have any suggestions?{'\n'}
        Let us know in the field below.
        </Text>
  
        <TextInput style= {styles.field}
          placeholder='Describe your experience and issues'
          placeholderTextColor={"#00000073"}
          value={feedbackMsg}
          onChangeText={(val) => setFeedbackMsg(val)}
          multiline={true}
          numberOfLines={8}
        >
        </TextInput>
  
         <TouchableOpacity style={styles.submitFeedbackBtn}
          onPress={feedbackHandler}
        >
          <Text style={styles.buttonText}>
            Send Feedback
          </Text>
        </TouchableOpacity>
  
    
      </View>
  );
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

  submitFeedbackBtn: {
    width: "80%",
    borderWidth: 3,
    borderColor: "white",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
    backgroundColor: "#E6DB42",
    marginLeft: 40,
    marginRight: 40,
  },

  buttonText: {
    color: "#0E0A0A",
    fontSize: 18,
  }
});
export default Feedback

