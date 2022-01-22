import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {stylesWNC} from '../screens/stylesWNC';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { FontAwesome5 } from '@expo/vector-icons'; 
import profile from './profile';
import Faq from './faq';
import Weather from './Weather';


function homepage ({navigation}){  
  
    return (
<View style={stylesWNC.container}>
  {/* syntax for big title at the top of the screen for WashNClean */}
  <Text style={stylesWNC.TopTitle}>WashNClean</Text>
    
  {/* syntax for FAQ part */}
  <TouchableOpacity style={stylesWNC.CFaq} onPress={() => navigation.navigate(Faq)}>
    <Image style={stylesWNC.FAQ} source={require('../assets/faq.png')}/>
  </TouchableOpacity>

  {/* syntax for Weather Snippets part */}
  <TouchableOpacity style={stylesWNC.SWeather} onPress={() => navigation.navigate(Weather)}>
  <FontAwesome5 name="cloud-sun" size={80} color="black" />
  </TouchableOpacity>

  {/* syntax for WashNClean Updated Price part */}
  <Text style={stylesWNC.textTitle1}>Updated Price For 2022</Text>
  <Grid style={stylesWNC.gridLayout}>
        <Col size={50}>
          <Row style={stylesWNC.tableLayout}>
          <Text style={stylesWNC.texttable}>Details</Text>
          </Row>
          <Row style={stylesWNC.tableLayout}>
          <Text style={stylesWNC.texttable}>Normal Wash</Text>
          </Row>
          <Row style={stylesWNC.tableLayout}>
          <Text style={stylesWNC.texttable}>Dry + Fold Only</Text>
          </Row>
          <Row style={stylesWNC.tableLayout}>
          <Text style={stylesWNC.texttable}>Handwash</Text>
          </Row>
          <Row style={stylesWNC.tableLayout}>
          <Text style={stylesWNC.texttable}>Ironing</Text>
          </Row>
          <Row style={stylesWNC.tableLayout}>
          <Text style={stylesWNC.texttable}>Comforter/Curtain/Bed Sheets/{'\n'}Cushion Sheets</Text>
          </Row>
          <Row style={stylesWNC.tableLayout}>
          <Text style={stylesWNC.texttable}>Heavy Blanket</Text>
          </Row>
          <Row style={stylesWNC.tableLayout}>
          <Text style={stylesWNC.texttable}>Dry Cleaning</Text>
          </Row>
        </Col>
        <Col size={20}>
        <Row style={stylesWNC.tableLayout}>
        <Text style={stylesWNC.texttable}>Price</Text>
        </Row>
        <Row style={stylesWNC.tableLayout}>
        <Text style={stylesWNC.texttable}>RM 3.00/kg</Text>
        </Row>
        <Row style={stylesWNC.tableLayout}>
        <Text style={stylesWNC.texttable}>RM 1.80/kg</Text>
        </Row>
        <Row style={stylesWNC.tableLayout}>
        <Text style={stylesWNC.texttable}>RM 3.00/pc</Text>
        </Row>
        <Row style={stylesWNC.tableLayout}>
        <Text style={stylesWNC.texttable}>RM 2.00/pc</Text>
        </Row>
        <Row style={stylesWNC.tableLayout}>
        <Text style={stylesWNC.texttable}>RM 5.00/pc{'\n'}</Text>
        </Row>
        <Row style={stylesWNC.tableLayout}>
        <Text style={stylesWNC.texttable}>RM 20.00/pc</Text>
        </Row>
        <Row style={stylesWNC.tableLayout}>
        <Text style={stylesWNC.texttable}>RM 15.00/pc</Text>
        </Row> 
        </Col>
      </Grid>
  
  {/* syntax for navigation at the bottom part */}
  {/* non-navigation syntax because here already homepage screen */}
  <View style={stylesWNC.CHome}>  
    <Text style={stylesWNC.navtext}>Home</Text>
    <Image style={stylesWNC.Homepage} source={require('../assets/home.png')} />
  </View>
  
  {/* from here to below are navigation syntax navigate to related screen */}
  <TouchableOpacity style={stylesWNC.CLocation} onPress={() => navigation.navigate()}>
    <Text style={stylesWNC.navtext}>Location</Text>
    <Image style={stylesWNC.Location} source={require('../assets/location.png')}/>
  </TouchableOpacity>

  <TouchableOpacity style={stylesWNC.CTracker} onPress={() => navigation.navigate()}>
    <Text style={stylesWNC.navtext}>Tracker</Text>
    <Image style={stylesWNC.Tracker} source={require('../assets/track.png')}/>
  </TouchableOpacity>
  
  <TouchableOpacity style={stylesWNC.CProfile} onPress={() => navigation.navigate("Profile")}>
    <Text style={stylesWNC.navtext}>Profile</Text>
    <Image style={stylesWNC.Profile} source={require('../assets/profile.png')}/>
  </TouchableOpacity>
  </View>      
  );
}  

export default homepage
