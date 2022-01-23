import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import homepage from "./screens/homepage";
import profile from "./screens/profile";
import Faq from "./screens/faq";
import SignUpScreen from "./screens/signup";
import LoginScreen from "./screens/login";
import Feedback from "./screens/feedback";
import OrderForm from "./screens/orderform";
import Location from "./screens/location";
import Payment from "./screens/payment";
import PaymentConfirmation from "./screens/paymentconfirmation";

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      {/* if you want to add on more screen, add the component here and import based on the name that you declared for your file.*/}
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            title: "WashNClean",
            headerTitleStyle: { color: "teal" },
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{
            title: "WashNClean",
            headerTitleStyle: { color: "teal" },
            headerShown: false,
          }}
        />
        <Stack.Screen name="Homepage" component={homepage} />
        <Stack.Screen name="Profile" component={profile} />
        <Stack.Screen name="Faq" component={Faq} />
        <Stack.Screen name="Feedback" component={Feedback}/>
        <Stack.Screen name="OrderForm" component={OrderForm} />
        <Stack.Screen name="Location" component={Location} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="PaymentConfirmation" component={PaymentConfirmation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
