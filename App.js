import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import homepage from './screens/homepage';
import profile from './screens/profile';
import Faq from './screens/faq';


const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
    
  {/* if you want to add on more screen, add the component here and import based on the name that you declared for your file.*/}
      <Stack.Navigator>
        <Stack.Screen name= "Homepage" component={homepage} />
        <Stack.Screen name= "Profile" component={profile} />
        <Stack.Screen name= "Faq" component={Faq} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
 
export default MyStack
