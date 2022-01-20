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
textTitle1: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    top: '38%',
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
gridLayout: {
    top: '70%',
},
logoWNC: {
    top: '150%',
    left: '35%',
    width: 100,
    height: 100,
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
}

})
