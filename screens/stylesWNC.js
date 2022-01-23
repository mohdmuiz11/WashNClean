import { Dimensions, StyleSheet } from 'react-native';

export const stylesWNC = StyleSheet.create ({
  //the styles used for all screens  
container: {
    backgroundColor: '#ffffff',
    flex: 1,
    alignItems: 'center',
},
TopTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: 'blue',
    textAlign: 'center',
},

//the styles used for Homepage screen  
tableTitle: {
    margin: 2,
    borderWidth: 1,
    justifyContent: 'center',
    height: 25,
},
texttable: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
},
tableLayout: {
    margin: 2,
    borderWidth: 1,
    justifyContent: 'center',
    height: 25,
},
logoWNC: {
    top: '150%',
    left: '35%',
    width: 100,
    height: 100,
},
SWeather: {
    position: 'absolute',
    backgroundColor: 'lightblue',
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    width: 100,
    height: 100,
    alignItems: 'center',
    top: '15%',
},
weather: {
    width: 70,
    height: 70,
    alignItems: 'center',
    top: '15%',
},

//styles that used for FAQ screen
Textfaq: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'normal',
    padding: 10,
    textAlign: 'justify',
},
Infofaq: {
    backgroundColor: 'lightblue',
    marginTop: 20,
},

//the styles used for Weather screen 
search: {
    marginTop: -200,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: Dimensions.get('screen').width - 20,
    borderWidth: 1,
    paddingVertical: 10,
    borderRadius: 15,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    backgroundColor: 'lightgrey',
    borderColor: 'lightgrey'
},
//styles that used for location screen
mapstyle:{
    flex:0.7,
    //backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'flex-end',
    //position:'absolute',
    borderWidth: 2,
   // height: 80,
    width: 395,
    position: 'relative'

},

CardPos:{
    padding: 10,
    margin: 500,
    position:'absolute',
    //left:'104%',
    //bottom:'-30%',
    alignItems:'center',
    borderRadius: 30 ,

},
NavCard:{
    position:'absolute',
    padding:55,
    left:'-205%',
    margin:695,
    width:601
},

textStyle:{
    textAlign: 'center',
    color: 'black',
    fontSize:15,
  },
 
//the styles used for navigation at certain screen  
Homepage: {
    position: 'absolute',
    width: 40,
    height: 42,
    left: '75%',
    top: '10%',
},
CHome: {
    position: 'absolute',
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    width: 48,
    height: 48,
    left: '5%',
    top: '90%',
},
Location: {
    position: 'absolute',
    width: 40,
    height: 42,
    left: '85%',
    top: '10%',
},
CLocation: {
    position: 'absolute',
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    width: 48,
    height: 48,
    left: '25%',
    top: '90%',
},
Tracker: {
    position: 'absolute',
    width: 40,
    height: 42,
    left: '80%',
    top: '10%',
},
CTracker: {
    position: 'absolute',
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    width: 48,
    height: 48,
    left: '45%',
    top: '90%',
},
Profile: {
    position: 'absolute',
    width: 40,
    height: 42,
    left: '71.5%',
    top: '10%',
},
CProfile: {
    position: 'absolute',
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    width: 52,
    height: 52,
    left: '65%',
    top: '90%'
},
FAQ: {
    position: 'absolute',
    width: 20,
    height: 20,
    left: '20%',
    top: '20%',
},
CFaq: {
    position: 'absolute',
    backgroundColor: 'lightgrey',
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    width: 30,
    height: 30,
    right: '10%',
    top: '2%',
},
navtext: {
    color: '#000000',
    fontSize: 10,
    fontStyle: 'normal',
    left: 43,
    top: 48
},
buttonSignOut: {
    width: "80%",
    borderWidth: 3,
    borderColor: "white",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
    backgroundColor: "#0000ff",
    marginLeft: 40,
    marginRight: 40,
},
textSignOut:{
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
}

})
