import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  ScrollView,
  Dimensions,
} from "react-native";
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

//Nor Bedriah Binti Munadi
const Profile = () => {
  const navigation = useNavigation();
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const firestore = getFirestore(app);

  const [userDoc, setUserDoc] = useState();
  const [isLoading, setisLoading] = useState(true);

  const docRef = doc(firestore, "users", auth.currentUser.email);
  const fetchUserData = () => {
    try {
      getDoc(docRef)
      .then((snapshot) => {
        if (snapshot.exists) {
          setUserDoc(snapshot);
          setisLoading(false);
        }
      })
      .catch((e) => {
        alert(e.message);
      });
    } catch (error) {
      console.log(error)
    }
  };

  // const docRef = doc(firestore, 'users', auth.currentUser.email)
  // getDoc(docRef)
  //   .then((snapshot) => {
  //     // on success
  //     if(snapshot.exists) {
  //       setUserDoc(snapshot.data())
  //     } else {
  //       Alert.alert('User data not found')
  //     }
  //   } ).catch((e) => {
  //     // on fail
  //     Alert.alert(e.message)
  //   })

  const showSignOutDialog = () => {
    return Alert.alert("Are you sure to sign out?", "Sign out now?", [
      {
        text: "No",
        onPress: () => console.log("Cancelled Sign Out"),
      },
      {
        text: "Yes",
        onPress: () => handleSginOut()
      }
    ]);
  }
  const handleSginOut = async () => {
    await auth.signOut();
    navigation.replace("LoginScreen");
  };

  if (isLoading) {
    fetchUserData();
    return (
      <ActivityIndicator
        style={{
          flexDirection: "column", alignSelf: "center",
      }}
        size="large"
        color={"#2e9cc5"}
      />
    );
  } else {
    return (
      // <ScrollView horizontal={false} style={{paddingVertical: 15, height: Dimensions.get('window').height}}>
      <View style={stylesWNC.container}>
        {/* syntax for big title at the top of the screen for WashNClean */}
        <Text style={stylesWNC.TopTitle}>WashNClean</Text>
        <Card containerStyle={{
          alignContent: "center",
          width: "80%",
        }}>
          <View style={{backgroundColor: "#2e9cc"}}>
          <Image style={{marginTop: 20, alignSelf: "center", marginBottom: 20}}source={require("../assets/profile.png")}></Image>
          <Card.Divider/>
          <Text
            style={{
              textAlign: "center",
              marginTop: 2,
              fontSize: 22,
              fontWeight: "bold",
            }}
            >
          {userDoc?.data().username}
        </Text>
        </View>
        </Card>
        
        <Text style={{ top: "10%", left: "-30%", fontSize: 20 }}>Email: </Text>
        <Text style={{ top: "6%", left: "20%", fontSize: 20 }}>
          {auth.currentUser?.email}
        </Text>

        <TouchableOpacity
          style={stylesWNC.buttonSignOut}
          onPress={showSignOutDialog}
        >
          <Text style={stylesWNC.textSignOut}>Sign Out</Text>
        </TouchableOpacity>

        {/* from here to below are navigation syntax navigate to related screen */}
        <TouchableOpacity
          style={stylesWNC.CHome}
          onPress={() => navigation.navigate("Homepage")}
        >
          <Text style={stylesWNC.navtext}>Home</Text>
          <Image
            style={stylesWNC.Homepage}
            source={require("../assets/home.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={stylesWNC.CLocation}
          onPress={() => navigation.navigate()}
        >
          <Text style={stylesWNC.navtext}>Location</Text>
          <Image
            style={stylesWNC.Location}
            source={require("../assets/location.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={stylesWNC.CTracker}
          onPress={() => navigation.navigate()}
        >
          <Text style={stylesWNC.navtext}>Tracker</Text>
          <Image
            style={stylesWNC.Tracker}
            source={require("../assets/track.png")}
          />
        </TouchableOpacity>

        <View style={stylesWNC.CProfile}>
          <Text style={stylesWNC.navtext}>Profile</Text>
          <Image
            style={stylesWNC.Profile}
            source={require("../assets/profile.png")}
          />
        </View>
      </View>
      // </ScrollView>
    );
  };
}

export default Profile
