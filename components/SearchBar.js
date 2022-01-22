import React, {useState} from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { stylesWNC } from '../screens/stylesWNC';
import { Feather } from '@expo/vector-icons'; 

export default function SearchBar({fetchWeatherData}){
    const [cityName, setCityName] = useState(' ');
    return (
        <View style={stylesWNC.search}> 
            <TextInput
                placeholder="Search city name"
                value={cityName}
                onChangeText={(text) => setCityName(text)}
            />
            <Feather name="search" size={24} color="black" onPress={() => fetchWeatherData(cityName)}/>
        </View>
    )
}
