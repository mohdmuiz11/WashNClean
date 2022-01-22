import React, {useEffect, useState} from 'react';
import {Text, View, ActivityIndicator} from 'react-native';
import WeatherComp from '../components/WeatherComp';
import {stylesWNC} from '../screens/stylesWNC';

//Nor Bedriah Binti Munadi
const API_KEY = '68095a5bd370e9e7cda5f9a01a21c82c'

function Weather(){  

    const [weatherData, setWeatherData] = useState(null);
    const [loaded, setLoaded] = useState(true);

    //pull the function to the weather.js(weathercomp) and weathercomp.js(searchbar)
    async function fetchWeatherData(cityName){
        setLoaded(false);
        const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
        try {
            const response = await fetch(API_URL);
            if(response.status == 200) {
                const data = await response.json();
                setWeatherData(data);
            } else {
                setWeatherData(null);
            }
            setLoaded(true);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchWeatherData('Selangor');
        console.log(weatherData);
    }, [])

//this one the function if the setLoaded cannot be retrieve (false), so it will be loading, that why activityIndicator is needed
if(!loaded){ 
    return (
        <View style={stylesWNC.container}>
            <ActivityIndicator color='blue' size={36}/>
        </View>
    )
}

else if(weatherData === null){
    return (
    <View>

    </View>
    )
}

    return (
<View style={stylesWNC.container}>
  {/* syntax for big title at the top of the screen for WashNClean */}
  <Text style={stylesWNC.TopTitle}>OpenWeather</Text>
  <WeatherComp weatherData={weatherData} fetchWeatherData={fetchWeatherData}/>
 
  
  </View>      
  );
}  

export default Weather
