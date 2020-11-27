
import React, { Component } from 'react';
import { TouchableOpacity,View, Text,Image,StyleSheet,TouchableHighlight,Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;

export default class Screen7 extends Component {
  render() {
    return (
      <View style={{backgroundColor: '#fff', flex: 1, flexDirection: 'column'}}>
        <View style={{flexDirection:'column',flex:0.9,padding:deviceHeight * 0.02}}>
        <Text style={styles.textStyle}>
        How do we identify and control
        </Text >
        <Text style={{fontSize:deviceHeight * 0.03,color:'#0099cc'}}>
        workplace hazards?
        </Text >
       
        <Text style={styles.textStyle}>
        This is the legislated process for dealing with hazards: 
       </Text >
      
        <Text style={styles.textStyle}>
        Spot the hazard
        </Text >

        <Text style={styles.textNormalstyle}>
        Identify the jobs or tasks which are likely to or have caused injury or caused harm 
        </Text >

        <Text style={styles.textStyle}>
        Assess the risk
        </Text >

        <Text style={styles.textNormalstyle}>
        Identify which of the hazards pose the greatest risk to us 
         </Text >

         <Text style={styles.textStyle}>
         Make the changes
        </Text >

        <Text style={styles.textNormalstyle}>
         Decide on appropriate controls i.e. eliminate, substitute, engineer or isolate, administer (implement policy, procedure or training) or use protective clothing
         </Text >

         <Text style={styles.textStyle}>
         Monitor and review implemented controls to ensure they are effective
        </Text >

      
   
    
</View>
<View style={{backgroundColor:'#f0efec',flexDirection:'row',flex:0.1}}>

<TouchableHighlight style={{flex:1}}  onPress={() =>  this.props.navigation.navigate('Screen1')}>

<View style={{flex:1,justifyContent:'center'}}>


  <Icon
   name="home"
   size={deviceWidth * 0.08}
   color="#7d7d7c"
   style={{marginLeft:deviceWidth * 0.05}}
 />

</View>
</TouchableHighlight>
<View style={{flex:1}}></View>
<View style={{flex:1}}></View>


<TouchableHighlight  style={{ flex:1 }}  onPress={() =>  this.props.navigation.navigate('Screen6')}>

<View style={{flex:1,justifyContent:'center'}}>


  <Icon
   name="arrow-left"
   size={deviceWidth * 0.08}
   color="#7d7d7c"
   style={{marginLeft:deviceWidth * 0.05}}
 />

</View>
</TouchableHighlight>
<View style={{flex:0.5}}></View>
<TouchableHighlight  style={{ flex:1 }}  onPress={() =>  this.props.navigation.navigate('Screen9')}>

<View style={{flex:1,justifyContent:'center'}}>


  <Icon
   name="arrow-right"
   size={deviceWidth * 0.08}
   color="#7d7d7c"
   style={{marginLeft:deviceWidth * 0.05}}
 />

</View>
</TouchableHighlight>


 
</View>
</View>
  
    );
  }
}

const styles = StyleSheet.create({
imgStyle:{
 margin:deviceHeight * 0.01,
},
imgcharStyle:{
marginTop:deviceHeight * 0.02,
alignSelf:'center'

},
  textStyle :{
  fontWeight:'bold',
  fontSize:deviceHeight * 0.021,
  marginTop:deviceHeight * 0.01
  },
  textNormalstyle:{
    fontSize:deviceHeight * 0.021,
    marginLeft:deviceHeight * 0.01
  },
  buttonStyle:{
    padding:deviceHeight * 0.01,
   	backgroundColor: '#202646',
	borderRadius:deviceHeight * 0.006
  }

});