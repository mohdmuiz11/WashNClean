import React, {useEffect} from 'react';
import { View, Text} from 'react-native';
import { stylesWNC } from '../screens/stylesWNC';
import SearchBar from './SearchBar';

//Nor Bedriah Binti Munadi
export default function WeatherComp({weatherData, fetchWeatherData}){

    const { weather, 
            name, 
            main: {temp, humidity},
            wind: {speed}} = weatherData;
    const [{main}] = weather;

    const celcius = (temp - 273.15).toFixed(0); //because the default unit is Kelvin so need to do some counting to change it to celcius
    const speeds = (speed * 3.6).toFixed(1); //because the default unit is Metric:meter/second so need to do some counting to change it to km/h

    useEffect(() => {
        console.log(main);
    }, [weatherData]) //effected when value of the weateherData change


    return (
        <View style={stylesWNC.container}>
                <View style={{ alignItems: 'center', width: 300}}>
                    <Text style={{top: '40%', fontSize:30}}>{name}</Text>
                    <Text style={{top: '50%', fontSize:90}}>{celcius}°C</Text>
                    <Text style={{top: '50%', fontSize:20, fontWeight:'bold'}}>{main}</Text>
                    <Text style={{top: '50%', fontSize:15, fontWeight:'bold'}}>Humidity: {humidity}%</Text>
                    <Text style={{top: '50%', fontSize:15, fontWeight:'bold'}}>Wind Speed: {speeds} km/h</Text>
                </View>
            <SearchBar fetchWeatherData={fetchWeatherData}/>
            
        </View>
    )
}
