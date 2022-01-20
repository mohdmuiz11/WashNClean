import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import { stylesWNC } from '../screens/stylesWNC';

////Nor Bedriah Binti Munadi
class Faq extends React.Component {  
  
    render() {
    return (
<View style={stylesWNC.container}>
  {/* syntax for big title at the top of the screen for WashNClean */}
  <Text style={stylesWNC.TopTitle}>WashNClean</Text>
  <ScrollView style={stylesWNC.Infofaq}>
  <Text style = {{fontSize:30, textAlign:'center', fontWeight: 'bold'}}>FREQUENTLY ASKED QUESTION</Text>
        <Text style = {stylesWNC.Textfaq}>
            {'\n'}{'\n'}1. How will I be billed?
            {'\n'}We will email you a detailed invoice each time your card is billed. You can also receive invoice totals by text.
            {'\n'}{'\n'}2. Can I pay by cash?
            {'\n'}No, because we do the cashless method of payment which require to do the payment by online banking, debit/credit card.
            {'\n'}{'\n'}3. Is there any delivery charge?
            {'\n'}No, because we already include the delivery charges into the prices.
            {'\n'}{'\n'}4. What if I am not at home when you deliver the laundry?
            {'\n'}There will be additional charges for unpicked laundry as in the schedule by RM 5.00 to cover the re-delivery costs.
            {'\n'}{'\n'}5. I forgot to put my laundry out. Do you have any missed pickup fee?
            {'\n'}By right, we will charges you RM 10.00 for any missed pickup delivery to cover re-delivery costs.
            {'\n'}{'\n'}6. Do I need to weigh my laundry by myself?
            {'\n'}No need, because we will weigh your laundry after the cleaning is done. In case, there is any wet towel/clothes that would add the unnecessary weight.
        </Text>   
    </ScrollView>

  </View>
    )
  }
} 
 
 
export default Faq
